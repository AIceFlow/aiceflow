# AIceFlow Launchpad - Agent Context

## 1. Business Overview

**Project Name:** AIceFlow Launchpad
**Type:** Marketing Website / Landing Page
**Product:** AIceFlow (AI Automation Agency)

### Core Mission
AIceFlow is an AI automation agency for small and mid-sized businesses (SMEs) in the DACH region. We act as the "AI Operations Layer," turning repetitive, manual work into reliable automated workflows.
**Key Value Prop:** Practical implementations in days/weeks, not theoretical consulting.
**Outcome:** Time saved, reduced errors, faster response times, and focus on revenue-driving work.

### Target Audience
SMEs in the DACH region without an in-house tech department who need reliable, secure, and tailored automation (e.g., Logistics, Marketing, Operations).

### Key Sections (User Journey)
1.  **Hero**: Positioning as the "AI Operations Layer" with a focus on practical execution.
2.  **About**: The "why" – pragmatism over theory.
3.  **Services**: Specific examples (Invoice processing, Support summaries, KPI digests).
4.  **How It Works**: The step-by-step process (Identify -> Build -> Train -> Handover).
5.  **Showcase**: Visualizing the "Control Center" / Dashboard.
6.  **Team**: Highlighting Felix Funke (Founder) and the expert team approach.
7.  **Contact**: Conversion for "Strategy Session".

## 2. Technical Overview

### Tech Stack
- **Framework:** React 18 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **UI Library:** shadcn/ui + Radix UI
- **Animation:** Framer Motion
- **Internationalization:** Custom `useLanguage` hook (content stored in `src/hooks/useLanguage.tsx`).

### Project Structure
- **Root**: Config files.
- **`/src`**:
    - **`/components`**: UI and Feature components.
    - **`/pages`**: `Index.tsx`.
    - **`/hooks`**: `useLanguage.tsx` (contains ALL text content).
    - **`/assets`**: Images.

### Development Conventions
- **Content Updates**: modify `src/hooks/useLanguage.tsx`.
- **Styling**: Tailwind utility classes.
- **Icons**: `lucide-react`.
- **Responsiveness**: Mobile-first.

### Recent Changes
- Pivot from Co-Founder model to Solo Founder (Felix Funke) + Expert Team.
- Content refocused on "Practical Automation" vs "Consulting".