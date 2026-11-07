# FixLeads Studio — Design System & Visual Style Record

This file is the source-of-truth record for the visual design decisions present in the repository. **Documentation only:** do not change the live website just to match this document. Preserve the current design unless Sourav explicitly requests a redesign.

## Project scope
- Brand: FixLeads Studio
- Website: https://fixleadsstudio.com
- Audience: UAE/Dubai home-service businesses
- Positioning: mobile-first websites and practical local SEO designed to make calls, quote requests and WhatsApp enquiries easier.
- Primary design goal: polished, calm, credible, conversion-focused, mobile-friendly; avoid clutter, exaggerated claims, and unnecessary decoration.

## Fonts / typography
Loaded in `app/layout.js` using Next.js Google font optimization:
- **Headings / display / logo:** Bricolage Grotesque, CSS variable `--f-head`.
- **Body / paragraphs / navigation:** Manrope, CSS variable `--f-body`.
- System fallbacks: `system-ui, sans-serif`.
- Body baseline: `17px / 1.6`.
- Headings use tight leading and slightly negative tracking; h1 is responsive via `clamp(2.1rem, 5.5vw, 3.8rem)` in the base system, with the homepage premium hero overriding it to `clamp(2.65rem, 5.3vw, 4.65rem)`, line-height 1.02 and letter spacing -0.065em.
- h2 base: `clamp(1.6rem, 3.4vw, 2.3rem)`; premium section headings may override to `clamp(2rem, 3.8vw, 3rem)`.
- h3 base: 1.2rem.
- Body copy is readable and restrained; secondary copy uses slate blue-grey.

## Color palette — base / original site tokens
These are the global CSS custom properties in `app/globals.css`; keep the token names stable:
- Ink / primary dark: `--ink: #10263F`
- Sea / teal brand: `--sea: #0F6E7A`
- Salt / pale cool background: `--salt: #F1F5F6`
- Amber / focus accent: `--amber: #FFB400`
- Slate / secondary text: `--slate: #4B5A68`
- Line / borders: `--line: #D5DEE2`
- Main canvas: `#FFFFFF`
- WhatsApp action green: `#25D366`
- WhatsApp outgoing chat bubble: `#C9EBC0`
- WhatsApp incoming chat bubble: `#FFFFFF`
- Chat preview background: `#DCEBEA`

## Additional colors used by the premium homepage and global shell
These are intentional supporting shades used in component rules, not a replacement for the base tokens:
- Premium hero backgrounds: `#F4F8F8`, `#F7F9FB`, `#EDF5F4`; subtle teal radial glow `rgba(30,130,137,.14)`.
- Premium copy: `#526576`, `#536675`, `#61727E`, `#62727E`, `#687985`, `#6C7E89`, `#71818B`.
- Pale borders / dividers: `#E0E8E9`, `#E2E9EB`, `#E5EBED`, `#DCE6E8`, `#DCE5E7`, `#B8C9CD`, `#A8C7C8`.
- Pale teal UI accents: `#E7F5F3`, `#E6F5F2`, `#B5E8DF`, `#75D0C5`, `#A8E2DF`, `#85AAA9`, `#9ABFC0`, `#72949A`, `#176B6D`.
- Deep footer / mock-up shades: `#0C2035`, `#31465A`, `#466273`, `#B9C9D4`, `#C9D6DF`, `#D3DEE6`, `#AEBFCB`.
- Warm secondary accents: `#FFF4D8`, `#987016`, and amber stripe shade `#F2A900`.
- Decorative effects use translucent ink/teal overlays and soft shadows rather than harsh outlines.

## Logo and brand presentation
- Header brand uses a rounded-square teal mark with a white **F**; mark is CSS-built (not a separate image) in `app/layout.js`.
- Brand name: FixLeads Studio.
- Tagline shown with the logo: “Websites that win enquiries”.
- Brand mark: teal background `var(--sea)`, white letter, Bricolage Grotesque, bold; 42×42 px desktop, 38×38 px small screens; 12 px radius (header CSS).
- Footer repeats the same brand mark and tagline with light text on a dark navy background.

## Layout, sizing and spacing
- Main content container: `.wrap { max-width: 1120px; margin: 0 auto; padding: 0 20px; }`.
- Narrow reading width utility: `.narrow { max-width: 760px; }`.
- Header is sticky with a translucent white background and subtle blur/border.
- Main header inner minimum height: 82 px; base row minimum height: 64 px.
- Premium hero: two-column grid, balanced columns, 52 px gap, vertical padding about 76 px, minimum height 590 px.
- Content sections typically use generous vertical padding (72–88 px on desktop); smaller screens reduce section padding to around 48 px.
- Cards use rounded corners (typically 12–16 px), light cool-grey borders, white / near-white backgrounds and restrained shadows.
- Industry cards use a 44 px index column with generous text spacing.
- Footer uses a four-column desktop layout, then two columns, then one column on mobile.
- Content grids use CSS Grid and collapse to one column on narrow screens.

