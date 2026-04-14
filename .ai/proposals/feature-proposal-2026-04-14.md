# Feature Proposal — fb-personal-website
**Date:** 2026-04-14
**Author:** Product Owner (AI audit)
**Status:** Awaiting Fabio's approval

---

## Executive Summary

A full audit of `index.html`, all CSS files, and all JS modules was completed. The site is in good structural shape. Three areas need attention before the site can be considered complete: (1) a handful of real accessibility gaps that were previously uncatalogued, (2) a small set of high-value UX improvements, and (3) content that is either missing or deliberately hidden and should be reconsidered.

---

## 1. Accessibility Fixes (P0 — WCAG 2.1 AA)

These are not optional. Each one has a direct impact on screen reader users or keyboard-only users.

---

### A1. `aria-live` missing on the typewriter element

**What is broken:** `#typewriter-text` in the hero section is updated continuously by `typewriter.js`. Screen readers cannot detect DOM text changes unless the region is marked as a live region. The current cycling text ("Engineering Manager", "Open Source Enthusiast", etc.) is completely invisible to assistive technology.

**Why it matters:** This is the primary subtitle of the page — the first piece of content a screen reader encounters after the heading. It is silently invisible.

**Exact fix:** In `index.html`, add `aria-live="polite"` and `aria-atomic="true"` to the `<span id="typewriter-text">` element.

**Files:** `index.html`

---

### A2. `aria-live` missing on animated stat counters

**What is broken:** The four stat cards in `#about` (Engineers Led, Teams Built, Years Exp., Projects) animate from 0 to their target values via `animations.js`. The `textContent` mutations are not announced to screen readers.

**Why it matters:** The counters are presentational but they carry numeric claims about Fabio's career. A screen reader user landing on the About section will read "0" for every stat card — not the intended values — because the live DOM update is never announced.

**Exact fix:** Add `aria-live="polite"` to each `.stat-card__number` element in `index.html`. Alternatively, wrap `.about__stats` in a single `aria-live="polite"` region.

**Files:** `index.html`

---

### A3. Mobile overlay lacks focus trap

**What is broken:** When the mobile navigation overlay opens, focus is not moved into the overlay, and Tab can still reach content behind it. The overlay has `role="dialog"` and `aria-modal="true"`, which implies a focus trap — but `nav.js` does not implement one. There is no `focusTrap()` logic and no `focus()` call on overlay open.

**Why it matters:** A keyboard-only user who opens the mobile menu can Tab past it and interact with hidden background content. The `aria-modal` attribute signals to screen readers that background content should be inert, but browsers do not all honour this automatically without a programmatic focus trap.

**Exact fix:**
- In `nav.js`, on `openMenu()`: move focus to the first focusable element inside `#nav-overlay`.
- Intercept Tab and Shift+Tab within the overlay to cycle focus only among overlay focusable elements.
- On `closeMenu()`: return focus to `#nav-hamburger`.

**Files:** `js/nav.js`

---

### A4. Emoji used as images have no accessible name

**What is broken:** Two project cards use emoji characters (`📘`, `☁️`) as their visual cover via `.project-card__cover--gradient` divs. These divs are `aria-hidden="true"`, which is correct for purely decorative content — but the emoji are the only visual distinguisher for those two cards when no image loads. The issue is consistency: the `aria-hidden` is appropriate, but there is no fallback text description added to the card title or card body for the content the emoji is meant to represent.

**Why it matters:** WCAG 1.1.1 (Non-text Content) requires that images conveying meaning have a text alternative. These emoji convey category (a book, a cloud) but the `aria-hidden="true"` removes them from the accessibility tree with no compensating alternative. The card titles ("BULL Tutorial", "AWS S3 Downloader") do partially compensate, but the visual pairing is broken for screen reader users.

**Exact fix:** Remove `aria-hidden="true"` from the `.project-card__cover--gradient` divs and replace with `role="img"` and a descriptive `aria-label` (e.g., `role="img" aria-label="Book cover illustration"`). Alternatively, keep `aria-hidden` and verify the card title alone is sufficiently descriptive — which it arguably is for these two cards. A decision is needed.

**Files:** `index.html`

---

### A5. `<meta name="theme-color">` missing for dark mode

**What is broken:** `site.webmanifest` specifies `"theme_color": "#ffffff"` (light). There is no `<meta name="theme-color">` in `index.html`, and there is no dark-mode variant of the theme color.

**Why it matters:** Mobile browsers (Chrome on Android, Safari on iOS) use the theme color to paint the browser chrome. Without it, or with only the light value, dark-mode users see a white/grey browser chrome against the site's near-black background (`#09090B`). This is a visible jarring contrast and a missed branding opportunity.

