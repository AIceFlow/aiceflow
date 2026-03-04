# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

AIceFlow Launchpad — a marketing website for AIceFlow, an AI automation agency targeting Mittelstand and growth-focused companies in the DACH region. Single-page React app with anchor-based navigation.

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

**Single page** (`src/pages/Index.tsx`): Composes all section components in order: Header → Hero → About → Services → HowItWorks → Universal → Showcase → WhyAIceFlow → Team → Contact → Footer.

**Routing**: React Router v6 with `basename` from `import.meta.env.BASE_URL`. Only two routes: `/` (Index) and `*` (NotFound). In-page navigation uses anchor links (`#about`, `#services`, etc.).

## Key Conventions

**All text content** lives in the translation object inside `src/hooks/useLanguage.tsx` (en/de). To update any copy, edit the translations there — not in component JSX. The `useLanguage()` hook provides a `t()` function and `language` state.

**Path alias**: `@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).

**Styling**: Tailwind utility classes only (no CSS modules). Colors use HSL CSS variables defined in `src/index.css` (:root for light, .dark for dark mode). Custom gradients, shadows, and animations are extended in `tailwind.config.ts`.

**Icons**: Use `lucide-react`.

**Adding shadcn/ui components**: Configured via `components.json` (style: default, baseColor: slate, cssVariables: true).

## Environment Variables

All prefixed with `VITE_` for client-side access:
- `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` — Supabase connection
- `VITE_GOOGLE_ADS_ID` — Google Ads conversion tracking
- `VITE_LINKEDIN_PARTNER_ID` — LinkedIn Insight Tag

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Pushes to `main` trigger build and deploy. Custom domain: www.aiceflow.de.