## Buttons, links and calls to action
- Base button: dark ink background, white bold text, padding 14×22 px, 10 px radius.
- Base hover: teal background. Small button padding: 9×16 px.
- Ghost button: transparent/white background, ink text and 2 px ink border.
- Premium hero primary button: teal background/border, white text, soft teal shadow; hover darkens to `#0B5963`.
- Premium hero secondary button: translucent white background and pale blue-grey border.
- Header CTA is compact, bold, rounded, and prominent without being oversized.
- Text links are teal, bold, and have subtle directional motion on hover.
- Focus indicator: 3 px amber outline with 3 px offset; WhatsApp focus outline uses 4 px offset.
- External WhatsApp links open a new tab and use safe `rel="noopener noreferrer"` attributes.
- Floating WhatsApp button is fixed at bottom-right, circular, green, with a white SVG icon and soft shadow; 60×60 px desktop and 56×56 px on small screens.

## Homepage visual components
- Hero: cool pale background with soft teal glow, left-aligned eyebrow + large headline + supporting copy + paired CTAs + trustline; right side is a CSS-built sample website window and floating proof/notification cards.
- The sample site visual is decorative and CSS-rendered; it is not a screenshot of a real customer site.
- Intro section: two-column editorial layout.
- Service pillars: three cards, numbered 01–03, subtle pale backgrounds, teal details.
- Industry cards: two-column grid on desktop; white cards, small index, clear service description and teal link.
- How-it-works/process section: explanatory left column and numbered list with thin separators on the right.
- Pricing: three plan cards; highlighted plan uses teal border and soft teal shadow.
- FAQ: simple readable question/answer layout; do not overcrowd with decorative elements.
- Final CTA and WhatsApp route should be clear and consistent with the rest of the site.

## Header, navigation and footer
- Thin top announcement bar: dark navy, light text and a WhatsApp link.
- Sticky main header: white/translucent, subtle bottom border, brand on left and navigation + CTA.
- Main navigation: Industries, How it works, Pricing, Blog, FAQ, Free website review.
- Footer: deep navy, pale text, four content groups (brand/contact, Explore, Industries, Contact), followed by a thin divider and copyright/service summary.
- Maintain usable keyboard focus and descriptive accessible labels.

## Blog / editorial style
- Blog cards: white background, 16 px radius, subtle border/shadow, 28 px padding (22 px on mobile).
- Article headings use the shared heading font; paragraphs and list items have a comfortable line length (around 75 characters/ch units as set in CSS).
- Blog hero image is full content width, auto height, max-height 480 px, object-fit cover, 18 px radius and light border.
- Cost/price cards: three columns on desktop, one column on mobile; 20 px padding.
- Editorial CTA uses pale salt background, border and rounded corners.
- Keep long tables out of cramped mobile layouts; prefer scannable responsive cards when that improves readability.

## Responsive behaviour
Current breakpoints represented in CSS:
- `1000px`: header becomes stacked; footer becomes two columns.
- `800px`: split layouts and major grids collapse; section padding reduces.
- `600px`: compact top bar, navigation, footer becomes one column, floating WhatsApp shrinks.
- Respect `prefers-reduced-motion: reduce`; disable smooth scrolling / transitions where configured.
- Check all pages at desktop, tablet and mobile widths after any future design change.

## Interaction and accessibility details
- Smooth anchor scrolling with scroll offset for sticky header.
- Hover states are subtle (teal border/color, small elevation or slight movement).
- Keyboard focus must remain clearly visible.
- Avoid using color alone to communicate meaning.
- Keep links descriptive, maintain sufficient contrast, preserve responsive wrapping and reduced-motion support.

## Source files to consult before any future UI edits
- `uae-leads-site/app/globals.css` — design tokens, typography rules, layout, colors, components and breakpoints.
- `uae-leads-site/app/layout.js` — Google fonts, global header, navigation, floating WhatsApp button, footer.
- `uae-leads-site/app/page.js` — homepage component structure and its visual sections.
- `uae-leads-site/lib/site.js` — brand name, website URL, contact channels, packages and FAQs.
- `uae-leads-site/lib/niches.js` — industry list and niche content.

## Change-control rule
1. Read this file and inspect the current source files before editing styles.
2. Do not casually change font families, colors, spacing, logo treatment, button shape, header/footer, or homepage layout.
3. Prefer reusing existing CSS variables and component classes over introducing near-duplicate colors.
4. If the user says “keep it the same as before”, make no redesign or visual changes; ask which historical version only if an actual rollback is requested and the target version is unclear.
5. Update this document when the user explicitly approves a new design-system change.
6. A saved design specification documents the current implementation; it does not itself restore a previous deployment or guarantee that every historical style is still active.