**Exact fix:**
- Add two `<meta name="theme-color">` tags in `index.html` `<head>` using the `media` attribute:
  ```html
  <meta name="theme-color" content="#09090B" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)">
  ```
- Update `site.webmanifest` `theme_color` to `"#09090B"` to match the dark default.

**Files:** `index.html`, `site.webmanifest`

---

### A6. `prefers-reduced-motion` does not stop the `reveal` opacity-0 initial state

**What is broken:** `reset.css` already includes a `prefers-reduced-motion` block that collapses all animation/transition durations to `0.01ms`. However, the `.reveal` class sets `opacity: 0` and `transform: translateY(32px)` unconditionally. When `IntersectionObserver` fires and adds `.is-visible`, the transition is collapsed to near-zero — but if JS is slow or an element is never intersected, the element remains at `opacity: 0` permanently for reduced-motion users.

**Why it matters:** Any `.reveal` element that does not intersect the viewport (e.g., elements below the fold when JS is slow, or in a section the user never scrolls to) will be permanently invisible in reduced-motion mode.

**Exact fix:** Add to `animations.css`:
```css
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

**Files:** `css/animations.css`

---

### Summary Table

| ID | Issue | Severity | Files |
|----|-------|----------|-------|
| A1 | No `aria-live` on typewriter text | High | `index.html` |
| A2 | No `aria-live` on stat counters | Medium | `index.html` |
| A3 | No focus trap on mobile nav overlay | High | `js/nav.js` |
| A4 | Emoji covers have no accessible name decision | Medium | `index.html` |
| A5 | Missing `theme-color` meta for dark mode | Low | `index.html`, `site.webmanifest` |
| A6 | `.reveal` invisible under reduced motion | High | `css/animations.css` |

---

## 2. UX & Feature Improvements (P1 — High value, low complexity)

---

### U1. Activate the email copy-to-clipboard in the Contact section

**What it is:** `contact.js` already has a fully implemented `initCopyEmail()` function — it reads `data-email` from a button with `id="copy-email"`, copies it to the clipboard, shows "Copied!", and falls back to `mailto:`. However, no element in `index.html` uses `id="copy-email"` or `data-email`. The function is dead code.

**Why it adds value:** The contact section currently has three rows linking to LinkedIn, GitHub, and Instagram — but no direct email option. Fabio's email address is the most direct professional contact channel. Adding a copyable email row takes 30 minutes and delivers a meaningfully more useful contact section.

**Scope:** Small. The JS is already written. Only `index.html` needs a new `<div>` row and `contact.css` may need minor style tweaks for a fourth row.

**Files affected:** `index.html`, `contact.css` (minor)

---

### U2. Activate the Formspree contact form

**What it is:** `contact.js` has a complete `initForm()` function including honeypot spam protection, async submission, error handling, and success feedback. However, `index.html` contains no `<form id="contact-form">` element. The form action placeholder (`YOUR_FORM_ID`) referenced in `CLAUDE.md` and `docs/MANAGING.md` was never wired up.

**Why it adds value:** A contact form lowers the friction for inbound professional contact significantly — visitors do not need to leave the site to send a message. This is especially valuable for recruiters or potential collaborators who prefer a form over navigating to LinkedIn.

**Scope:** Medium. Requires signing up for Formspree, placing the `<form>` HTML in `index.html` with correct field names, and writing `contact-form.css` styles (or extending `contact.css`). The JS submission logic is already complete.

**Files affected:** `index.html`, `contact.css` (or new `contact-form.css`), `css/main.css` (if new file added)

---

### U3. Fix the BULL GitHub star count (currently hardcoded)

**What it is:** The BULL project card in `#projects` shows a hardcoded star count of `197` in the HTML. The actual repository star count changes over time.

**Why it adds value:** An outdated or obviously static number undermines credibility. A stale "197 stars" that has since grown (or that visitors can verify is wrong) looks like neglect. There are two reasonable approaches: fetch the live count from the GitHub API on page load, or simply remove the star count display.

**Scope:** Small. A single `fetch` call in `main.js` or a new `github.js` module to update the element, with graceful degradation if the API is unavailable. Alternatively, remove the element entirely (one line of HTML).

**Files affected:** `index.html`, `js/main.js` (or new `js/github.js`)

---

### U4. Reveal the hidden eDreams ODIGEO experience entry

**What it is:** The first `timeline-item` in `#experience` is set to `display:none`. It contains a Lead Engineer role at eDreams ODIGEO dated "2026 – Present". As of today (2026-04-14) this role presumably reflects Fabio's current or most recent position.

