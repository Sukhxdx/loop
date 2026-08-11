# Loop — Discovery Grid

Local discovery prototype for **Pune** — a coded Next.js build that doubles as final design screens and an interactive prototype.

**Live:** [https://loop-e6m3.onrender.com](https://loop-e6m3.onrender.com)  
**Author:** [Sukhada Dhingra](mailto:dhingrasukhada@gmail.com) · +91 83172 22120

---

## Concept

Loop surfaces five content types in one exploratory grid:

| Type | What it is |
|------|------------|
| **Places** | Cafes, parks, streets, malls, viewpoints |
| **Bites** | Food — misal, thali, coffee, ice cream |
| **People** | Locals to follow |
| **Happenings** | Events and plans |
| **Circles** | Groups / crews |

Cards are grounded in real Pune neighborhoods and venues (Koregaon Park, Baner, FC Road, Bedekar, Shabree, Cafe Durga, Blue Tokai, and more), with addresses, hours, and menu highlights in detail views.

---

## Features

- **Weighted bento grid** — spans driven by a `weight` field (1×1 → 2×2), dense CSS grid
- **Unified mono data tags** — distance, price, mutuals, time, or member count on every card
- **Cursor spotlight** — soft accent light finds nearby cards (pointer devices only)
- **Category filters** — All / Places / Bites / People / Happenings / Circles with layout transitions
- **Detail panel** — shared-element expand; place/bite details include real address, hours, menu lists
- **Empty + loading states** — skeleton bento shimmer; plain empty copy (no accent in skeletons)
- **Accessibility** — focus rings, Escape/backdrop close, `prefers-reduced-motion` support

---

## Stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- Framer Motion · Lucide React
- Deployed on [Render](https://render.com) (`render.yaml`)

---

## Quick start

```bash
git clone https://github.com/Sukhxdx/loop.git
cd loop
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build
```

---

## Project structure

```
app/                 # App Router layout + discovery page
components/          # Card shell, type cards, grid, spotlight, detail, toast
lib/content.ts       # Content model + Pune mock data
lib/imageLoader.js   # Custom next/image loader
public/images/       # Local venue / dish photos (Wikimedia Commons)
Sukhada_Dhingra_Loop_Submission.pdf   # Job submission write-up
```

---

## Design tokens

| Token | Value | Use |
|-------|-------|-----|
| `bg-base` | `#0B0B0C` | Page background |
| `bg-surface` | `#16171A` | Cards |
| `accent` | `#BAFF26` | Tags, active chips, CTAs |
| Display | Instrument Serif | Headlines |
| Body | Inter | UI |
| Mono | JetBrains Mono | Data tags |

---

## Design decisions (short)

1. **Bento over a list** — hierarchy from size, not extra chrome.
2. **One mono tag** — unifies five unlike card types.
3. **Person / Circle break silhouette** — avatar vs image-forward; still same family via tag, radius, hover.
4. **One signature interaction** — cursor spotlight; 3D tilt was removed so it doesn’t compete.
5. **Coded prototype over Figma** — proves filter reflow, spotlight, and detail expand for real.

Full write-up: [`Sukhada_Dhingra_Loop_Submission.pdf`](./Sukhada_Dhingra_Loop_Submission.pdf)

---

## How to review

1. Open the [live site](https://loop-e6m3.onrender.com) (Render free tier may cold-start briefly).
2. Use filter chips and watch the grid reflow.
3. Move the cursor across the grid for the spotlight.
4. Open a Place or Bite for address, hours, and menu highlights.
5. Try a primary CTA (directions / menu / follow / join).

---

## License

Prototype for a design challenge / job application. Venue facts are for demonstration; photos in `public/images/` are from Wikimedia Commons where credited by source file.
