# Fabio Borriello — Personal Website Plan

> Research-backed blueprint synthesized from three expert agents:
> web best-practices research, LinkedIn/GitHub profile extraction, and UX/UI design analysis.

---

## 1. About You (Content Extracted)

| Field | Value |
|---|---|
| Name | Fabio Borriello |
| Location | Italy |
| Role | Engineering Manager |
| GitHub | github.com/fborriello |
| LinkedIn | linkedin.com/in/fabio-borriello |
| Twitter/X | @borriellofabio |
| Email | borriello.fabio@gmail.com |

### Bio (draft)
> Engineering Manager with 7+ years leading cross-functional, globally distributed teams.
> I thrive at the intersection of people and technology — building high-performing teams,
> steering large-scale initiatives, and making sure engineering and business strategy
> actually speak the same language.
>
> I care about more than delivery. I care about the engineers doing the work — mentoring them,
> growing them, and creating the kind of environment where great software happens naturally.
> Technically grounded, empathetic by choice, and passionate about open source: I believe
> the best ideas are built in the open.
>
> Away from the keyboard, I recharge on long cycling rides and with my family — the two
> things that keep everything else in perspective.

---

## 2. Sections to Include

### Must-Have (Recommended for Your Profile)

| Section | Content | Priority |
|---|---|---|
| **Hero** | Name, role, one-liner, CTAs (View Work / Contact), social links | P0 |
| **About** | Bio paragraph, animated stats (years exp, projects, technologies) | P0 |
| **Skills** | Grouped by category with tech logos (no % bars) | P0 |
| **Experience** | Timeline — engineering management roles and key contributions | P0 |
| **Projects** | Open source and personal projects | P0 |
| **Contact** | Form (Formspree) + direct email + social links | P0 |

### Nice-to-Have

| Section | Content | Priority |
|---|---|---|
| **Open Source** | Highlight open source contributions and projects | P1 |
| **GitHub Activity** | Contribution stats, achievements (Pull Shark x3, Arctic Vault, etc.) | P1 |
| **Certifications/Learning** | HackerRank solutions, Baeldung/Udemy courses | P2 |
| **Blog** | External links to any future articles (placeholder section) | P2 |
| **Uses / Setup** | Editor, tools, OS — signals personality | P3 |

---

## 3. Content Per Section

### Hero
- **Headline:** `Hi, I'm Fabio Borriello`
- **Subtitle (typewriter cycling):** `Engineering Manager` → `Open Source Maintainer` → `Java & Backend Specialist` → `Team Builder`
- **CTA Primary:** `View My Work` → scrolls to Projects
- **CTA Secondary:** `Get in Touch` → scrolls to Contact
- **Social links:** GitHub · LinkedIn · Twitter/X
- **Visual element (right column):** Animated terminal window showing `$ whoami`, `$ skills --list`, etc.
- **Badge:** "Open Source Maintainer" or availability status

### About
- 2–3 paragraph bio focusing on: engineering leadership, passion for open source, and personal interests
- **Animated stats counters:**
  - `5+` Years of Experience
  - `10+` Projects on GitHub
  - `2` Languages (Italian / English)
- Profile photo placeholder (add your photo at `assets/images/profile.webp`)
- Download CV button

### Skills (Grouped)

| Category | Technologies |
|---|---|
| **Backend** | Java, Spring Boot, Maven, REST APIs, Multithreading |
| **Frontend** | React, TypeScript, MobX, JavaScript, HTML, CSS |
| **Cloud & Infrastructure** | AWS S3, GitHub Actions, AWS SDK v2 |
| **Databases & APIs** | GraphQL, Apollo Server/Client, WebSockets |
| **Tools & Practices** | Git, JaCoCo, Checkstyle, Dependabot, Swagger, Postman |

