# BIGEMIP SARL — website

Bilingual (French / English) marketing site for **BIGEMIP SARL** (Bureau d'Investigations Géologique, Minière et Pétrolière), a geological, mining and petroleum consultancy based in Gombe, Kinshasa (DRC).

The site presents the company's services, field work, team and contact details to investors, mining and petroleum operators, and public institutions.

## Tech stack

| Area      | Tool                                                           |
| --------- | -------------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org/docs) (App Router, Turbopack)  |
| UI        | React 19, TypeScript                                           |
| Styling   | Tailwind CSS 4 (design tokens in `globals.css`)                |
| i18n      | [next-intl 4](https://next-intl.dev) — `fr` (default) and `en` |
| Motion    | [Motion](https://motion.dev) (hero animation only)             |
| Forms     | react-hook-form + zod                                          |
| Icons     | lucide-react                                                   |
| Font      | Archivo (variable, self-hosted in `src/fonts`)                 |

## Getting started

Requirements: Node.js 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). You are redirected to `/fr` (or `/en`, depending on your browser language).

### Scripts

| Command      | What it does                                   |
| ------------ | ---------------------------------------------- |
| `pnpm dev`   | Start the dev server with Turbopack            |
| `pnpm build` | Production build (pre-renders every page)      |
| `pnpm start` | Serve the production build                     |
| `pnpm lint`  | Run ESLint (see [Known issues](#known-issues)) |

### Environment variables

| Variable               | Default                    | Purpose                                                             |
| ---------------------- | -------------------------- | ------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://bigemip-sarl.com` | Public domain used for canonical URLs, the sitemap and share images |

Set it in your hosting provider if the production domain is different. No other variables are needed.

## Pages

All routes exist in both locales: `/fr/...` and `/en/...`.

| Route                                      | Content                                                                |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| `/`                                        | Home: hero, assessment process, services, field work, events, partners |
| `/services`                                | Services, key figures, mission                                         |
| `/services/en-savoir-plus`                 | Mapping, data and software (GIS, databases, map types)                 |
| `/about`                                   | Company, registration, clients, team                                   |
| `/contact`                                 | Contact form and office details                                        |
| `/faq`, `/support`                         | Help pages                                                             |
| `/privacy-policy`, `/terms-and-conditions` | Legal pages                                                            |
| `/careers`                                 | Placeholder (hidden from search engines)                               |

## Project structure

```
messages/               Translations: fr.json, en.json
public/
  assets/               Photos, logo, team portraits, partner logos
  og/                   Social share images (og-fr.jpg, og-en.jpg)
scripts/                Python scripts that generate the contour lines and share images
src/
  app/
    [locale]/           Pages, layout and global styles
    robots.ts           /robots.txt
    sitemap.ts          /sitemap.xml
  components/
    atoms/              Small building blocks (Button, Feedback)
    molecules/          Page sections, grouped by page (home, about, services...)
      _common/          Sections shared across pages (PageHeader, Strata, CTA, partners)
    seo/                JSON-LD structured data
    ui/                 Navigation, footer, contour backdrop
  fonts/                Archivo variable font
  i18n/                 next-intl routing, navigation and request config
  lib/
    site.ts             Site URL, company facts, list of public routes
    seo.ts              Per-page metadata builder
    contours.ts         Generated topographic contour paths
  middleware.ts         Locale detection and redirects
```

## Editing content

All visible text lives in `messages/fr.json` and `messages/en.json`. **Every key must exist in both files**, otherwise the page shows the raw key.

- Page copy is grouped by page: `HomePage`, `Services`, `More`, `AboutUs`, `ContactUs`, `Faq`...
- Interface labels added during the redesign live under `UI`.
- Page titles and search descriptions live under `Metadata`. Keep titles under about 60 characters and descriptions under about 155.

Company facts (address, phones, email, RCCM, IDNAT) used in structured data are in `src/lib/site.ts`. The same details also appear in the footer and contact components, so update both places if they change.

### Images

Put photos in `public/assets/` and render them with `next/image`, which resizes and compresses them automatically. Give meaningful photos a descriptive `alt` text (translated through `messages/*.json`); use `alt=""` only for purely decorative images.

### Adding a page

1. Create `src/app/[locale]/<route>/page.tsx` following an existing page: export `generateMetadata` (via `pageMetadata` from `@/lib/seo`) and call `setRequestLocale(locale)` in the page component so it is pre-rendered.
2. Add its title and description under `Metadata` in both message files.
3. Add the route to `ROUTES` in `src/lib/site.ts` so it appears in the sitemap.
4. Link to it from the navigation or footer using `Link` from `@/i18n/navigation` (not `next/link`), so the visitor's language is kept.

## Design system

The visual direction is a **geological cross-section**: colours from the logo and the field photography, and patterns borrowed from geological map legends.

**Colours** (Tailwind tokens defined in `src/app/[locale]/globals.css`):

| Token      | Hex       | Use                              |
| ---------- | --------- | -------------------------------- |
| `basalt`   | `#1f1d33` | Dark sections, text              |
| `ore`      | `#d4a84b` | Primary buttons, accents on dark |
| `bronze`   | `#8a6420` | Accent text on light backgrounds |
| `laterite` | `#a9512c` | Consulting stratum, highlights   |
| `ochre`    | `#c08a3e` | Data bank stratum                |
| `schist`   | `#4f5866` | Software stratum                 |
| `survey`   | `#f1f2ee` | Page background                  |

**Typography**: Archivo only. Headings use the wide cut through the `type-display`, `type-title` and `type-sub` classes; body text uses the normal width.

**Signature elements**

- **Strata** (`_common/strata.tsx`): the services drawn as rock layers, each with a legend pattern (`fill-dots`, `fill-dashes`, `fill-hatch`) and a wavy bedding contact between layers.
- **Contour lines** (`ui/contour-field.tsx`): topographic lines used on dark panels. They are generated from a synthetic elevation model rather than drawn by hand.
- **Hero animation**: the contour lines draw themselves on load. It is the only automatic animation on the site and is disabled for visitors who prefer reduced motion.

### Regenerating generated assets

The contour paths and the share images are produced by Python scripts. You only need them if you want to change those assets.

```bash
pip install numpy scipy matplotlib pillow fonttools brotli

python scripts/generate-contours.py src/lib/contours.ts
python scripts/generate-og-images.py .
```

## SEO

- Localized `<title>`, description, canonical URL and `hreflang` alternates on every page (`src/lib/seo.ts`).
- `/sitemap.xml` with language alternates and `/robots.txt`.
- JSON-LD: `ProfessionalService` and `WebSite` on every page, `BreadcrumbList` on inner pages.
- Open Graph and Twitter share images per locale (`public/og/`).
- All pages are statically pre-rendered at build time.

After the first deployment:

1. Add the domain to [Google Search Console](https://search.google.com/search-console), submit `/sitemap.xml`, and paste the verification token in `src/app/[locale]/layout.tsx` (look for `verification`).
2. Create a Google Business Profile with the same name, address and phone as the site.

## Deployment

Any Node.js host that supports Next.js works. On [Vercel](https://vercel.com): import the repository, keep the default build settings, and set `NEXT_PUBLIC_SITE_URL` if needed.

## Known issues

- **Contact form has no backend.** The form posts to `/api/contact`, which does not exist yet. Visitors currently see a message asking them to email `contact@bigemip.com` instead. Add an API route (for example with Resend or Nodemailer) to make it send.
- **Events are out of date.** All events on the home page are from 2025 and display as "Past".
- **No social links.** The social icons were removed because they all pointed to `#`. Add the real profile URLs to the footer.
- **ESLint config.** `pnpm lint` fails on the legacy `@eslint/eslintrc` setup in `eslint.config.mjs`, which needs migrating to the flat config used by `eslint-config-next` 16.
- **Two lockfiles.** The project uses pnpm, but a `package-lock.json` is also present. Delete it to avoid tooling warnings.
- **Unused map component.** `src/components/atoms/map.tsx` (Leaflet) is not used anywhere and can be removed with the `leaflet` dependencies.
