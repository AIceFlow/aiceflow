/*
 * Abschnitt „Anbindung“: baut das Sprite mit den Logos der Anschlüsse und die Liste dazu.
 *
 *   npm i --no-save sharp && node scripts/build-connectors.mjs
 *
 * Quelle ist der öffentliche Katalog unter CATALOG (Name und Logo je Anschluss). Es landen nur
 * Anschlüsse im Strudel, die es dort wirklich gibt: ein Name, der im Katalog fehlt, bricht ab.
 * Die Website nennt die Quelle nicht.
 * Ergebnis: public/connectors/sprite.webp und src/landing/connectors-data.js.
 * Auswahl und Reihenfolge stehen in PICK, die Gruppen gehören zur Liste im Abschnitt (markup.html).
 */
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
let sharp;
try { sharp = require('sharp'); } catch { console.error('sharp fehlt: npm i --no-save sharp'); process.exit(1); }

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = join(ROOT, 'node_modules/.cache/connectors');
const CATALOG = 'https://cloud.activepieces.com/api/v1/pieces';
const CELL = 96;    // Kantenlänge eines Logos im Sprite
const COLS = 12;

/* Gruppe → Anschlüsse (Name im Katalog ohne Paket-Vorsatz), die bekanntesten zuerst */
const PICK = {
  mail: 'microsoft-outlook gmail microsoft-teams slack google-calendar zoom whatsapp telegram-bot imap smtp mattermost matrix discord twilio googlechat webex zoho-mail calendly ringcentral sendgrid mailjet',
  erp: 'microsoft-dynamics-365-business-central sap-ariba odoo netsuite oracle-fusion-cloud-erp xero quickbooks sage-accounting zoho-books bexio shopify woocommerce stripe mollie katana coupa workday bamboohr clockodo bigcommerce chargebee',
  crm: 'salesforce hubspot pipedrive microsoft-dynamics-crm zoho-crm freshsales copper close insightly vtiger attio teamleader activecampaign mailchimp sendinblue klaviyo linkedin lemlist pandadoc kommo',
  docs: 'microsoft-sharepoint microsoft-onedrive google-drive dropbox box docusign microsoft-excel-365 google-sheets google-docs microsoft-onenote notion airtable confluence smartsheet google-slides deepl wordpress typeform google-forms ninox jotform',
  tickets: 'jira-cloud service-now zendesk freshdesk freshservice asana trello monday clickup linear microsoft-365-planner microsoft-todo todoist wrike teamwork meistertask youtrack help-scout intercom pagerduty',
  data: 'microsoft-sql-server postgres mysql oracle-database snowflake google-bigquery amazon-s3 azure-blob-storage sftp http soap graphql mongodb apache-kafka rabbitmq databricks github gitlab microsoft-power-bi tableau azure-ad okta',
};

const res = await fetch(CATALOG);
if (!res.ok) throw new Error(`Katalog nicht erreichbar: HTTP ${res.status}`);
const catalog = await res.json();
const byName = new Map(catalog.map((p) => [p.name.replace('@activepieces/piece-', ''), p]));
const helpers = catalog.filter((p) => (p.categories ?? []).some((c) => ['CORE', 'FLOW_CONTROL', 'UNIVERSAL_AI'].includes(c)));
console.log(`Katalog: ${catalog.length} Einträge, davon ${catalog.length - helpers.length} Anschlüsse an Systeme (ohne Hilfsbausteine).`);

/* Gruppen reihum mischen, damit jede Gruppe über den ganzen Strudel verteilt ist */
const lists = Object.entries(PICK).map(([group, names]) => names.split(' ').map((name) => ({ name, group })));
const picked = [];
for (let i = 0; lists.some((l) => i < l.length); i++) for (const l of lists) if (l[i]) picked.push(l[i]);

mkdirSync(CACHE, { recursive: true });
const tiles = [];
const rows = [];
for (const [i, { name, group }] of picked.entries()) {
  const piece = byName.get(name);
  if (!piece) throw new Error(`„${name}“ steht nicht im Katalog.`);
  const file = join(CACHE, `${name}.${piece.logoUrl.split('?')[0].split('.').pop()}`);
  if (!existsSync(file)) {
    const logo = await fetch(piece.logoUrl);
    if (!logo.ok) throw new Error(`Logo für „${name}“ nicht ladbar: HTTP ${logo.status}`);
    writeFileSync(file, Buffer.from(await logo.arrayBuffer()));
  }
  // Quadratische Logos ohne Transparenz sind fertige Kacheln: sie füllen die Kachel randlos
  const src = sharp(readFileSync(file), { density: 300 });
  const { hasAlpha, width, height } = await src.metadata();
  const bleed = !hasAlpha && Math.abs(width / height - 1) < 0.04;
  const input = await src
    .resize(CELL, CELL, { fit: bleed ? 'cover' : 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toBuffer();
  tiles.push({ input, left: (i % COLS) * CELL, top: Math.floor(i / COLS) * CELL });
  rows.push([piece.displayName, group, bleed ? 1 : 0]);
}

const sheetRows = Math.ceil(picked.length / COLS);
const sprite = join(ROOT, 'public/connectors/sprite.webp');
mkdirSync(dirname(sprite), { recursive: true });
await sharp({ create: { width: COLS * CELL, height: sheetRows * CELL, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite(tiles)
  .webp({ quality: 88, alphaQuality: 92, effort: 6 })
  .toFile(sprite);

const data = `/* Erzeugt von scripts/build-connectors.mjs, nicht von Hand ändern. */
export const SPRITE = { url: '/connectors/sprite.webp', cols: ${COLS}, rows: ${sheetRows} };
/* [Name, Gruppe, randlos] in der Reihenfolge der Felder im Sprite */
export const CONNECTORS = [
${rows.map((r) => `  ${JSON.stringify(r)},`).join('\n')}
];
`;
writeFileSync(join(ROOT, 'src/landing/connectors-data.js'), data);
console.log(`${rows.length} Logos → ${sprite} (${Math.round(readFileSync(sprite).length / 1024)} KB)`);
