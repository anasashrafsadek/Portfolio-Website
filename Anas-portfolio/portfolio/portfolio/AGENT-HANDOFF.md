# Agent handoff
## Structure
- `index.html`, `css/style.css`, `js/app.js`, `404.html`, `robots.txt`, `sitemap.xml`, `.github/workflows/pages.yml`: **never modify** when replacing content.
- `data/`: all content. `assets/images/<group>/`: all images (26 slots). `assets/favicon.svg`: favicon.
## JSON files
personal (hero, about, socials, CV) · academic (items + big image) · activities (activities[1], events[2]) · conferences (3) · certificates (carousel[4], viewAll link, groups) · projects (items) · training (tryhackme, ctf) · experience (2 companies) · enterprise-projects (2) · skills (17 categories) · soft-skills · languages · personal-statement · contact (4 cards) · site-settings (SEO title, nav, UI labels).
Every text is `{"en": "...", "ar": "..."}`. Fill both. Keep technical terms (VLAN, SIEM…) in Latin script.
## Image folders
profile, academic, activities, events, conferences, certificates (contain-fit), projects, training, experience, experience/projects, personal-statement, contact. Replace the file or change the `image` path (SVG → JPG/PNG/WebP is fine). Keep the same aspect ratio as the placeholder.
## Recipes
- Add a project: copy one object in `projects.json` `items`, give a new `id`, `image`, text, `tags`, `links`.
- Add a certificate: carousel is fixed at 4 images by design; extra ones go in `certificates.json` `groups[].items`.
- Add a skill: append `{name, description, tool, level}` to `skills.json` → the category's `skills` array (`description`, `tool`, `level` are optional).
- Social links: `personal.json` `socials` (hero + footer) and `contact.json` (cards). Icons: linkedin, mail, whatsapp, instagram, github, link, doc.
- Academic/employment: edit `academic.json` and `experience.json` items (`details` = bullet list).
- Items without `links` simply show no buttons. Remove the word PLACEHOLDER / `example.com` from every value you replace.
## Validate
`for f in data/*.json; do python3 -m json.tool $f >/dev/null || echo BAD $f; done`
Search the repo for `PLACEHOLDER`, `example.com`, `replace-me` before publishing.
## Checklist
[ ] personal.json [ ] academic [ ] activities/conferences [ ] certificates [ ] projects [ ] training [ ] experience + enterprise [ ] 17 skill categories [ ] soft skills/languages [ ] statement [ ] contact URLs [ ] 26 images [ ] seo title [ ] sitemap/robots URLs [ ] JSON valid [ ] preview both languages and themes
