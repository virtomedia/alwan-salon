# Alwan Alshaar — GitHub Pages

Ready-to-upload static website, configured for the `virtomedia` account and a repository named **alwan-salon**.

Expected preview address after you publish: https://virtomedia.github.io/alwan-salon/

## Upload and publish

1. Extract the ZIP on your computer.
2. In the `virtomedia` GitHub account, create a public repository named exactly `alwan-salon`.
3. Choose **Add file → Upload files**. Upload the extracted files and folders into the repository root. `index.html`, `app.js`, `seo.js`, `assets/`, `ar/` and the other page folders must be at the top level, rather than inside another folder. Upload the extracted contents, not the ZIP itself. Commit the upload to `main`.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/ (root)**. Save.
5. Wait for GitHub to show the deployment link, then test the site before sending it to Ali. Check navigation, EN/Arabic, gallery comparisons and a booking request on your phone.

The ZIP includes `.nojekyll`. If your computer hides this file and it was not uploaded, use **Add file → Create new file** in GitHub, name the file `.nojekyll`, leave it empty and commit it.

This package contains all website assets and requires no paid booking service. A booking opens WhatsApp with an appointment request; the salon manually confirms availability. No domain has been purchased or connected, and this ZIP has not been uploaded to GitHub for you.

## Included

- 26 complete English/Arabic pages
- Images, fonts and icons
- Three-step WhatsApp appointment request flow
- Gallery and before/after comparisons
- Branded page loader
- Unique metadata, canonical/language links, business structured data and sitemap

## Future edits

Edit `app.js` for page components, `data.js` for the menu, and `seo.js` for metadata. Then run `node scripts/prerender.mjs` with a recent Node.js version to regenerate the HTML. No packages need to be installed.

This export is configured for `/alwan-salon/`. Using another repository name, account or a custom domain requires updating the base paths and SEO origin and regenerating the pages first. Do not simply rename the repository. Keep a backup before editing.

Do not test by double-clicking `index.html`: open the published GitHub Pages address so the site paths resolve correctly.

GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
