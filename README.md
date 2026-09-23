# Huaiyu Yan academic homepage

This is a dependency-free, responsive GitHub Pages site. It uses a conventional academic-homepage layout with a compact profile sidebar and separate pages for education, publications, and services. The home page contains only the introduction and recent news.

## Publish on GitHub Pages

1. Create a public GitHub repository named `<your-github-username>.github.io`.
2. Upload the contents of this folder to the repository root and commit to `main`.
3. In the repository, open **Settings → Pages** and select **Deploy from a branch**, then choose `main` and the repository root.
4. The site will be available at `https://<your-github-username>.github.io` after GitHub finishes publishing.

## Before publishing

- In `assets/site.js`, set `githubUrl` to your public GitHub profile URL. The GitHub contact link is otherwise hidden.
- Add a public CV only after removing information you do not want exposed (for example, phone numbers and referees' personal contact details). Place it in `assets/cv.pdf`, then set `cvUrl: "assets/cv.pdf"` in `assets/site.js`.
- Replace the monogram card with a profile photo only if you want a public photograph on the site.

## Update content

- `index.html` contains the introduction and news.
- `education.html`, `publications.html`, and `service.html` contain the corresponding standalone sections.
- `assets/styles.css` contains the shared colors and responsive layout.

No build step or package installation is required.
