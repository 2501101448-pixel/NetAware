# NetAware

NetAware is a small static informational website (HTML/CSS/JS) intended as a simple weblog and guide pages. No build system or server-side code is required — pages are standalone files at the repository root and assets live in the `image/` folder.

Quick preview (PowerShell): run `python -m http.server 8000` from the repo root, then open `http://localhost:8000` in a browser. Alternatively use the VS Code Live Server extension and click "Go Live".

Main files and structure
- `index.html` — site entry, header/nav, hero/search UI, and footer.
- `script.js` — client-side behaviors: mobile menu, back-to-top, hero animation, and search suggestions. Inspect the `topics` array here when linking search suggestions to pages.
- `style.css` — global styles and responsive rules.
- `blogpage1.html`, `blogpage2.html`, `blogpage3.html`, `about.html`, `tips.html`, `contact.html` — content pages.
- `image/` — images and icons referenced by pages.

Developer notes / patterns (important)
- This is a purely static site: edit HTML/CSS/JS and preview in-browser; no build step.
- The `script.js` file contains a `topics` array mapping suggestion names to `url` values. Ensure the `url` points to the existing page filenames (for example, `blogpage1.html`).
- `index.html` has been observed to include `script.js` multiple times; duplicate `<script src="script.js"></script>` lines will cause double-execution and console errors — keep a single include before `</body>`.
- Some asset paths use leading slashes (e.g., `/image/log.jpg`) which can break when serving from a subpath or opening from the filesystem; prefer `image/...` (relative paths).
- `style.css` contains small issues (e.g., `color: ##00bfff;` and an empty `hero h1 span { color: }`). These are safe to fix but verify the UI after edits.
- DOM selectors in `script.js` assume certain elements exist (e.g., `heroSearchInput` and `heroSearchSuggestions`). If you rename or remove elements, update `script.js` to avoid null references.

How to add a blog page
1. Create `blogpageN.html` using the existing pages as examples.
2. Add any images under `image/` and reference them with `image/...` paths.
3. Add or update a card in `index.html` (if desired) and add a `topics` entry in `script.js` like `{ name: "Title", url: "blogpage4.html" }`.

Debugging tips
- Use browser DevTools → Console for JS errors; duplicate behavior often means scripts were included twice.
- Use Network tab to catch 404s for images or CSS; fix by correcting the `src`/`href` to `image/...`.

Deployment
Deploy as a static site (GitHub Pages, Netlify, Vercel). Keep asset paths relative so the site works from a repo subpath.

Where to look when editing
- Start with `index.html` and `script.js` for interactive fixes.
- `style.css` for layout and visual tweaks.
- `image/` for media assets.

Contact / contributions
Open an issue or PR with focused changes; keep changes minimal and test locally before submitting.

---
This README focuses on quick local preview, common pitfalls observed in the repository, and concrete editing steps for contributors.
