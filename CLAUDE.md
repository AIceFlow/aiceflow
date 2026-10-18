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
- Tailwind CSS 3 with HSL design tokens defined in `src/index.css`
- shadcn/ui + Radix UI primitives (48 components in `src/components/ui/`)
- Framer Motion for animations
- Supabase for form submissions
- Google Ads + LinkedIn Insight Tag for analytics

## Architecture

**App shell** (`src/App.tsx`): Wraps the app in QueryClientProvider → LanguageProvider → TooltipProvider → BrowserRouter. CookieBanner sits outside the router.

**Home page** (`src/pages/Index.tsx`): `<Landing />` + `<SiteFooter />` from `src/components/landing/`.
`Landing` injects `src/landing/markup.html` (raw HTML: SVG stage, eight-chapter scroll story, Angebot,
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
served from the Supabase bucket `public-assets/marketing`.

## Key Conventions

**Text content**: the home page copy lives in `src/landing/markup.html`, legal texts in
`src/pages/Impressum.tsx` and `src/pages/Datenschutz.tsx`. Every visible „AIceFlow“ uses the word mark
(`span.aice`, „AI“ in `#4876FF`), product names use `span.prod`. The translation object in
`src/hooks/useLanguage.tsx` (en/de) only serves the former components.

**Path alias**: `@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**Styling**: the home and legal pages use `src/landing/landing.css` (plain CSS, deliberately not Tailwind,
so it stays identical to the prototype; its tokens avoid shadcn names, e.g. `--ring-hair`). Everything
else uses Tailwind utility classes with the HSL variables from `src/index.css`.

**Icons**: Use `lucide-react`.

**Adding shadcn/ui components**: Configured via `components.json` (style: default, baseColor: slate, cssVariables: true).

## Environment Variables

All prefixed with `VITE_` for client-side access:
- `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` — Supabase connection
- `VITE_GOOGLE_ADS_ID` — Google Ads conversion tracking
- `VITE_LINKEDIN_PARTNER_ID` — LinkedIn Insight Tag

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Pushes to `main` trigger build and deploy. Custom domain: www.aiceflow.de.
