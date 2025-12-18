# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
# trikania-music
# trikania-music
# trikania-music

## Deploying with AWS Amplify (CI/CD)

1) **Connect repo**: In the Amplify Console, choose “New app → Host web app”, pick your Git provider/branch, and point it at this project root.
2) **Build settings**: `amplify.yml` in the repo already tells Amplify to `npm ci` then `npm run build`, publishing the `build/` folder.
3) **Environment variables** (Amplify Console → App settings → Environment variables):
   - `REACT_APP_BASE_URL` (your deployed API URL, e.g., `https://api.example.com`)
   - `REACT_APP_STRIPE_PUBLIC_KEY` (live publishable key for production)
   - `REACT_APP_STRIPE_TEST_KEY` (optional; only used in dev)
   Do **not** add any `sk_...` secret keys to the frontend; those belong only on your backend.
4) **Backend/API**: Deploy your server separately (e.g., AWS Elastic Beanstalk, ECS/Fargate, or Lambda/API Gateway) and enable CORS for your Amplify domain. Configure your server with `STRIPE_SECRET_KEY`, DB creds, and other secrets.
5) **Custom domain/HTTPS**: Attach your domain in Amplify Console; it will provision ACM certs automatically.
6) **Test**: After Amplify builds, verify login/register, checkout (with Stripe test mode if applicable), wishlist, and other flows against your deployed API.

For local dev, use a `.env` file with your test publishable key and local API URL, then restart `npm start` after changes.
