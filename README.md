# GrozavBank

A premium fintech landing page and product showcase for **GrozavBank**, a fictional modern digital banking platform. Built as a frontend portfolio piece — no build step, no dependencies, just HTML, CSS, and a little JavaScript.

## Preview

The landing page includes:

1. **Navbar** — fixed, transparent over hero, glass on scroll.
2. **Hero** — dark cinematic scene with floating bank cards and headline stats.
3. **Mobile app showcase** — three realistic phone mockups (account overview, card customization, spending insights).
4. **Desktop dashboard** — clean Wise-inspired app window with sidebar, currency accounts, transaction list, and send-money widget.
5. **Features** — multi-currency accounts, instant transfers, smart analytics, virtual cards.
6. **Security** — encryption, 2FA, real-time fraud alerts, with a live-looking account panel.
7. **Pricing** — Free / Plus / Premium, with Plus highlighted.
8. **Final CTA** — focused conversion block.
9. **Footer** — brand, product/company/security columns.

## Project structure

```
GrozavBank/
├── index.html
├── styles/
│   ├── base.css          # tokens, reset, typography, utilities
│   ├── components.css    # buttons, bank cards, phones, dashboard parts
│   ├── sections.css      # navbar, hero, mobile/desktop showcase, etc.
│   └── responsive.css    # tablet + mobile breakpoints
├── scripts/
│   └── main.js           # nav scroll state, mobile menu, reveal-on-scroll
├── examples/             # reference images (visual inspiration only)
├── CLAUDE.md             # project brief
└── README.md
```

## Run locally

No build required. Any static file server works. Pick whichever you have installed:

```bash
# Option 1 — Python 3
python -m http.server 5173

# Option 2 — Node (if npx is available)
npx serve .

# Option 3 — VS Code
# Right-click index.html → "Open with Live Server"
```

Then open [http://localhost:5173](http://localhost:5173).

Opening `index.html` directly in a browser also works — no server is strictly required since there are no ES module imports or fetch calls.

## Design direction

- **Dark premium** sections (hero, security, CTA): deep navy + violet glow, subtle grid, soft stars.
- **Clean product** sections (dashboard, pricing): white backgrounds, soft borders, generous whitespace.
- Violet is used as the brand accent; green only for financial positive states.
- Typography is Inter across the board, with tight letter-spacing on display sizes.

The three reference images in `examples/` were used only as visual direction (mood, structure, level of polish) — no layouts, logos, or exact UI elements were copied.

## Responsive

Breakpoints at 1100 / 960 / 760 / 540 px. The dashboard collapses the sidebar on tablet, the phone row stacks, and the hero cards scale down gracefully. No horizontal overflow at any width.

## Accessibility

- Semantic landmarks (`header`, `main`, `section`, `footer`, `nav`).
- Visible focus states.
- `prefers-reduced-motion` disables floating and reveal animations.
- Sufficient contrast on light and dark surfaces.

## Notes

GrozavBank is a **portfolio concept**. It is not a licensed financial institution and no real banking services are offered.
