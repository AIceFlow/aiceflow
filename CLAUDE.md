# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

AIceFlow website. Since October 2026 the home page is built around the **AIceFlow Governance Gateway**
(primary product, with AIceFlow Trace) and **Agents von AIceFlow** (service), aimed at managing
directors in the German Mittelstand. German only, Sie-Form. The design source is the prototype in
`../governance-layer` (scroll story, canvas „Governance Gateway – Redesign“).

## Commands

```bash
npm run dev        # Start dev server (port 8080)
npm run build      # Production build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Tech Stack

- React 18 + TypeScript (Vite, SWC)
- Tailwind CSS 4 via `@tailwindcss/vite`, configured in `src/index.css` (`@theme`, no `tailwind.config.ts`),
  with HSL design tokens defined there
- AIceFlow Design System in `design-system/` (tokens, fonts, component classes; rules below), imported in
  `src/index.css`
- shadcn/ui + Radix UI primitives (48 components in `src/components/ui/`)
- Framer Motion for animations
- Supabase for form submissions
- Google Ads + LinkedIn Insight Tag for analytics

## Architecture

**App shell** (`src/App.tsx`): Wraps the app in QueryClientProvider → LanguageProvider → TooltipProvider → BrowserRouter. CookieBanner sits outside the router.

**Home page** (`src/pages/Index.tsx`): `<Landing />` + `<SiteFooter />` from `src/components/landing/`.
`Landing` injects `src/landing/markup.html` (raw HTML: SVG stage, nine-chapter scroll story (chapter 08 „ChatGPT und Claude“ since 2026-11-11: two chat windows whose requests run through the Gateway; OpenAI and Claude marks from simple-icons, used at the user's request), Angebot,
Trace, Einsatz, Betrieb, Pilot, Team, Termin, film dialog) and calls `initLanding()` from
`src/landing/initLanding.js`, which wires the vanilla modules (`stage.js`, `story.js`, `approval.js`,
`drill.js`, `trace.js`, `film.js`, `booking.js`; GSAP ScrollTrigger + Lenis) and returns a teardown
that is run when the route changes. Styles: `src/landing/landing.css` (plain CSS with its own tokens,
Nunito/Inter from `public/fonts/`). Change the page in `../governance-layer` first, then copy markup,
modules and CSS over (paths for `logo/`, `film/`, `team/` are absolute here). The former sections
(Hero, About, Services …) are still in `src/components` but no longer rendered.

**Routing**: React Router v6 with `basename` from `import.meta.env.BASE_URL`. Routes: `/` (Index),
`/impressum`, `/datenschutz` (both via `LegalLayout`), `*` (NotFound). GitHub Pages serves deep links
through `public/404.html` → `index.html` redirect. The footer links Impressum and Datenschutz, and
„Cookie-Einstellungen“ resets the consent so the banner shows again. The cookie banner links the
Datenschutz page.

**Booking**: Google Calendar appointment schedule, embedded only after a click (`src/landing/booking.js`).
Opening it fires the gtag event `termin_kalender_geoeffnet` (`src/utils/analytics.ts`). The film is
served from the Supabase bucket `public-assets/marketing` (render of 2026-11-11, 99.3 s; `FILM_T` in `film.js` holds the scene starts).

## Key Conventions

**Text content**: the home page copy lives in `src/landing/markup.html`, legal texts in
`src/pages/Impressum.tsx` and `src/pages/Datenschutz.tsx`. Every visible „AIceFlow“ uses the word mark
(`span.aice`, „AI“ in `#4876FF`), product names use `span.prod`. The translation object in
`src/hooks/useLanguage.tsx` (en/de) only serves the former components.

