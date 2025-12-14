# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Checking the site after pushing to GitHub

Pushing this repository to GitHub will automatically run a CI workflow that installs dependencies, runs the tests, builds the production bundle, and uploads the `build` folder as an artifact. To verify the site after a push:

1. Push the branch to GitHub.
2. Open the **CI** workflow run for that commit.
3. Download the `build-artifact` to review the static site locally or publish it to GitHub Pages or any static host.

The same steps can be used to validate PRs before merging.

## Updating resume and blog content

This site is content-driven so you can treat it like a lightweight CMS without touching React components:

- **Profile, experience, education, skills, and testimonials** are stored in `src/data/content.json`. Edit the JSON fields to update your name, roles, dates, and bullet points.
- **Blog posts** live in `src/blog/` as Markdown files with front matter. Use the existing posts as templates and include `title`, `date`, `summary`, and optional `tags` metadata. The latest three posts automatically surface on the homepage, and each post gets its own route at `/blog/<slug>`.
- **Adding new posts**: create a new file like `src/blog/2025-07-new-topic.md` with front matter, and the site will include it without code changes. Ensure dates are ISO-friendly (e.g., `2025-07-01`) so sorting works correctly.

After editing content, run `npm start` for local preview or commit and push to trigger the CI build to verify the output.

## Pushing this repo to GitHub from the container

If you want to push the current branch from this environment to your GitHub repository:

1. Add your GitHub remote once (replace placeholders):
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   ```
2. Confirm the branch you want to push (for example, `work`):
   ```bash
   git branch --show-current
   ```
3. Push the branch to GitHub:
   ```bash
   git push -u origin <branch-name>
   ```
4. Open the **Actions** tab in your repository to watch the CI workflow run. Download the uploaded `build-artifact` to preview the static site locally or publish it to a host like GitHub Pages.

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
