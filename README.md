# Personal Academic / Portfolio Website

A static, dependency-free personal site to support graduate school applications.
Plain HTML, CSS, and a small amount of vanilla JavaScript — no build step, no
framework, no backend. Designed to be fast, accessible, and mobile-responsive.

## Tech

- **HTML5 + CSS3 + vanilla JS** — no framework, no bundler, no build step.
- **Zero runtime dependencies.** Everything is served as static files.
- Hostable directly on **GitHub Pages** (`username.github.io`).

## Project structure

```
portfolio/
├── index.html            # Single-page site (all sections)
├── css/
│   └── styles.css        # Design tokens + all styles
├── js/
│   └── main.js           # Small progressive enhancements (nav, footer year)
├── assets/
│   └── images/           # Screenshots and figures (see images/README.md)
├── .nojekyll             # Tell GitHub Pages to skip Jekyll processing
└── README.md
```

## Run locally

No build step. Either open the file directly, or serve it (recommended, so
relative paths and JS behave exactly as on GitHub Pages):

```bash
# Option A — Python (usually preinstalled)
python3 -m http.server 8000
# then open http://localhost:8000

# Option B — Node (if you prefer)
npx serve .
```

Opening `index.html` directly in a browser also works for a quick look.

## Deploy to GitHub Pages

This site deploys as-is; there is nothing to build.

1. Create a repository named **`<your-username>.github.io`** (this makes the
   site available at `https://<your-username>.github.io/`).
   - Alternatively, use any repo name to publish at
     `https://<your-username>.github.io/<repo-name>/`.
2. Push the contents of this folder to the repository's default branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment**.
   Set **Source** to **Deploy from a branch**, **Branch** = `main`, folder = `/ (root)`.
4. Wait ~1 minute, then visit `https://<your-username>.github.io/`.

The `.nojekyll` file ensures GitHub Pages serves the files verbatim instead of
running them through Jekyll (harmless here, but avoids surprises with any files
that start with an underscore).

## Analytics

Page-view stats are collected via **Cloudflare Web Analytics** — a cookieless,
privacy-friendly beacon loaded in `<head>` of `index.html`. No consent banner is
required. View the dashboard at
[dash.cloudflare.com](https://dash.cloudflare.com) → **Web Analytics**. It tracks
the whole `tahmim123.github.io` hostname; filter by the `/portfolio/` path to
isolate this site. To disable, remove the `<!-- Cloudflare Web Analytics -->`
block from `index.html`.

## Editing content

All page content lives in `index.html`, organized into commented sections
(`<!-- ============ SECTION ============ -->`). Search the file for `TODO:` to
find every spot that still needs a real asset, link, or fact.

## Outstanding TODOs

Placeholders and open questions are marked inline with `TODO:` in `index.html`
and listed in `assets/images/README.md` for screenshots. Grep for them:

```bash
grep -rn "TODO:" index.html assets/
```
