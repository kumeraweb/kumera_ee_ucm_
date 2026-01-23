# Copilot Instructions: Kumera EE UCM Landing Page

## Project Overview

This is a **medical rescue service landing page** built with **Astro 5** and **TailwindCSS 4**. It's a Spanish-language marketing site for a private ambulance/medical rescue service in Chile, featuring pricing plans and a floating WhatsApp contact widget.

### Tech Stack

- **Framework**: Astro 5.16+ (static/hybrid rendering, no SPA)
- **Styling**: TailwindCSS 4.1 + Vite plugin
- **Icons**: Lucide Astro (`lucide-astro`, `@lucide/astro`)
- **Tracking**: Google Ads conversion tracking (gtag)
- **Language**: TypeScript + Astro components

## Architecture & Key Patterns

### File Structure

```
src/
  pages/        # Single index.astro (entry point)
  components/   # Reusable .astro components (Header, Hero, PlanGrid, etc.)
  data/         # Config and content data (planes.ts, config.ts)
  layout/       # Layout.astro (shared page wrapper)
  styles/       # global.css (TailwindCSS import only)
```

### Data Flow Pattern

**Data → TypeScript Interfaces → Component Props → UI**

1. **[src/data/planes.ts](src/data/planes.ts)**: Defines `PlanRescate` interface and `PLANES` array (3 medical rescue plans)
2. **[src/data/config.ts](src/data/config.ts)**: `CONTACT_INFO` object + `getWhatsAppLink()` helper for WhatsApp integration
3. **[src/components/PlanGrid.astro](src/components/PlanGrid.astro)**: Maps over `PLANES` array, renders with Tailwind conditional styling (`plan.destacado` = featured plan with red border & scale-up)
4. **[src/layout/Layout.astro](src/layout/Layout.astro)**: Master template—imports global CSS, CONTACT_INFO, sets up head metadata, Google Ads tracking

### Component Composition

- **[src/pages/index.astro](src/pages/index.astro)**: Orchestrates all components in order: Layout → Header → Hero → ValueProposition → PlanGrid → Gallery → FloatingWhatsApp
- **All components are static Astro files** (`.astro`)—no JavaScript islands or client-side interactivity by default
- **Icons from Lucide**: `CheckCircle2` icon used in plan features; import pattern: `import { IconName } from 'lucide-astro'`

## Key Developer Workflows

### Running the Project

```bash
npm run dev      # Start local dev server (localhost:4321)
npm run build    # Static site generation to ./dist/
npm run preview  # Preview production build locally
npm run astro -- <cmd>  # Direct Astro CLI (e.g., `astro add`, `astro check`)
```

### Development Patterns

1. **Add a new component**: Create `.astro` file in `src/components/`, import in page/parent component
2. **Update plan pricing**: Edit `PLANES` array in [src/data/planes.ts](src/data/planes.ts)—changes auto-reflect in PlanGrid
3. **Change contact info**: Modify `CONTACT_INFO` in [src/data/config.ts](src/data/config.ts)—used in Layout (footer) and WhatsApp links
4. **Styling**: Use Tailwind classes directly in `.astro` templates (no CSS modules needed)

## Project-Specific Conventions

### Tailwind & Spanish Content

- **Responsive breakpoints**: `md:` prefix for tablet/desktop (e.g., `md:text-4xl`, `md:grid-cols-3`)
- **Color scheme**: Blue (brand), red (highlights/CTAs), slate (backgrounds/text)
- **Max-width wrapper**: `max-w-7xl` for content sections, `max-w-4xl` for narrower sections
- **All text is in Spanish** (es-CL locale in HTML tag)—maintain Spanish terminology (e.g., "planes," "asesoría," "rescate")

### WhatsApp Integration

- Function: `getWhatsAppLink(message?: string)` ([src/data/config.ts](src/data/config.ts))
- Returns: `https://wa.me/{phone}?text={encodedMessage}`
- Usage: Pass to href in anchor tags, message auto-encodes
- Erika is the single point of contact (sales executive)

### Featured Plan Styling Pattern

In [src/components/PlanGrid.astro](src/components/PlanGrid.astro):

```astro
class={`... ${plan.destacado ? 'border-red-500 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-lg'}`}
```

- `destacado: true` = red border, large shadow, scaled up (Full Rescue Individual is featured)
- Plans can have optional `etiqueta` (badge label like "Más Vendido", "Recomendado")

### Metadata & Tracking

- **Page title & description**: Set in [src/layout/Layout.astro](src/layout/Layout.astro) meta tags (currently points to medical rescue counseling)
- **Google Ads tracking**: GTM ID `AW-17899206383` configured in Layout head (conversion tracking)
- **Font**: Lato (wght 400, 700, 900) via Google Fonts CDN

## Common Tasks

| Task                         | Location                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------- |
| Add new pricing plan         | [src/data/planes.ts](src/data/planes.ts) + `PLANES` array                         |
| Update contact info/WhatsApp | [src/data/config.ts](src/data/config.ts)                                          |
| Change page title/SEO        | [src/layout/Layout.astro](src/layout/Layout.astro) meta tags                      |
| Add new page section         | Create `.astro` component in `src/components/`, import in `src/pages/index.astro` |
| Modify plan grid styling     | [src/components/PlanGrid.astro](src/components/PlanGrid.astro) Tailwind classes   |
| Update global fonts/colors   | [src/styles/global.css](src/styles/global.css) (currently minimal; add to top)    |

## Important Notes

- **Static site**: Output is pre-rendered HTML—no server-side logic needed
- **TypeScript strict mode**: `tsconfig.json` uses `astro/tsconfigs/strict`
- **No framework JS**: Astro components are server-rendered; use `client:` directive only if adding interactive islands (React, Vue, etc.)
- **Astro Pages = Routes**: Any `.astro` or `.md` in `src/pages/` becomes a URL route