- Use tech logo SVGs from [Simple Icons](https://simpleicons.org/)
- Logos: grayscale by default, brand color on hover

### Experience (Timeline)

**Expedia Group** — Engineering Manager · 2020 – Present
- Lead engineering teams delivering reliable, scalable software products
- Drive engineering culture, technical standards, and team growth
- Passionate open source contributor — maintain and evolve libraries used across the community
- Implemented CI/CD pipelines and automated quality workflows

> **Note:** Fill in the exact start date and any previous employers when the LinkedIn profile becomes accessible.

### Projects

| Project | Description | Stack | Links |
|---|---|---|---|
| **BULL** | Java Bean-to-Bean transformer. Generic, flexible, fast. Supports mutable/immutable beans, Java Records, nested collections, lambda transformers. 197★ 43⑂ | Java, Maven | [GitHub](https://github.com/ExpediaGroup/bull) |
| **bull-tutorial** | Spring Boot app demonstrating BULL usage with REST APIs and Swagger UI. Multi-module Maven project. | Java, Spring Boot, Swagger | [GitHub](https://github.com/fborriello/bull-tutorial) |
| **awsS3Downloader** | Tool to recursively download content from an S3 bucket via a REST API. Includes Postman collection. | Java, Spring Boot, AWS SDK v2 | [GitHub](https://github.com/fborriello/awsS3Downloader) |
| **react-timer** | MobX-based timer app showcasing reactive state management in React. | React, TypeScript, MobX | [GitHub](https://github.com/fborriello/react-timer) |
| **graphql-learning** | Job board and real-time chat apps built while learning GraphQL. | Node.js, React, Apollo, WebSockets | [GitHub](https://github.com/fborriello/graphql-learning) |

### Contact
- Form via **Formspree** (free tier, no backend needed)
- Fields: Name, Email, Message, Send button
- Direct email: borriello.fabio@gmail.com (with copy-to-clipboard)
- Social icons: GitHub, LinkedIn, Twitter/X
- Availability text: e.g. "I'm open to interesting opportunities and conversations."

---

## 4. Architecture & File Structure

```
fb-personal-website/
├── index.html                  ← Single-page site (all sections)
├── css/
│   ├── main.css                ← @import all other CSS files
│   ├── variables.css           ← CSS custom properties (tokens)
│   ├── reset.css               ← Modern CSS reset
│   ├── typography.css          ← Font imports, base type styles
│   ├── layout.css              ← Container, grid, section spacing
│   ├── nav.css                 ← Navigation component
│   ├── hero.css                ← Hero section
│   ├── about.css               ← About section
│   ├── skills.css              ← Skills section
│   ├── experience.css          ← Timeline
│   ├── projects.css            ← Project cards grid
│   ├── contact.css             ← Contact form & links
│   ├── footer.css              ← Footer
│   ├── animations.css          ← @keyframes + .animate-on-scroll utilities
│   └── responsive.css          ← All media queries in one place
├── js/
│   ├── main.js                 ← Entry point: imports & initializes all modules
│   ├── theme.js                ← Dark/light mode toggle + localStorage
│   ├── nav.js                  ← Sticky nav, hamburger menu, active link highlight
│   ├── animations.js           ← IntersectionObserver scroll reveals
│   ├── typewriter.js           ← Hero typewriter/cycling text
│   └── contact.js              ← Form submission (Formspree or EmailJS)
├── assets/
│   ├── images/
│   │   ├── profile.webp        ← Your photo (circular crop, ~100KB)
│   │   ├── og-preview.png      ← Open Graph preview image (1200×630px)
│   │   └── projects/           ← Project screenshots (WebP, ~200KB each)
│   │       ├── bull.webp
│   │       ├── bull-tutorial.webp
│   │       ├── aws-s3-downloader.webp
│   │       ├── react-timer.webp
│   │       └── graphql-learning.webp
│   ├── icons/
│   │   └── tech/               ← Simple Icons SVGs for skills section
│   └── resume.pdf              ← Downloadable CV
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png        ← 180×180px
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── .gitignore
```

---

## 5. Visual Design

### Theme
- **Default:** Dark (industry standard for tech professionals; makes accent colors pop)
- **Toggle:** Light/dark mode switch in nav
- Respect OS `prefers-color-scheme` as default; persist manual choice in `localStorage`

### Color Palette (Dark / Default)

| Token | Value | Usage |
|---|---|---|
| `--color-bg-primary` | `#09090B` | Page background |
| `--color-bg-secondary` | `#18181B` | Cards, sections |
| `--color-border` | `#27272A` | Subtle borders |
| `--color-accent` | `#3B82F6` | Buttons, highlights, links |
| `--color-accent-secondary` | `#06B6D4` | Gradients, tags |
| `--color-text-primary` | `#FAFAFA` | Headings, main body |
| `--color-text-secondary` | `#A1A1AA` | Subtitles, meta info |

### Color Palette (Light)

| Token | Value |
|---|---|
| `--color-bg-primary` | `#FFFFFF` |
| `--color-bg-secondary` | `#F4F4F5` |
| `--color-border` | `#E4E4E7` |
| `--color-text-primary` | `#111827` |
| `--color-text-secondary` | `#6B7280` |

### Typography

| Role | Font | Weight |
|---|---|---|
| Headings | Inter | 700–800 |
| Body | Inter | 400–500 |
| Code / Tags | JetBrains Mono | 400 |

- Load via Google Fonts CDN (`<link rel="preconnect">` + `display=swap`)
- Fluid type scale using `clamp()` for hero and section headings

### Spacing
- 8px grid: all spacing values are multiples of 4/8px
- Section vertical padding: `80px–120px`
- Container max-width: `1200px`
- Sticky nav height: `72px` (used as `scroll-padding-top`)

---

## 6. UX & Interactions

### Navigation
- Transparent over hero → `backdrop-filter: blur(12px)` + semi-opaque on scroll
- Active section highlight via IntersectionObserver
- Mobile: hamburger → full-screen overlay with centered links + close button

### Hero
- Left column: greeting, name (`<h1>`), typewriter subtitle, two CTA buttons, social icons
- Right column: animated terminal window (CSS + JS) showing personality + skills
- Scroll-down chevron with CSS bounce animation at bottom-center

### Scroll Animations
- All sections and cards use `.animate-on-scroll` with IntersectionObserver
- Staggered delays for grids (skills cards, project cards): `0.1s` increments
- Timeline items: alternate fade-in from left and right
- **Always** include `prefers-reduced-motion` override:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

### Skills Section
- Category cards with icon grid (no percentage bars)
- Tech logos grayscale → brand color on hover
- Cards fade-up on scroll entry, staggered

### Experience Timeline
- Vertical center-line on desktop, left-anchored on mobile
- Each entry slides in from alternating sides
- Accent-colored ● dots with subtle pulse animation

### Project Cards
- 3-col grid → 2-col (tablet) → 1-col (mobile)
- Hover: `translateY(-6px)` + shadow intensify + accent border
- "Featured" badge on BULL (most significant project)
- Tech stack chips at bottom of each card

### Contact Form
- Floating labels (animate up on focus/fill)
- Formspree for form submission (no backend needed)
- Copy-to-clipboard email button (icon → checkmark animation)

---

## 7. SEO & Performance Checklist

### SEO
- [ ] `<title>Fabio Borriello — Backend Software Engineer</title>`
- [ ] Meta description: "Backend software engineer at Expedia Group. Core maintainer of the BULL open-source Java library. Based in Rome, Italy."
- [ ] Open Graph tags (og:title, og:description, og:image 1200×630px)
- [ ] Twitter Card tags
- [ ] JSON-LD structured data (`@type: Person` with name, sameAs links)
- [ ] `robots.txt` and `sitemap.xml`

### Performance
- [ ] WebP images with explicit `width` + `height` (prevents layout shift)
- [ ] `loading="lazy"` on all below-fold images
- [ ] `loading="eager"` on hero profile photo
- [ ] `<link rel="preload">` for profile image and fonts
- [ ] All `<script>` tags use `defer`
- [ ] CSS loaded in `<head>`, no render-blocking scripts
- [ ] Target: Lighthouse score 95+

### Accessibility
- [ ] Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] One `<h1>` per page; no heading level skips
- [ ] All images have descriptive `alt` text
- [ ] WCAG AA color contrast on all text
- [ ] "Skip to main content" link (visually hidden, visible on focus)
- [ ] Focus rings visible for keyboard navigation (`:focus-visible`)
- [ ] `aria-label="Main navigation"` on `<nav>`
- [ ] Mobile hamburger uses `aria-expanded`

---

## 8. Hosting Recommendations

| Option | Cost | Best For |
|---|---|---|
| **GitHub Pages** | Free | Simple, no CI needed — push to main branch deploys automatically |
| **Netlify** | Free tier | Netlify Forms included, auto deploy from GitHub, custom domain easy |
| **Vercel** | Free tier | Slightly overkill for static HTML but excellent DX |
| **Cloudflare Pages** | Free tier | Best global CDN performance, free custom domain SSL |

**Recommendation:** GitHub Pages for simplicity (you're already on GitHub) or Netlify for the form integration bonus.

### Custom Domain
- Suggested: `fabioborriello.dev` or `fborriello.dev`
- SSL/TLS: Included free with all options above

---

## 9. Build Order (Suggested Implementation Sequence)

1. **Foundation**
   - `index.html` with all section scaffolding (empty sections)
   - `css/variables.css` (all design tokens)
   - `css/reset.css` + `css/typography.css`
   - `css/layout.css` (container, section spacing)

2. **Navigation**
   - `css/nav.css` + `js/nav.js`
   - Sticky, transparent → frosted-glass on scroll
   - Hamburger menu for mobile

3. **Hero Section**
   - `css/hero.css` + `js/typewriter.js`
   - Split-screen layout, terminal animation, CTAs, social icons

4. **About Section**
   - `css/about.css`
   - Two-column layout, bio text, animated stat counters

5. **Skills Section**
   - `css/skills.css`
   - Category cards with tech logos (source SVGs from Simple Icons)

6. **Experience Section**
   - `css/experience.css`
   - Timeline layout, alternating left/right entries

7. **Projects Section**
   - `css/projects.css`
   - Card grid, hover effects, tech chips, GitHub/demo links

8. **Contact Section**
   - `css/contact.css` + `js/contact.js`
   - Formspree setup, copy-to-clipboard email

9. **Footer**
   - `css/footer.css`
   - Copyright, social links, back-to-top button

10. **Cross-cutting Concerns**
    - `js/theme.js` — dark/light toggle
    - `js/animations.js` — scroll reveal (IntersectionObserver)
    - SEO meta tags, JSON-LD
    - `robots.txt`, `sitemap.xml`
    - Performance audit (Lighthouse)
    - Accessibility audit

---

## 10. Content Gaps to Fill

Before building, collect:

- [ ] **Profile photo** — professional, good lighting. Format as WebP, circular crop.
- [ ] **Exact start date at Expedia Group** — from LinkedIn (requires login)
- [ ] **Previous employers** (if any) — from LinkedIn
- [ ] **Education** — University degree, institution, year
- [ ] **Certifications** — any AWS, Oracle, Spring, etc.
- [ ] **Project screenshots** — 5 screenshots for the projects section
- [ ] **Resume / CV PDF** — up to date, to offer as download
- [ ] **Custom domain** — purchase if desired
- [ ] **Formspree account** — to get a form endpoint ID
- [ ] **OG preview image** — 1200×630px branded image for social sharing

---

*Plan generated: April 10, 2026*
*Sources: web.dev, MDN, CSS-Tricks, WCAG 2.2, GitHub public profile (github.com/fborriello), LinkedIn (inaccessible — supplemented by GitHub)*