**Path alias**: `@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**Styling**: the home and legal pages use `src/landing/landing.css` (plain CSS, deliberately not Tailwind,
so it stays identical to the prototype; its tokens avoid shadcn names, e.g. `--ring-hair`). Everything
else uses Tailwind utility classes with the HSL variables from `src/index.css`. `src/index.css` imports
`landing.css` into Tailwind's `base` layer (not from JS): unlayered, its reset would beat every Tailwind
utility. Tailwind only scans `src/**/*.{ts,tsx}` (`source(none)` + `@source`), not `markup.html`.

**Design system in the build**: `src/index.css` imports `design-system/tokens.css` and `components.css`
into the `base` layer before `landing.css`, and `design-system/tailwind.css` for the classes (`bg-paper`,
`font-display` …). `landing.css` also defines `--ink`, `--surface`, `--blue`, `--font-sans`, `body` and
`.lead` and wins there, so the current page looks unchanged. A section built with the design system
gets its exact values with `data-theme="light"` or `"dark"` on the section (not on `<html>` while
`landing.css` is loaded); a rule in `src/index.css` adds font, text color and background there. Once
`landing.css` is gone, the design system applies everywhere. `--border` and `border-border` belong to
the design system; the shadcn border is `--shadcn-border` / `border-shadcn-border`. Do not edit files
in `design-system/`; a new export replaces the folder. Logos are in `public/logo/` (the design-system
previews expect `/logos/`).

**Icons**: Use `lucide-react`.

**Adding shadcn/ui components**: Configured via `components.json` (style: default, baseColor: slate, cssVariables: true).

## Environment Variables

All prefixed with `VITE_` for client-side access:
- `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` — Supabase connection
- `VITE_GOOGLE_ADS_ID` — Google Ads conversion tracking
- `VITE_LINKEDIN_PARTNER_ID` — LinkedIn Insight Tag

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Pushes to `main` trigger build and deploy. Custom domain: www.aiceflow.de.

## AIceFlow Design System

Diese Regeln gelten für jede Änderung an Oberfläche, Texten und Bildern dieser Website. Die Quelle der Wahrheit ist der Ordner `design-system/`.

### Vor jeder Änderung lesen

1. `design-system/README.md`: Farbe, Schrift, Layout, Logo.
2. `design-system/01-Marke.md`: Positionierung, Botschaften, Ton.
3. `design-system/03-Glossar.md`: welche Wörter wir verwenden und welche nicht.
4. Für Website-Abschnitte das passende Vorbild unter `design-system/components/<Name>/` (README.md und preview.html): Einstieg, Spalten, Band, TraceZeile, Status, Schichtbild, Button, Abschnittsmarke.

### Technik

- Farben, Schriften, Abstände und Radien nur über die Tokens aus `design-system/tokens.css` (CSS-Variablen wie `var(--ink)`, `var(--font-display)`) oder die Tailwind-Klassen aus `design-system/tailwind.css` (`bg-paper`, `text-ink`, `font-display`). Keine Hex-Werte im Code.
- `design-system/components.css` enthält die fertigen Klassen (`af-hero`, `af-trace`, `af-btn` …). Nutze sie oder baue Komponenten exakt nach ihrem Vorbild.
- Schriften liegen in `design-system/fonts/` und werden selbst gehostet. Nie Google Fonts einbinden.
- Dunkles Thema über `data-theme="dark"` am `<html>`.
- Tokens nie direkt in `tokens.css` ändern. Änderungen am Design System passieren im Design System und werden neu exportiert.

### Harte Regeln

- Blau (`--blue`) nur als Akzent: Abschnittsmarke, Haken in „Freigegeben“, Prüfkante, Kennziffern, Signet. Nie als Fläche, Button oder Hinterlegung. Links in `--blue-strong`.
- Gloock (`font-display`) nur ab 32px, höchstens zwei Zeilen, im Einstieg drei. Nie für Fließtext.
- Website-Text in Host Grotesk, Lesetexte (Blog, Whitepaper) in Newsreader, Daten und Marken in Martian Mono.
- Jede Seite: Einstieg in `--ink` mit Protokoll, danach hell auf `--paper`, am Ende ein Band in `--well` mit genau einem Button.
- Keine Schatten, keine Verläufe, kein Glas, keine Pillen, keine Icons außer den vier Status-Formen, keine Stockfotos, keine KI-Bilder.
- Texte: kurze Aussagesätze, Sie-Form, keine Gedankenstriche, keine Ausrufezeichen, keine Füllwörter wie „nahtlos“ oder „KI-gestützt“, keine Fachkürzel wie MCP oder LLM.
- Keine erfundenen Kundennamen, Zitate oder Zahlen.

### Vor dem Abschluss prüfen

- Kein Hex-Wert und keine fremde Schrift im Diff.
- Blau nirgends als Fläche.
- Kontrast Text mindestens 4,5:1 in hellem und dunklem Thema.
- Auf 390px Breite geprüft (Telefon).
- Alle neuen Texte gegen das Glossar gelesen.
