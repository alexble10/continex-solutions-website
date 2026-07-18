# CLAUDE.md — Website & Visual Design Standards

These are binding instructions for building **any** website, landing page, or web UI in this project. The goal is simple: **every site must look intentionally designed by a senior product designer — never "vibe-coded."** If a choice would make the result look like a generic AI/template output, do not make it.

Read this file fully before writing any markup. After building, run the **Self-Check** at the bottom. Do not consider the work done until it passes.

---

## 0. The one rule

**Design first, code second.** Before touching HTML, decide the visual direction: reference, typography, color system, spacing scale, and layout grid. Building without a defined system is how sites end up looking generated.

---

## 1. Never look "vibe-coded" — banned patterns

These are the tells of AI/template output. Avoid them unless the user's brand or a supplied reference explicitly calls for one:

- **Purple / indigo→violet gradients.** This is the #1 giveaway of an AI-generated site. No purple-to-blue hero gradients, no violet accent-by-default, no purple gradient text. Pick a real, brand-driven palette instead.
- **Gradient "blob" backgrounds**, mesh gradients, and rainbow gradient text.
- **Glassmorphism everywhere** — frosted translucent cards as the whole aesthetic.
- **Emoji used as UI icons** (🚀 ✨ 💡 in feature cards). Use real SVG icons or none.
- **Everything centered** in one narrow column of identical rounded cards with heavy uniform drop shadows.
- **Default framework look** — unstyled Tailwind blue-600 buttons, `bg-gray-100`, `rounded-2xl shadow-lg` on everything, Bootstrap defaults.
- **Neon glows** on dark backgrounds used as the main visual idea.
- **Vague filler copy** ("Empower your workflow", "Unlock your potential", lorem ipsum). Write specific, real copy.
- **One weight of one system font** for everything, with no hierarchy.

If you catch yourself reaching for any of the above, stop and choose a considered alternative.

---

## 2. Typography — always beautiful, always intentional

Type is 80% of whether a site looks designed.

- **Choose real typefaces on purpose.** Prefer characterful, well-crafted fonts over defaults. Good pairings: an elegant serif display + a clean grotesque/geometric sans (e.g. Cormorant Garamond / Fraunces / Playfair + Montserrat / Inter / Söhne-like sans). Load them properly (Google Fonts `<link>` or self-hosted).
- **Two families maximum** — one display/heading, one body. A third only for mono/technical if justified.
- **Establish a clear type scale** with real hierarchy. Display headlines should be large and confident (`clamp()` for fluid sizing). Body ~16–18px, line-height 1.5–1.65.
- **Refine the details:** tighten letter-spacing on large serif headings (negative tracking), add letter-spacing to small uppercase labels/eyebrows, never justify body text, keep line length ~60–75 characters.
- Never ship a site in a bare system-font stack unless explicitly asked.

---

## 3. Color — restrained and brand-led

- **Derive the palette from the brand or the reference**, never from defaults.
- Use **one dominant neutral** (near-black/warm off-white), **one accent** used sparingly (~10% of the surface), and a small, real neutral ramp for text/borders/surfaces.
- Enforce contrast: body text ≥ WCAG AA (4.5:1). Never light-gray text on white.
- Flat, confident color beats gradients. If a gradient is used, keep it subtle and tonal (same-hue), never rainbow or purple.
- **This project's brand:** Signal Coral `#FA6559` (accent), Onyx `#0C0D10`, white, neutral greys. Serif = Cormorant Garamond, Sans = Montserrat. Use these unless told otherwise.

---

## 4. Layout, spacing & composition

- **Work on a grid.** Align everything to it. Use deliberate asymmetry (e.g. split hero) — not everything stacked and centered.
- **Whitespace is a feature.** Be generous with section padding and breathing room; crowded = amateur.
- **Consistent spacing scale** (4/8px based). Reuse the same spacing tokens everywhere.
- Establish rhythm: consistent section padding, consistent card padding, consistent gaps.
- Add the details that signal craft: real hover states, visible keyboard focus states, smooth (subtle) transitions, considered empty/loading states.
- Motion: purposeful and understated (gentle scroll reveals, small hover lifts). No bouncing, no gratuitous animation.

---

## 5. Follow the user's references — closely

When the user supplies an example site, screenshot, or Dribbble/Behance link:

- **Study it and match its design language** — layout structure, spacing density, type feeling, color mood, level of polish. Treat it as the target bar.
- Reproduce the *approach and quality*, adapted to this brand's palette and content. **Do not copy their exact assets, logos, or copyrighted content** — take inspiration from structure and style, not literal material.
- If multiple references are given, synthesize a coherent direction rather than mixing them randomly.
- If no reference is given, default to this project's established aesthetic (see the Continex site as the house standard: cinematic dark hero, elegant serif headline, coral accent, product-forward).

---

## 6. Responsive — desktop AND mobile, always

- **Design mobile-first**, then enhance for larger screens. The site must look intentional at 375px, 768px, and 1440px.
- Use fluid type (`clamp()`), flexible grids, and sensible breakpoints (~560, ~940px).
- **No horizontal scroll** at any width. Tap targets ≥ 44px. Collapse multi-column grids to one column cleanly. Provide a working mobile nav (hamburger).
- Test that images, tables, and long words never overflow.

---

## 7. Build hygiene

- Prefer **one self-contained file** for simple sites (inline CSS/JS), unless the user wants a project structure.
- Semantic HTML, sensible `<title>`/meta description, favicon, `alt` text, `lang` attribute.
- No `localStorage`/`sessionStorage` only if targeting the claude.ai artifact sandbox; a normally hosted site may use them.
- Keep it dependency-light. Load web fonts and, at most, a couple of vetted libraries.

---

## 8. Self-Check — REQUIRED after every build

Never report a site as finished until you have **rendered it and looked at it** on both viewports and fixed what you find.

1. **Render and screenshot desktop (~1440px) and mobile (~390px).** Actually view the screenshots.
2. Check against this list and fix any failure:
   - [ ] No purple/AI-gradient look; palette is brand-led and restrained.
   - [ ] Typography is a real, beautiful, intentional pairing with clear hierarchy.
   - [ ] Strong grid, alignment, and generous whitespace — not a centered card-stack.
   - [ ] Accent color used sparingly; contrast passes AA.
   - [ ] Hover + focus states present; motion is subtle.
   - [ ] Copy is specific and real — no filler.
   - [ ] Mobile: no horizontal scroll, nav works, tap targets big enough, nothing overflows.
   - [ ] Matches the supplied reference's quality bar (if one was given).
   - [ ] Would a senior designer sign off on this? If not, iterate.
3. If anything looks generated, template-y, or off — **redesign that part and re-check.** One honest iteration beats shipping something that looks auto-generated.

---

**Summary:** intentional type, brand-led restrained color (no purple gradients), real grid and whitespace, follow references, mobile + desktop, and always verify visually before finishing.
