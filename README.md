# Tobams Group — Training and Development

A pixel-perfect, responsive build of the Frontend Intern Assessment Figma design, done in Next.js and Tailwind CSS v4.

**Live site:** https://tobams.vercel.app
**Repo:** https://github.com/abquad1/tobams
**Figma:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1

---

## Stack

Next.js 16 (App Router) with TypeScript, Tailwind CSS v4, and nothing else in the way of styling — no component library, no second CSS framework. Images go through `next/image`, and the two typefaces (Nunito for headings, Nunito Sans for body copy) are loaded locally via `next/font/local` rather than pulled from Google Fonts at runtime.

## Running it locally

```bash
git clone https://github.com/abquad1/tobams.git
cd tobams
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` / `npm run start` for a production build, `npm run lint` to check it's clean.

## How the page is put together

`app/page.tsx` doesn't hold any markup itself — it just imports and stacks the section components in order. Each section of the design got its own file under `/components`:

- `navbar.tsx` — header and nav, including the mobile drawer
- `hero.tsx` — the top banner
- `LMS.tsx` — Learning Management System section
- `training-section.tsx` — a reusable image + copy row, used by `trainings.tsx` for both the corporate and individual training blocks so they're not duplicated
- `MDP.tsx` — Management Development Program
- `transformation.tsx` — Transformation Hub with Jite Newton
- `consultant-training.tsx` and `booking.tsx` — the consultant-training pitch and consultation CTA
- `testimonial.tsx` — the testimonials carousel
- `footer.tsx`, backed by `footer-data.ts` for the link columns, offices, and contact details
- `icons/` — every icon in the design as its own small SVG component, colored via `currentColor` so they pick up whatever text color is set where they're used

Fonts, metadata, and the navbar live in `app/layout.tsx`. Landmarks are real HTML — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` — rather than generic divs.

## Design decisions and assumptions

**Colors** are pulled from Figma's Inspect panel and mapped as CSS variables in `globals.css`, then exposed to Tailwind through `@theme inline` — so `bg-primary`, `text-senary`, `bg-secondary` etc. all trace back to the actual hex values in the design instead of being guessed.

**Breakpoints**: the brief's three checkpoints (425 / 768 / 1280) mostly map to Tailwind's `md:` and `xl:` prefixes rather than `sm:`/`md:`/`lg:`. Figma only provided desktop and mobile frames — no dedicated tablet layout — so tablet was interpolated by judgment rather than to a spec. The main nav in particular has 8 items plus dropdown chevrons that don't fit legibly until closer to 1280px, so the mobile hamburger menu stays in use through the full tablet range and only switches to the horizontal nav at `xl:`. Everywhere else (feature rows, images-and-text sections) switches to the desktop layout earlier, at `md:`.

**Reusable rows**: Corporate Trainings, Personalised Individual Training, and Capacity Development all share one `TrainingSection` component and a `trainingCards` data array — same shape, alternating image side, one heading/copy/bullet list per entry — instead of three near-identical components.

**Nav dropdowns**: About, What We Do, and Jobs have chevrons that toggle open/closed state and are fully keyboard-operable (Enter/Space, focus-visible, `aria-expanded`), but since this is a single static page with no corresponding subpages, they don't open real flyout menus with content — noted here rather than left silently incomplete.

**Booking section copy**: the mobile and desktop headlines are two different strings from the design, not one string truncated with CSS — worth knowing since they read a little differently side by side.

## Accessibility

Semantic landmarks throughout, real `alt` text on every photo/logo/avatar (not filename placeholders), decorative bullets and dividers marked `aria-hidden`. Every interactive element is a native `<button>` or `<Link>`, so keyboard navigation and focus states come for free rather than being bolted on. The mobile menu has proper open/close labels and `aria-expanded` state.

## AI tool disclosure

I used Claude throughout this build — for scaffolding the initial project structure, generating and debugging individual components, converting Figma specs into Tailwind values, and catching bugs (flex/stretch issues, invalid class names, off-by-one carousel logic, that kind of thing) as I went. I made the actual implementation decisions, checked everything against Figma myself, and did the final pass through the code.

## Known issues

- `globals.css` still has the default `prefers-color-scheme: dark` block from `create-next-app`. It's not part of the Figma design (which is light-only) and can invert colors under OS dark mode — should be removed before this is considered final.
- The nav dropdown chevrons are keyboard-toggleable but don't render actual submenu content (see note above).
- `.primary-button` is one shared class in `globals.css` rather than pure inline Tailwind utilities — a deliberate exception for a color/style combo reused across several buttons.
- A couple of `alt` texts (hero image, LMS photo) could be more descriptive of what's actually happening in the shot rather than reading like filenames.

## Checklist

- [x] Public repo, live URL working
- [x] README covers setup, stack, Figma link, decisions, known issues, AI disclosure
- [x] App Router + Tailwind only, no other CSS framework or UI kit
- [x] Components split under `/components`, no monolithic page file
- [x] Semantic HTML, `next/image`, `next/font`