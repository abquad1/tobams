# Tobams Group — Training and Development

A responsive build of the Frontend Intern Assessment Figma design, made with Next.js and Tailwind CSS v4.

**Live site:** https://tobams-weld.vercel.app/
**Repo:** https://github.com/abquad1/tobams
**Figma:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=1-1387&t=vrhivaZI2s6lAukn-0

---

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS v4. No other CSS framework, no component library. Images use `next/image`. The two fonts (Nunito and Nunito Sans) are loaded locally with `next/font/local` instead of from Google Fonts.

## Running it locally

```bash
git clone https://github.com/abquad1/tobams.git
cd tobams
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` and `npm run start` for a production build, and `npm run lint` to check the code.

## How the page is built

`app/page.tsx` just stacks the section components in order — it has no markup of its own. Each part of the design is its own file in `/components`:

- `navbar.tsx` — header, nav links, and the mobile menu
- `hero.tsx` — the top banner
- `LMS.tsx` — Learning Management System section
- `training-section.tsx` — one reusable image + text row, used by `trainings.tsx` for both the corporate and individual training sections, so they don't repeat the same code
- `MDP.tsx` — Management Development Program
- `transformation.tsx` — Transformation Hub with Jite Newton
- `consultant-training.tsx` and `booking.tsx` — the consultant training section and the consultation CTA
- `testimonial.tsx` — the testimonials carousel
- `footer.tsx`, with `footer-data.ts` holding the link columns, offices, and contact details
- `icons/` — every icon as its own small SVG component, colored with `currentColor` so it works wherever it's used

Fonts, page metadata, and the navbar all live in `app/layout.tsx`. The page uses real HTML landmarks — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` — not just divs.

## Design decisions

**Colors** come from Figma's Inspect panel and are set as CSS variables in `globals.css`. Tailwind picks them up through `@theme inline`, so classes like `bg-primary` and `text-senary` match the real design colors.

**Breakpoints**: the brief asks for 425px, 768px, and 1280px. Most of this is built with Tailwind's `md:` and `xl:` prefixes. Figma only gave a desktop frame and a mobile frame — no tablet frame — so the tablet layout is my own judgment call, not copied from a spec. The main nav has 8 links plus dropdown arrows, which don't fit well until close to 1280px, so the mobile menu stays in use through tablet and only switches to the full nav at `xl:`. Other sections switch to their desktop layout earlier, at `md:`.

**LMS heading size and image width**: ma sets the "Learning Management System" heading to 40px, but only on the 1440px+ frame — there's no design for sizes in between. At 40px, the heading wrapped to two lines on smaller desktop screens, so I used 30px below 1440px and switched to the full 40px at 1440px and up. I also made the image column about 55% of the row's width instead of 50/50, so the photo stays a perfect circle without squeezing the heading.

**Mobile navigation**: I added a slide-out sidebar menu for mobile. This isn't in the Figma file — Figma only shows a hamburger icon with no menu behind it. I built the sidebar myself so the site is actually usable on mobile, since the hamburger icon alone doesn't do anything.

**Repeated sections**: Corporate Trainings, Personalised Individual Training, and Capacity Development all use one `TrainingSection` component and one `trainingCards` array, instead of three separate but nearly identical components.

**Nav dropdowns**: About, What We Do, and Jobs have arrows that can be opened and closed, and they work with a keyboard (Enter, Space, and proper focus states). They don't show real dropdown menus with content, though, since this is a single page with no other pages to link to.

**Booking section text**: the mobile and desktop headlines are two different sentences from the design, not one sentence cut short with CSS.

**Favicon**: swapped the default Next.js icon for the Tobams Group logo, so the browser tab matches the brand.

## Accessibility

Every major section uses proper HTML landmarks. Every image has real, meaningful `alt` text — not just a filename. Decorative bullets and dividers are marked `aria-hidden`. Buttons and links are all native `<button>` and `<Link>` elements, so they work with a keyboard by default. The mobile menu has proper open/close labels and marks itself as expanded or collapsed.

## AI tool disclosure

I used Claude while building this — to help create a data array, and catch bugs (layout issues, invalid class names, carousel logic, etc.). I made the decisions on how things should look and work, checked everything against Figma myself, and reviewed the code before submitting.

## Known issues

- `globals.css` still has the default dark mode styles from `create-next-app`. These aren't part of the Figma design (which is light-only) and could change the page's colors if someone's system is in dark mode. This should be removed.
- The nav dropdown arrows open and close but don't show real menu content (explained above).
- `.primary-button` is one shared class in `globals.css`, used for buttons that repeat the same color and style, instead of only using Tailwind classes directly.
- A couple of image alt texts (hero image, LMS photo) could describe the photo better instead of reading like a filename.

## Checklist

- Public repo, live site working
- README covers setup, stack, Figma link, design decisions, known issues, AI disclosure
- App Router + Tailwind only
- Components split into their own files, no single big page file
- Semantic HTML, `next/image`, `next/font`