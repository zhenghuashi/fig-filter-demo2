# Fig & Filter — neighbourhood café website

A bespoke, responsive, static five-page website for **Fig & Filter**. Built with plain HTML, CSS, and a small JavaScript mobile-navigation toggle. No build pipeline or environment variables are required.

## Pages
- `index.html` — Home
- `menu.html` — Menu and prices
- `catering.html` — Catering packages and direct email enquiry
- `about.html` — Café story and founders
- `visit.html` — Address, hours, directions and contact

## Deploy on Vercel
1. Import this GitHub repository as a new project.
2. Set **Framework Preset** to **Other**, **Root Directory** to `./`.
3. Leave Build Command, Install Command and Output Directory empty.
4. Click **Deploy**. The homepage is `index.html`.

## Content and design decisions
The eight images are the client-supplied assets from the class pack; the alt text follows the `images.md` manifest. The palette uses the four client-supplied colors. HTML content is grounded in the supplied `content/*.md` pages, which are included separately in the original class pack.

**Source inconsistencies flagged for the client:** the original Home copy says Tuesday–Sunday 7:30am–5:00pm, but the Visit source specifies Tuesday–Friday 7:30am–5:00pm and weekends 8:00am–5:00pm. This rebuild uses the more detailed **Visit** schedule site-wide, to prevent contradicting public hours. The Visit source also mentions reserving big tables, while the commission letter explicitly says **no table bookings**; that sentence is intentionally omitted rather than advertising a booking process.

All addresses and contact details are *fictional class material* (including `.example` email addresses); replace with verified real information before any genuine business launch.

## Accessibility / performance
Semantic headings, a skip link, keyboard focus styles, `aria-expanded` on mobile navigation, 44px+ interactive targets for primary controls, local optimized images, and no front-end framework.
