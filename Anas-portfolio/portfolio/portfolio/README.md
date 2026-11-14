# Portfolio website (static, GitHub Pages)
Vanilla HTML/CSS/JS. All content lives in `data/*.json` (bilingual `{"en":...,"ar":...}`); all images in `assets/images/`.
## Preview
`python3 -m http.server 8000` then open http://localhost:8000 (fetch() does not work from file://).
## Deploy
Push to `main`, then Settings → Pages → Source: GitHub Actions (workflow included). All paths are relative, so `https://USERNAME.github.io/REPOSITORY/` works.
## Edit content
See `AGENT-HANDOFF.md`. To replace an image, put the new JPG/PNG/WebP in the same folder and change its `image` path in the matching JSON file.
After publishing, update the URLs in `robots.txt` and `sitemap.xml`.
