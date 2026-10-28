# Project State — KRITI 2027 Sponsorship Page

## Project Identity
- **Name:** KRITI 2027 Sponsorship & Partnerships Prospectus  
- **Purpose:** Private sponsorship prospectus page for KRITI 2027 (Kakatiya Research Initiative for Transformative Innovations), Kakatiya Medical College, Warangal  
- **Phase:** Production-ready — Phase 10 Complete  
- **Repository:** https://github.com/deekshithvodela/sponsorship (GitHub Pages deployment)
- **Stack:** React 18 + TypeScript + Vite 6 + Tailwind CSS v4
- **OG Base URL:** `https://deekshithvodela.github.io/sponsorship/`

## Current State (2026-10-28)
- Build: ✅ PASS (`tsc -b && vite build` — 0 errors)
- Desktop: Performance 100, Accessibility 100, Best Practices 100, CLS 0
- Mobile: Performance 93, Accessibility 100, Best Practices 100, CLS 0
- Responsive: All 6 viewports (320–1440px) — 0 overflow, 0 forms, 0 console errors
- Functional test suite: ✅ All 21 assertions pass (11/11 confirmed events, Gold tier simulator)
- Privacy audit: 7/7 vectors clean

## Core Decisions

| Decision | Reason | Status |
|---|---|---|
| No `<form>` elements | WhatsApp-only contact policy | Active |
| `noindex, nofollow` + robots.txt Disallow:/ | Private page, avoid indexing conflict | Active |
| All prices on request | Prizepool not finalised; pricing confidential | Active |
| No prizepool details | Not finalised | Active |
| OG images as JPEG | Better compression (49KB, 28KB) under WhatsApp limit | Active |
| Google Fonts synchronous load | Eliminates FOUT/CLS on first paint | Active |
| Preload Barlow Condensed woff2 | Reduces LCP paint time | Active |
| `display=swap` on Google Fonts | Font visible ASAP after load | Active |

## Architecture
- `src/config/contact.ts` — single source of truth for WhatsApp config  
- `src/data/` — pricing, capabilities, faq data (separated from render)  
- `src/components/` — Header, Hero, PricingTiers, CostEstimator, Capabilities, ComparisonMatrix, FAQ, Footer  
- `public/` — static assets: favicons, OG images (JPEG), PWA manifest, robots.txt  
- `index.html` — metadata, fonts, JSON-LD  
- `scripts/` — Lighthouse audit + Playwright responsive test scripts

## Constraints
- **Zero git commands** — strictly prohibited by user
- **Zero forms** — all contact via WhatsApp deep links
- **Zero pricing figures** — "Pricing on Request" only
- **Zero prizepool mentions** — not finalised
- **noindex robots** — private page, not for search ranking
- OG images must not contain WhatsApp / contact info

## Completed Milestones
1. Phase 1–6: Full page redesign (Claude Code pricing layout), KRITI sponsorship content, events (10), tiers, simulator
2. Phase 7: robots.txt, OG images, JSON-LD, PWA manifest, skip links, ARIA
3. Phase 8: Lighthouse audit → CLS 0, Accessibility 100/100 both viewports; Line-by-line code review; Privacy audit (7/7 clean); OG images regenerated
4. Phase 9: WhatsApp prefill text updated ("sponsorship opportunities for KRITI"), Footer button displays "WhatsApp" without raw phone number, universal scrollbar hiding, default single event for title sponsorship, scrubbed 10-minute keynote duration mentions across all sections.
5. Phase 10: Tier names renamed to Platinum, Gold, Silver; stage presence adjusted to 20-30 min (Platinum) and 10-15 min (Gold) with LED interval video promo integrated; conference duration updated to 3 days; Title Partnership scope clarified as single event title presenting rights (out of 11 events); Hands-on Medical Workshops added as 11th confirmed event across all components, simulator, matrix, and test suite.

## Important Files
- [`index.html`](index.html) — meta, fonts, OG, JSON-LD
- [`src/config/contact.ts`](src/config/contact.ts) — WhatsApp config  
- [`src/data/pricing.ts`](src/data/pricing.ts) — tier & matrix data  
- [`src/components/CostEstimator.tsx`](src/components/CostEstimator.tsx) — Interactive simulator
- [`src/index.css`](src/index.css) — Design tokens & global scrollbar hiding
- [`public/og-image.jpg`](public/og-image.jpg) — 1200×630 OG image  
- [`public/og-image-square.jpg`](public/og-image-square.jpg) — 600×600 OG image  
- [`scripts/run-pagespeed-audit.cjs`](scripts/run-pagespeed-audit.cjs) — Lighthouse  
- [`scripts/test-viewports.cjs`](scripts/test-viewports.cjs) — Playwright tests  
- [`report.md`](report.md) — full audit trail (gitignored)  
- [`implementation_plan.md`](implementation_plan.md) — full plan (gitignored)

## Verification Status
- Build: ✅ PASS
- TypeScript: ✅ PASS (0 errors)
- Lighthouse Desktop: ✅ 100/100/100
- Lighthouse Mobile: ✅ 93/100/100
- CLS: ✅ 0 (both)
- Accessibility: ✅ 100 (both)
- Responsive tests: ✅ All 6 viewports pass
- Functional tests: ✅ 21/21 pass
- Privacy audit: ✅ 7/7 vectors clean
- Keynote duration scrub: ✅ Verified (0 matches)
- Scrollbar hiding: ✅ Verified (`html` & `.overflow-x-auto` computed `scrollbarWidth: none`)

## Next Direction
Production-ready. Ready for review or remote deployment per user authorization.

