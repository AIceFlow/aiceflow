import LegalLayout from "@/components/landing/LegalLayout";
import { BrandMark } from "@/components/landing/SiteFooter";

/*
 * ENTWURF der Datenschutzerklärung, erstellt auf Basis der Dienste, die diese Seite tatsächlich
 * einbindet (Stand Oktober 2026): GitHub Pages (Hosting), lokale Schriften, Cookie-Banner mit
 * localStorage, Google Ads (gtag, Consent Mode), LinkedIn Insight Tag (nach Einwilligung),
 * Google Kalender Terminbuchung (lädt erst nach Klick), Film aus Supabase Storage, Kontakt per
 * E-Mail und Telefon. Vor Veröffentlichung rechtlich prüfen lassen; insbesondere die Serverregion
 * des Supabase-Projekts und die Angaben zu Google und LinkedIn.
 */
const Datenschutz = () => (
  <LegalLayout title="Datenschutzerklärung">
    <p className="legal__lead">
      Wir freuen uns über Ihr Interesse an <BrandMark />. Hier erfahren Sie, welche personenbezogenen Daten beim Besuch dieser
      Website verarbeitet werden, wozu und auf welcher Grundlage, und welche Rechte Sie haben.
    </p>

    <section>
      <h2>1. Verantwortlicher</h2>
      <p>
        <BrandMark /> GmbH
        <br />
        Nussdorfer Straße 9, 88662 Überlingen, Deutschland
        <br />
        Vertreten durch die Geschäftsführer Felix Funke und Dr. Heiner Di Camillo
        <br />
        E-Mail: <a href="mailto:hello@aiceflow.de">hello@aiceflow.de</a> · Telefon: <a href="tel:+4917663364095">+49 176 6336 4095</a>
      </p>
    </section>

    <section>
      <h2>2. Hosting und Server-Protokolle</h2>
      <p>
        Diese Website wird über GitHub Pages bereitgestellt (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA).
        Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und
        Browserangaben, um die Seite auszuliefern und die Sicherheit des Dienstes zu gewährleisten. Rechtsgrundlage ist unser
        berechtigtes Interesse an einer sicheren und zuverlässigen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).
        Eine Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework.
      </p>
    </section>

    <section>
      <h2>3. Schriftarten</h2>
      <p>Die Schriften dieser Website werden von unserem eigenen Server geladen. Dabei werden keine Daten an Google oder andere Schriftanbieter übertragen.</p>
    </section>

    <section>
      <h2>4. Einwilligung, Cookies und Speicherung im Browser</h2>
      <p>
        Beim ersten Besuch fragen wir, ob Sie Tracking zu Marketingzwecken zulassen. Ihre Entscheidung speichern wir im lokalen
        Speicher Ihres Browsers (Eintrag „cookie_consent“), damit wir nicht bei jedem Besuch erneut fragen. Diese Speicherung ist
        technisch erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Alle weiteren Cookies und Messungen nach Abschnitt 5 und 6 erfolgen nur
        mit Ihrer Einwilligung (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit mit Wirkung
        für die Zukunft widerrufen, über „Cookie-Einstellungen“ im Fuß jeder Seite.
      </p>
    </section>

    <section>
      <h2>5. Google Ads Conversion-Tracking</h2>
      <p>
        Wir nutzen Google Ads mit Conversion-Tracking (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).
        Das Skript von Google wird beim Aufruf geladen und arbeitet im Einwilligungsmodus: Ohne Ihre Zustimmung setzt es keine
        Cookies, und Google erhält nur eingeschränkte Signale ohne Cookie-Kennung. Mit Ihrer Zustimmung setzt Google Cookies, um
        zu messen, ob ein Besuch über eine Anzeige zustande kam. Dabei können Daten an Google LLC in die USA übermittelt werden;
        Google ist unter dem EU-US Data Privacy Framework zertifiziert.
      </p>
    </section>

    <section>
      <h2>6. LinkedIn Insight Tag</h2>
      <p>
        Nur mit Ihrer Einwilligung laden wir den LinkedIn Insight Tag (LinkedIn Ireland Unlimited Company, Wilton Plaza,
        Wilton Place, Dublin 2, Irland). Er hilft uns, die Wirkung unserer Anzeigen auf LinkedIn zu messen. LinkedIn kann
        dabei Daten an LinkedIn Corporation in die USA übermitteln, gestützt auf das EU-US Data Privacy Framework.
      </p>
    </section>

    <section>
      <h2>7. Terminbuchung über Google Kalender</h2>
      <p>
        Für Gesprächstermine binden wir die Terminbuchung von Google Kalender ein (Google Ireland Limited). Der Kalender wird erst
        geladen, wenn Sie auf „Kalender laden“ klicken oder ihn in einem neuen Tab öffnen. Erst dann werden Daten wie Ihre
        IP-Adresse an Google übertragen. Wenn Sie einen Termin buchen, verarbeiten Google und wir die Angaben, die Sie dabei
        machen (etwa Name und E-Mail-Adresse), um den Termin zu vereinbaren und durchzuführen. Rechtsgrundlagen sind Ihre
        Einwilligung durch den Klick (Art. 6 Abs. 1 lit. a DSGVO) und die Anbahnung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO).
        Das Gespräch findet über Google Meet statt.
      </p>
    </section>

    <section>
      <h2>8. Film</h2>
      <p>
        Unser Produktfilm liegt bei Supabase (Supabase, Inc.) und wird erst geladen, wenn Sie ihn abspielen. Dabei wird Ihre
        IP-Adresse an den Speicherdienst übertragen, damit er das Video ausliefern kann. Rechtsgrundlage ist unser berechtigtes
        Interesse an einer schnellen Auslieferung des Films (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
    </section>

    <section>
      <h2>9. Kontakt per E-Mail oder Telefon</h2>
      <p>
        Wenn Sie uns schreiben oder anrufen, verarbeiten wir Ihre Angaben, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist die
        Anbahnung oder Durchführung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO) oder unser berechtigtes Interesse an der
        Beantwortung (Art. 6 Abs. 1 lit. f DSGVO). Wir löschen die Daten, sobald sie dafür nicht mehr erforderlich sind und keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
    </section>

    <section>
      <h2>10. Ihre Rechte</h2>
      <p>Sie haben das Recht auf</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO),</li>
        <li>Berichtigung (Art. 16 DSGVO) und Löschung (Art. 17 DSGVO),</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO) und Datenübertragbarkeit (Art. 20 DSGVO),</li>
        <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO),</li>
        <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).</li>
      </ul>
      <p>
        Schreiben Sie uns dazu an <a href="mailto:hello@aiceflow.de">hello@aiceflow.de</a>. Außerdem können Sie sich bei einer
        Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim Landesbeauftragten für den Datenschutz und die
        Informationsfreiheit Baden-Württemberg.
      </p>
    </section>

    <p className="legal__meta">Stand: Oktober 2026</p>
  </LegalLayout>
);

export default Datenschutz;
