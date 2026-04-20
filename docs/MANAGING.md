# Managing Your Personal Website

This guide covers everything you need to update and maintain the site over time.
The site is plain HTML / CSS / JS — no build step, no framework, no package manager.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Updating Your Bio](#updating-your-bio)
3. [Updating the Stats](#updating-the-stats)
4. [Updating the Hero Typewriter Text](#updating-the-hero-typewriter-text)
5. [Updating the Skills Section](#updating-the-skills-section)
6. [Adding / Editing Work Experience](#adding--editing-work-experience)
7. [Adding / Removing Projects](#adding--removing-projects)
8. [Adding Articles](#adding-articles)
9. [Updating the Contact Details](#updating-the-contact-details)
10. [Replacing the Profile Photo](#replacing-the-profile-photo)
11. [Replacing the CV / Resume](#replacing-the-cv--resume)
12. [Theming and Colors](#theming-and-colors)
13. [Deploying Changes](#deploying-changes)
14. [Setting Up the Contact Form](#setting-up-the-contact-form)

---

## Project Structure

```
fb-personal-website/
├── index.html          ← All content lives here
├── css/                ← One CSS file per section
│   ├── main.css        ← Import chain (edit this to add/remove CSS files)
│   ├── variables.css   ← All colors, fonts, spacing — start here for theming
│   └── …
├── js/                 ← One JS module per feature
│   ├── main.js         ← Entry point
│   └── experiences.js  ← Experience data + renderers (single source of truth for both index + CV)
├── assets/
│   ├── images/         ← profile.jpg, og-preview.png, project screenshots
│   └── resume.pdf      ← Downloadable CV
├── docs/               ← This folder
├── CHANGELOG.md        ← Log of changes
├── PLAN.md             ← Original research and design plan
└── .gitignore
```

---

## Updating Your Bio

Open `index.html` and find the `<div class="about__bio">` block (search for `about__bio`).
Edit the `<p>` paragraphs directly. Wrap key phrases in `<strong>` to bold them.

```html
<div class="about__bio">
  <p>
    Engineering Manager with <strong>20+ years</strong> …
  </p>
</div>
```

---

## Updating the Stats

The About section shows **four animated stat cards** in a 2×2 grid.
Find the `<div class="about__stats">` block and update the numbers:

```html
<div class="stat-card">
  <div class="stat-card__number" data-count="16">0</div>
  <div class="stat-card__label">Engineers Led</div>
  <div class="stat-card__sub">simultaneously</div>  <!-- optional subtitle -->
</div>
```

- `data-count` — the target number the counter animates to
- `data-suffix` — optional suffix appended after the number (e.g. `+`, `k`)
- The text content (`0`) is the initial display before JS runs
- `stat-card__sub` — optional small italic line below the label (used to add context like "simultaneously")

Current cards (top-left → top-right → bottom-left → bottom-right):

| Card | Value | Label | Sub |
|---|---|---|---|
| Engineers Led | 16 | Engineers Led | simultaneously |
| Teams Built | 4 | Teams Built | simultaneously |
| Years Exp. | 20+ | Years Exp. | — |
| Projects | 10+ | Projects | — |

---

## Updating the Hero Typewriter Text

The cycling roles under your name are defined in `js/typewriter.js`:

```js
const roles = [
  'Engineering Manager',
  'Open Source Enthusiast',
  'Team Builder',
  'People & Tech Leader',
];
```

Edit the array to add, remove, or reorder phrases. Each string is typed out and deleted in sequence.

---

## Updating the Skills Section

Each skill category is a `.skill-card` block inside `#skills`.
To **add a technology**, copy an existing `.tech-icon` block and update the logo URL and label:

```html
<div class="tech-icon">
  <img src="https://cdn.simpleicons.org/{slug}/{hex-color}" alt="Tool Name" width="32" height="32" loading="lazy">
  <span class="tech-icon__name">Tool Name</span>
</div>
```

Find the correct slug for any technology at [simpleicons.org](https://simpleicons.org).
The hex color is the brand color shown on that page (without the `#`).

To **add a new category**, copy an entire `.skill-card` block and change the title and icons.
The grid handles wrapping automatically (3 columns on desktop, 2 on tablet, 1 on mobile) — no CSS changes needed.

To **reorder categories**, cut and paste `.skill-card` blocks within `<div class="skills__grid">`.
The visual order on the page matches the HTML source order.

Current category order (row 1 → row 2):

| Row 1 | Row 2 |
|---|---|
| Leadership | Tools |
| Backend | Cloud & DevOps |
| APIs | Frontend |

> **Note:** Some icons with multi-color logos (e.g. Slack) can't be loaded from the simpleicons CDN — use an inline SVG instead. See the Slack icon in the Leadership card as a reference.

---

## Adding / Editing Work Experience

All experience data lives in a single source of truth: **`js/experiences.js`**.
Both the portfolio timeline (`index.html`) and the full CV (`pages/fbResume.html`) are rendered from this file — you never need to edit HTML for experience changes.

### Data structure

Each entry in the `experiences` array looks like this:

```js
{
  hidden: false,        // true = renders with display:none (draft a future role)
  showInIndex: true,    // true = appears in the portfolio timeline (index.html)
  index: {              // only needed when showInIndex: true
    role: 'Engineering Manager',   // title shown in the portfolio
    date: '2020 – Present',        // simplified date range (year only)
    location: 'Italy · Hybrid',
  },
  cv: {
    role: 'Manager, Software Development Engineering',  // full title in the CV
    date: 'Jun 2022 – Present',                         // full date with month
  },
  company: 'Expedia Group',    // used in both views
  bullets: [                   // used in both views (empty array = no bullet list)
    'Led cross-functional engineering teams …',
  ],
  tags: ['Engineering Leadership', 'Java'],  // shown in portfolio only
},
```

### Add a new entry

1. Open `js/experiences.js`
2. Add a new object to the top of the `experiences` array (most recent first)
3. Set `showInIndex: true` if it should appear in the portfolio, `false` for CV-only
4. If `showInIndex: true`, fill in the `index` block with simplified date and location

The portfolio always shows the first 3 non-hidden `showInIndex: true` entries.

### Show or hide an entry

Set `hidden: true` to suppress rendering without deleting the data.
Set it back to `false` to make it visible. Useful for drafting a future role before its start date.

### Edit an entry

Find the entry by company/role in `js/experiences.js` and update it directly.
Changes automatically apply to both the portfolio and CV.

---

## Adding / Removing Projects

Projects are inside `<div class="projects__grid">` in `index.html`.
The grid is **2 columns** (2×2 layout for 4 cards), dropping to 1 column on mobile.

### Add a project

Copy an existing `.project-card` block. Key fields to update:

| Field | Where |
|---|---|
| Cover image/gradient | `src="…"` on the `<img>` or `style="--cover-gradient: …"` on the gradient div |
| Title | `<h3 class="project-card__title">` |
| Description | `<p class="project-card__desc">` |
| Tags | `<span class="tag">` elements |
| Link | `href` on the `.project-card__link` anchor |
| Stars count | `.project-card__stars` span (optional, remove if not applicable) |

### Cover image types

**Photo cover** (full-bleed, e.g. One Key Cards):
```html
<img src="assets/images/your-image.png" alt="Description" class="project-card__cover cover--photo" loading="eager">
```

**Logo cover** (contained on white, e.g. BULL):
```html
<img src="https://…" alt="Description" class="project-card__cover" loading="eager">
```

**Gradient placeholder** (no image):
```html
<div class="project-card__cover project-card__cover--gradient" style="--cover-gradient: linear-gradient(135deg, #1a2a1a, #2d4d2d)" aria-hidden="true">📘</div>
```

### Mark a project as featured

Add the `project-card--featured` class to the card:
```html
<div class="project-card project-card--featured …">
```
This adds a "★ Featured" ribbon in the top-right corner.

### Remove a project

Delete the entire `<div class="project-card …"> … </div>` block.

---

## Adding Articles

Articles are inside `<div class="writing__list">` in `index.html`.

Copy an existing `.article-card` block:

```html
<a href="YOUR_ARTICLE_URL" target="_blank" rel="noopener noreferrer" class="article-card reveal">
  <div class="article-card__pub">
    <span class="article-card__source">Publication Name</span>
  </div>
  <h3 class="article-card__title">Article Title</h3>
  <p class="article-card__desc">Short description of the article.</p>
  <div class="article-card__tags">
    <span class="tag">Topic</span>
  </div>
  <span class="article-card__cta">
    Read article
    <!-- arrow SVG -->
  </span>
</a>
```

The source badge color is blue by default. To use the red InfoQ style, add the modifier class:
```html
<span class="article-card__source article-card__source--infoq">InfoQ</span>
```

To add a new color variant, add a new modifier in `css/writing.css`.

---

## Updating the Contact Details

Search `index.html` for `copy-email` to find the email copy button:

```html
<div … id="copy-email" data-email="your@email.com" …>
```

Update `data-email` with your current email address. The displayed text below it should match.

For social links (LinkedIn, GitHub, Twitter), search for `linkedin.com`, `github.com`, `twitter.com`
and update the `href` attributes. There are two sets: one in the Hero section and one in the Contact section.

---

## Replacing the Profile Photo

1. Prepare your photo: crop to roughly square, export as `.jpg` or `.webp`, keep under 200KB.
2. Replace `assets/images/profile.jpg` with the new file (keep the same filename to avoid HTML changes).
3. If you use a different filename, update the `src` attribute in `index.html`:
   ```html
   <img src="assets/images/your-new-photo.jpg" … class="about__photo">
   ```
4. Adjust `object-position` in `css/about.css` if the crop needs repositioning:
   ```css
   .about__photo {
     object-position: center 10%; /* move up/down as needed */
   }
   ```

---

## Replacing the CV / Resume

Replace `assets/resume.pdf` with your updated PDF, keeping the same filename.
If you rename it, update the `href` in the About section of `index.html`:

```html
<a href="assets/resume.pdf" download …>Download CV</a>
```

---

## Theming and Colors

All design tokens (colors, spacing, typography, shadows) are in `css/variables.css`.

### Change the accent color

Find `--color-accent` and update it:
```css
:root {
  --color-accent: #3B82F6; /* change this to your preferred color */
}
```
Also update `--color-accent-hover` and `--shadow-accent` to match.

### Change the background (dark theme)

Update `--color-bg` and `--color-bg-card` in `:root`.

### Adjust the light theme

All light theme overrides are in the `[data-theme="light"]` block at the bottom of `variables.css`.

---

## Deploying Changes

The site has no build step. Deploy by pushing to GitHub and using one of:

### GitHub Pages
1. Go to repo **Settings → Pages**
2. Source: **Deploy from a branch**, branch: `main`, folder: `/ (root)`
3. Every push to `main` auto-deploys

### Netlify
1. Connect the GitHub repo in the Netlify dashboard
2. Build command: *(leave empty)*
3. Publish directory: `.` (root)
4. Every push to `main` auto-deploys

### Custom domain
Set your custom domain in GitHub Pages or Netlify settings, then update:
- `robots.txt` — the `Sitemap:` URL
- `sitemap.xml` — the `<loc>` URL
- `index.html` — all `og:url`, `og:image`, `twitter:image`, and `<link rel="canonical">` values

---

## Setting Up the Contact Form

The form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Create a free account at formspree.io
2. Create a new form and copy the form endpoint ID (looks like `xabcdefg`)
3. In `index.html`, find the `<form id="contact-form">` and update the `action`:
   ```html
   <form action="https://formspree.io/f/xabcdefg" …>
   ```
4. Test by submitting the form — you'll receive an email confirmation

---

*Last updated: April 2026*
