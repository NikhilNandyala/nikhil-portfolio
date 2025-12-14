# Portfolio overview

This repository powers the **nikhilnandyala | Portfolio** single-page app. The site presents a professional resume-style profile, highlights recent blog posts, and keeps a hidden admin console at `/admin` for authenticated edits. The public navigation keeps the CMS entry point out of sight while still allowing direct access when you know the URL.

## Deploying with Vercel

The project is set up to deploy through Vercel, so you can rely on Vercel’s preview and production builds instead of GitHub Actions:
 
2. Push your branch to the remote—Vercel will automatically build previews for each branch or pull request.
3. Merge to your main branch to trigger the production deployment. Use the Vercel dashboard to monitor build logs and view the live site.
4. Route protection: `vercel.json` rewrites all routes (including `/admin` and blog slugs) back to `index.html` so the SPA router can load the Admin console without 404s on Vercel.

If you need to validate locally before a push, run `npm run build` to generate the production bundle and serve the `build` folder with any static file server.

## Updating resume and blog content

This site is content-driven so you can treat it like a lightweight CMS without touching React components:

- **Profile, experience, education, skills, and testimonials** are stored in `src/data/content.json`. Edit the JSON fields to update your name, roles, dates, and bullet points.
 
- After login, use the built-in editor to update `content.json`, validate the JSON, and download the updated file. Replace `src/data/content.json` with the downloaded version before committing.
- The admin console also lists every Markdown blog post in `src/blog/` so you can see which slugs, dates, and tags are live.

After editing content, run `npm start` for local preview or push to your Vercel-connected branch to validate changes in a preview build.
 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
