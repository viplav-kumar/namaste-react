# 🗒️ Important Notes

---

## 🧠 Key Concepts / Learnings

- Using React library from CDN links into projects is not a preferred way due to many resons:
  - Because using react through cdn links is considered an expensive or heavy task because now our project/app
    makes a request or network call to the domain/url where react is hosted.
  - Another issue is that we have to keep changing the url if there's any update in React package.
- Best/Preferred way: Install React from npm into your project and have react package as a dependency into
  package.json and all its code in node_modules.

- type="module" in the script tag while importing javascript file in html file means telling browser that this file
  is of module type, not the expected browser's script or normal javascript file. Because if we do not mention type="module" it will throw an error on browser that: Browser scripts cannot have imports or exports. Because normal javascript does not have imports and exports.

- No need to use **main: App.js** in package.json file while using parcel as bundler because it denotes entry point but we give entry point during build command with parcel which is basically index.html.

- **Parcel Job**: Parcel as a bundler does a lot of things for us in our project like:

  - Building our code.
  - Bundling.
  - Image optimization.
  - Minification of files.
  - compressing all files.
  - HMR (Hot Module Replacement)
  - Faster Builds by using caching mechanism.
  - creating a local/dev server.
  - Consistent Hashing.
  - Code Splitting.
  - Lazy Loading.
  - Tree Shaking - removing unused or unecessary codes.
  - Differential Bundling - supporting older browsers, transforming into no-module script.
  - Diagnostic.
  - Error Handling.
  - HTTPS Mode Support.
  - Different dev and prod build bundles.

  - HMR is done by using File Watching Algorithm (written in c++), implements faster builds by using caching mechanism and it caches our project files into **.parcel_cache** folder in the form of binary file and this caching makes subsequent builds faster.

- **HMR(Hot Module Replacement)**: Automatically refreshing our page after saving the changes by reading all the files for changes.
  It is a feature provided by modern bundlers like Webpack, Vite, Parcel, etc., that allows you to: Update modules in a running
  application without a full page reload. Although it is used only for development purpose not used in production builds.
  HMR is designed to improve the developer experience — for fast feedback and preserving app state during changes.
  **HMR is useful in many ways**:

  - Faster Development: Only the changed code is reloaded — not the entire page.
  - Preserves State: Unlike a full reload, your app state (e.g., form inputs, Redux store, component state) stays intact.
  - Improved Productivity: You see changes instantly, which makes debugging and UI tweaking much smoother.
    **Workflow of HMR (Simplified Flow)**:
  - You save a file (e.g., App.js)
  - The bundler detects the change
  - It recompiles just that module
  - The browser receives the updated module
  - That specific module is replaced in the app, without reloading the page
    **Why HMR is not used in production**:
  - Performance Cost: HMR adds extra logic, metadata, and WebSocket connections to track module changes — which are unnecessary and inefficient in production.
  - Production Builds Are Static: Production builds are optimized, bundled once, and typically served as static files from a CDN or server. These files don’t change after deployment.
  - Security & Stability: Automatically swapping code at runtime in production could introduce instability, bugs, or vulnerabilities.

- Production build takes more time than dev builds because production builds are highly optimized, minified, compressed and hence is higly performant.

- If we have enough resources to rebuild/recreate anything in our project/app then we do not push such things generally files and folders to github. For Example: We have package.json and package-lock.json as an enough necessary/required resources for rebuilding/recreating dist(build) folder and parcel-cache(for parcel as a builder) folder hence we keep these two folders name under .gitignore so as to ignore git from pushing it to github.

- browserlist (support for old browsers): It is an npm package and we need to do some configuration in package.json of our project/app where we mention different browsers to make our project compatible with. So we add "browsersList" in our package.json and add different supported keywords like: "last 2 version", "last 2 versions of chrome", "last 2 versions of firefox", "last 10 versions" and we add different set of keywords in form of string in an array, so the value of browsersList key is array of strings, but make sure to right the most suitable, efficient and sufficient keywords because due to this your build file might become heavy due to extra added packages just to make your app compatible with older browsers. So use it wisely and smartly and keep your app lightweight. browserslist can also target user specefic to certain locations (generally country specefic), based on device type.

---
