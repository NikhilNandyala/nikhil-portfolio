 # Portfolio overview

This repository powers the **nikhilnandyala | Portfolio** single-page app. The site presents a professional resume-style profile, highlights recent blog posts, and keeps a hidden admin console at `/admin` for authenticated edits. The public navigation keeps the CMS entry point out of sight while still allowing direct access when you know the URL.

## Deploying with Vercel

The project is set up to deploy through Vercel, so you can rely on Vercel’s preview and production builds instead of GitHub Actions:

1. Connect the repository to Vercel and configure your environment variables (such as `REACT_APP_ADMIN_USERNAME` and `REACT_APP_ADMIN_PASSCODE`).
2. Push your branch to the remote—Vercel will automatically build previews for each branch or pull request.
3. Merge to your main branch to trigger the production deployment. Use the Vercel dashboard to monitor build logs and view the live site.
4. Route protection: `vercel.json` rewrites all routes (including `/admin` and blog slugs) back to `index.html` so the SPA router can load the Admin console without 404s on Vercel.

If you need to validate locally before a push, run `npm run build` to generate the production bundle and serve the `build` folder with any static file server.

## Updating resume and blog content

This site is content-driven so you can treat it like a lightweight CMS without touching React components:

- **Profile, experience, education, skills, and testimonials** are stored in `src/data/content.json`. Edit the JSON fields to update your name, roles, dates, and bullet points.
- **Blog posts** live in `src/blog/` as Markdown files with front matter. Use the existing posts as templates and include `title`, `date`, `summary`, and optional `tags` metadata.
- The latest three posts automatically surface on the homepage, and each post gets its own route at `/blog/<slug>`.

### Adding new blog posts

1. Create a new file like `src/blog/2025-07-new-topic.md`
2. Add front matter (`title`, `date`, `summary`, `tags`)
3. Use ISO-friendly dates (e.g. `2025-07-01`) so sorting works correctly
4. Commit the Markdown file — no code changes needed

### Admin console and login

- The admin console is available directly at `/admin`, even though the public portfolio hides all admin navigation links.
- Log in using credentials defined in:
  - `REACT_APP_ADMIN_USERNAME` (default: `admin`)
  - `REACT_APP_ADMIN_PASSCODE` (default: `admin123`)
- Set these environment variables in Vercel for both preview and production environments.

After login:
- Use the built-in editor to update `content.json`
- Validate and download the updated file
- Replace `src/data/content.json` and commit it
- View all live Markdown blog posts and their metadata in the admin UI

After editing content, run `npm start` for local preview or push to your Vercel-connected branch to validate changes in a preview build.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at http://localhost:3000

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production into the `build` folder

### `npm run eject`
⚠️ One-way operation. Use only if you need full control over build tooling.
