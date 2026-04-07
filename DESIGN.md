# Design System — Aizaku Portfolio

## Product Context
- **What this is:** Portfolio website for Isaac, a recent CS grad from Canada looking for tech jobs
- **Who it's for:** Hiring managers and technical recruiters at startups and tech companies
- **Space/industry:** Tech recruiting (not AI hype — signals taste and engineering rigor)
- **Project type:** Marketing/portfolio site with project showcase

## Aesthetic Direction
- **Direction:** Brutally Minimal — the design earns trust through restraint. Typography and whitespace do all the heavy lifting. No decoration, no gradients, no patterns.
- **Decoration level:** Minimal — decoration is absent except for the dark inset dashboard panels
- **Mood:** Classy, hypermodern, professional. Stripe/Linear/Cohere energy. Not a typical developer portfolio.
- **Reference sites:** Stripe, Linear, Cohere

## Typography
- **Display/Hero:** Inter — 56-72px, weight 600, tracking -0.03em, tight leading (1.05)
- **Section headings:** Inter — 32-40px, weight 500, tracking -0.02em
- **Body:** Inter — 16-18px, weight 400, line-height 1.6-1.75
- **UI/Labels:** Inter — same as body, with letter-spacing 0.05-0.1em for caps/labels
- **Code/Data:** JetBrains Mono — 14px, weight 400 (for dashboard content, code snippets)
- **Loading:** Google Fonts (Inter + JetBrains Mono via Google Fonts CDN)
- **Scale:** 12 / 13 / 14 / 16 / 17 / 18 / 24 / 28 / 36 / 48 / 56 / 72px

## Color
- **Approach:** Restrained — rust is the only accent color. Everything else is neutral.
- **Background:** #FAFAF9 (warm off-white)
- **Surface (cards):** #FFFFFF
- **Text primary:** #18181B (zinc-900)
- **Text muted:** #71717A (zinc-500)
- **Border:** #E4E4E7 (zinc-200)
- **Accent:** #C45D35 (rust — warm, grounded, distinctive. Used for: links, CTAs, hover states, section eyebrows. NOT used for decoration.)
- **Dark inset:** #18181B (zinc-900 — for dashboard window panels only)
- **Dark mode:** Reduce saturation 10-20% on backgrounds and surfaces. Keep accent unchanged.

## Spacing
- **Base unit:** 8px
- **Density:** Generous — more space than typical developer portfolios
- **Section separation:** 120-160px vertical space between sections
- **Inner padding (cards/sections):** 24-48px
- **Scale:** 2xs(4) xs(8) sm(16) md(24) lg(32) xl(48) 2xl(64) 3xl(96) 4xl(128)

## Layout
- **Approach:** Grid-disciplined, single-column dominant
- **Max content width:** 1100px, centered
- **Grid:** Single column for primary content. Two-column grid only for Other Projects cards (desktop).
- **Mobile:** Single-column stack, type scale reduced ~15%, full-width dashboard panels
- **Border radius:** Near-zero — 4px max on cards, 0 on buttons/inputs (Stripe-style)
- **Dividers:** 1px horizontal lines in #E4E4E7

## Motion
- **Approach:** Intentional — motion aids comprehension and signals quality, never decorative
- **Scroll-triggered fade-ins:** Sections fade in when top edge enters viewport (Intersection Observer, threshold 0.15). Duration: 250ms, ease-out.
- **Micro-interactions:** Hover states use subtle opacity shifts and border color transitions (150ms)
- **Accordion:** Dashboard panels expand/collapse on click. Chevron rotates 180°. Duration: 200ms.
- **Nav:** Backdrop blur increases on scroll (border appears after 40px scroll)
- **Easing:** ease-out for enters, ease-in for exits

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-06 | Initial design system created | Created by /design-consultation. Brutally minimal aesthetic with rust accent on warm white. |
| 2026-04-06 | Rust (#C45D35) as sole accent | Warmer than typical blue/purple AI palette. Reads as craft/materiality, not hype. Differentiates from other developer portfolios. |
| 2026-04-06 | Dark inset panels for dashboards | "Window into infrastructure" effect — dark #18181B inside warm white page. Accordion-style so panels don't dominate. |
| 2026-04-06 | JetBrains Mono for code/data | Technical but legible. Paired with Inter for clean hierarchy. |
