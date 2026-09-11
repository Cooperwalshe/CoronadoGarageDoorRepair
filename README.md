# Coronado Garage Door Repair

Static lead-generation site. No build step, no dependencies — plain HTML, CSS, and one small JS file.

## Files

```
index.html            Home
services.html         Six service sections (anchored: #springs, #openers, etc.)
service-areas.html    Coronado neighborhoods + nearby
faq.html              Questions, with FAQPage schema
css/style.css         All styling
js/main.js            Form submission handling
sitemap.xml           For Google Search Console
robots.txt
.nojekyll             Stops GitHub Pages running this through Jekyll
```

## Three things to fill in before launch

**1. Formspree endpoint**

Create a form at formspree.io, then in `index.html` find:

```
action="https://formspree.io/f/YOUR_FORM_ID"
```

Replace `YOUR_FORM_ID` with your real form ID. Until you do, the form shows an
error telling people to call instead — it won't silently swallow leads.

**2. Your live URL**

Search every file for `REPLACE-WITH-YOUR-URL` and swap in your GitHub Pages URL
(e.g. `cooperwalshe.github.io/coronado-garage-door-repair`). This appears in:

- `<link rel="canonical">` on each page
- the JSON-LD schema in `index.html`
- `sitemap.xml`
- `robots.txt`

**3. The copyright year in the footer**

Currently 2026 across all four pages.

## Deploy

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/Cooperwalshe/coronado-garage-door-repair.git
git push -u origin main
```

Then: repo → Settings → Pages → Source: "Deploy from a branch" → `main` / `root`.
Live in about a minute.

## After it's live

1. Submit to Google Search Console and request indexing on all four pages.
2. Create a Google Business Profile. This is the single biggest ranking factor
   for local service searches — bigger than anything on the site itself.
3. Add the site to local directories: Yelp, Nextdoor, Thumbtack, Angi.

## Design notes

- Palette: harbor ink `#14202b`, brass `#a8792a` / `#d9a445`, cool paper `#f1f3f4`
- Type: Archivo (headings), Source Serif 4 (body)
- The repeating horizontal rules between sections echo garage door panel lines
- No images — the site is fast and there's nothing to source or license
- Sticky call bar appears on mobile only, since most emergency traffic is phones
