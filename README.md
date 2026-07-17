# restuffle.github.io

Personal portfolio — React 18 + Vite, plain CSS design system, deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages.

> One-time setup: in the repo Settings → Pages, set **Source** to **GitHub Actions**.

## Structure

- `src/data.js` — all site content (experience, projects, skills, links). Edit this to update the site.
- `src/components/` — React components
- `src/styles.css` — design tokens + styles
- `public/Resume.pdf` — served at `/Resume.pdf`
- `legacy/` — the previous plain HTML/CSS/JS site, kept for reference