**Why it adds value:** The experience section currently shows the Expedia Engineering Manager role as "2020 – Present", which is factually incorrect if Fabio has moved on. A visitor reading this section would be misled. The hidden entry should either be published or removed — leaving it hidden while the Expedia entry shows an open "Present" date is a content accuracy problem.

**Scope:** Trivial. Remove `style="display:none"` from the timeline item and update the Expedia end date.

**Files affected:** `index.html`

---

### U5. Add `loading="lazy"` to the BULL project cover image

**What it is:** The BULL project card loads its cover image from a raw GitHub URL (`https://raw.githubusercontent.com/...`). It currently uses `loading="eager"` alongside the One Key Card image. This is a remote image from an external host — unlike the One Key Card which is a local asset. Eagerly loading a remote image on the critical path adds an unnecessary render-blocking network request.

**Why it adds value:** The One Key Card image is local and above-the-fold on desktop — `loading="eager"` is correct for it. The BULL image is below the fold on most viewports. Switching it to `loading="lazy"` reduces initial page load time with no visible impact to the user experience.

**Scope:** Trivial. One attribute change in `index.html`.

**Files affected:** `index.html`

---

## 3. Content Enhancements (P2 — Nice to have)

---

### C1. Add more writing entries

The Writing section currently has exactly two articles (DZone, InfoQ), both about BULL. The section header reads "Articles & Writing" but reads thin with two entries. If Fabio has written anything else — on LinkedIn, Medium, a personal blog, or internally — those could be added here. Even one additional article of a different topic (e.g., engineering management, team building) would demonstrate breadth and make the section feel substantive.

**Recommendation:** Add at least 1–2 articles, ideally on a management or leadership topic to complement the existing technical pieces.

**Files affected:** `index.html`

---

### C2. Enable the "Open to opportunities" badge

The badge in `#about` is styled and ready (`badge-available`, `badge-available__dot` with a pulsing animation) but hidden via `style="display:none"`. If Fabio is actively looking, removing the inline style takes 5 seconds and gives the page a clear signal to recruiters.

**Recommendation:** Remove the inline `display:none` when the status becomes relevant.

**Files affected:** `index.html`

---

### C3. Add a publication date to article cards

The two article cards in `#writing` have no date. For a personal site focused on professional credibility, publication dates show that the content is not ancient and give visitors context (e.g., "written when BULL was at version X"). Even a year is sufficient.

**Recommendation:** Add a `<time>` element with a publication year to each `.article-card__pub` block.

**Files affected:** `index.html`, possibly `css/writing.css` (minor)

---

## 4. Out of Scope

The following were considered and explicitly excluded from this proposal:

| Item | Reason excluded |
|------|----------------|
| Adding a build step / bundler | The entire value proposition of this codebase is zero tooling. A build step would add maintenance overhead with no meaningful gain at this scale. |
| Converting to a JS framework | Same rationale. Plain HTML/CSS/JS is appropriate for a single-page personal site. |
| Adding analytics | A legitimate option but a separate decision with privacy implications (GDPR, cookie consent). Out of scope for this proposal. |
| Sitemap or robots.txt changes | `sitemap.xml` and `robots.txt` are already present and correct. No action needed. |
| `lang` per-section | All content is in English. A per-section `lang` attribute is only needed when sections switch languages. Not applicable here. |
| `role="img"` on `hero__visual` terminal | The div is `aria-hidden="true"`. Since it carries no information not already present in the hero text content, the current treatment is acceptable. No change needed. |
| Removing `aria-hidden` from the blinking cursor | The cursor (`hero__cursor`) is correctly `aria-hidden`. Announcing a blinking cursor to screen readers would be disruptive noise. |

---

## Approval Checklist

Please indicate your decision on each item:

**P0 — Accessibility (all recommended for immediate implementation)**
- [X] A1 — `aria-live` on typewriter
- [X] A2 — `aria-live` on stat counters
- [X] A3 — Focus trap on mobile nav
- [X] A4 — Emoji cover accessible name decision
- [X] A5 — `theme-color` meta tag
- [X] A6 — `.reveal` reduced-motion fix

**P1 — UX Improvements**
- [X] U1 — Activate email copy-to-clipboard
- [ ] U2 — Activate Formspree contact form
- [X] U3 — Fix hardcoded BULL star count
- [ ] U4 — Reveal eDreams experience entry
- [X] U5 — `loading="lazy"` on BULL cover image

**P2 — Content**
- [X] C1 — Add more writing entries
- [ ] C2 — Enable "Open to opportunities" badge
- [X] C3 — Add publication dates to articles
