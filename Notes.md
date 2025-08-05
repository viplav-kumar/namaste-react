# 🗒️ Important Notes

---

## 🧠 Key Concepts / Learnings

- How do browser know about "document", "getElementById", "createElement", "innerHTML" etc?
  When you run JavaScript in the browser, it doesn't just run "pure JavaScript" — it runs JavaScript + Web APIs provided by the browser (Chrome, Firefox, etc.). JavaScript itself (as defined by the ECMAScript standard) does NOT define document, window, alert, or createElement(). These are provided by the browser as part of the "Web Platform APIs". The browser automatically gives your script access to a few built-in global objects: window, document, navigator, location etc. The document object comes from the DOM API, which the browser implements. These are not part of core JavaScript, but the browser provides them via the DOM API.

- Ways of injecting react into project: CDN Links in HTML page: CDN Links are the links where react code is hosted. It is a script tag with src having link/URL. This link has react code which is writtent in plain javascript language only and we know that react is a javascript library. So, when we import this file through CDN link, we are importing all of this react code into our project. So, now when your project/application loads in the browser you can check in browsers console, that now you got "React" object and many functions and methods as soon as your project loads because that file must be exporting "React" object. Similarly you can also see that you also get "ReactDOM" object. The reason we have these two links for two separate object and not a single file for both these because first link/file provides us the "Core React" or core file of react ecosystem while other link/file is "ReactDOM" which is for DOM manipulation and react does not only work on browsers, instead react also works on mobile phone via "React Native", react also has "React 3D" hence it is separated into different files for different environment. Now all core react functionality like creating element are being used through "Raect" object while for all DOM manipulation activity like creating root and rendering we do through "ReactDOM" object.

- Development and Production version CDN Links: We generally use development versions of CDN links of react for our project in development phase because this development version gives us many features like: Helpful Warnings, Error Messages, DevTools Support. And yes due to larger size it is slow to load as it is not minified version. While production CDN links are used when you are deploying your app for users. Benefits with the production versions are: Smaller size due to minified code, No Warnings as dev-only checks are removed to improve performance, better for slow networks or mobile due to fast loading but yes debugging is harder as there is no helpful error messages.

- crossorigin: The crossorigin attribute is used when the browser loads a script from a different origin (i.e., domain) than your website — this is called a cross-origin request. It controls how the browser should handle CORS (Cross-Origin Resource Sharing) for this request. Without crossorigin: The browser won’t send credentials (like cookies or headers). If there's an error in that external script, the browser won’t show full error details in the DevTools console. You’ll just get a generic “Script error” with no stack trace. While with crossorigin set the browser fetches the resource without cookies, but enables full error reporting (stack traces, etc.). This helps debug React errors from the CDN.

- DOM Manipulation: Any change in the webpage structure or html elements(nodes) via user interaction with logic, is referred as DOM(Document Object Model) manipulation. It is considered as the most heavy or expensive task and is performed by javascript only but managed very efficiently and smoothly by React and ReactDOM ecosystem.

- React.createElement(): It return an object, it basically creates a javascript object which is react element not any html element/tag yet. It takes 3 arguments with first being the type of element or name of the tag(like: div, span, h1, p etc), second being the attribute of the tag (like: id, key, className, style etc) which is an object ({} empty object for no attribute) and the third argument is the children which is basically the content inside the tag which can be a nested tag/elements or just the text and if there is multiple children tag or elements inside the parent tag then we pass it as a list([]).

- render(): ReactDOM.render() method basically takes react element(or javascript object) and creates an HTML element out of it and put it inside the DOM under provided element id(like root). Render function does not append the root element content instead it overrides or replaces. So if there is already any content present within the root element then first it will load in the browser and then later through react code specefically through ReactDOM.render() method it will be replaced by the content inside render method. But if you have anything above or below the root element or any content other than root element, then that will remain the same because react is having control over only one element (#root).

- To push a code or project into production it has to be ready and to make it ready for production we need to optimise it, remove all unecessary comments, console logs, unecessary empty spaces, we need to do a lot of processing like bundling, code splitting, chunking, image optimising, minificaton, compressing, scaling etc. hence we need to do a lot of things before pushing it to production. When we use npm or npx create-react-app it creates a scaffold which is already production ready. React alone does not makes an app fast or production ready, it involves other tools, packages and library(JS) that makes our code fast, scalable and production ready.

- NPM: Works as package manager behind the scene but its full form is not node package manager, its not even written anywhere in its official documentation. It is basically a standard repository for all packages. It's one of the biggest repository or package manager of all the libraries or utility. When we create react app through create-react-app which basically creates a scaffold, it(create-react-app) already has npm in it.

- Adding npm to project: command: npm init & then proceed with all steps --> final output: package.json file will be created and this package.json file is basically a configuration of our npm in json file/structure. Our project/app may need other packages throughout its development and also when finally it goes to production and these packages are also termed or referred as dependencies, so these packages or dependencies are managed by npm and npm manages it through package.json file by maintaining all dependencies along with their version, scripts and many other information/details.

- Bundler: When we have these html, css and js files, our whole code needs to be bundled together, minified, cached, compressed and cleaned before being sent to production and a bundler helps you do all these tasks, it bundles or packages your app/project so that it can be shipped to production. Bundler Example: Webpack, parcel, vite etc. create-react-app uses webpack as bundler and babel as transpiler under the hood.

- Difference between caret(^) & Tilde(~) in dependency version: Caret(^): Allows updates that do not change the leftmost non-zero digit. Meaning: Accept minor and patch updates, but not major. Example: "lodash": "^4.17.15", This allows versions: >=4.17.15 and <5.0.0 so, 4.17.21 is allowed (patch update), 4.18.0 is allowed (minor update) but 5.0.0 is not allowed (major update). Tilde(~): Allows only patch updates (bug fixes), but not minor or major updates. Slightly more restrictive. Example: "lodash": "~4.17.15" This allows versions: >=4.17.15 and <4.18.0 so, 4.17.21 is allowed (patch update) 4.18.0 is not allowed (minor update).

- Significance of package-lock.json: The package-lock.json file is critical for ensuring consistency and reliability in Node.js projects. Exact Dependency Versions: While package.json specifies version ranges (like ^1.2.3 or ~4.5.6), package-lock.json locks down the exact versions of every package (and its sub-dependencies). It Ensures that everyone on your team, as well as your production builds, uses the same versions of dependencies. Faster Installs: It contains a full dependency tree with resolved versions and URLs, so: npm doesn’t need to re-resolve all versions. Installations are faster and deterministic. Reproducible Builds: You get the exact same environment every time, even on different machines or CI/CD systems. No surprises like: “It works on my machine but not in production.” Dependency Tree Tracking: It tracks: Nested dependencies (what each package depends on), Resolved URLs, Integrity hashes (to validate integrity of installed packages). Helps with Audits and Security: Tools like npm audit use package-lock.json to: Check actual installed versions, Identify known vulnerabilities, Suggest appropriate upgrades. Always commit it for: Apps, Projects with reproducible builds.

- Difference between package.json & package-lock.json:
  package.json(): It's purpose is to Lists project metadata and dependencies, for versioning it uses version ranges (^, ~), manually created/edited by developers, used by developers and npm to declare intent, should be committed to GIT, it defines what can be installed, it is not used directly for security audits.
  package-lock.json(): It's purpose is to lock exact versions of all (including nested) packages, it stores information about exact versions installed of a package, it is auto-generated by npm, is used by npm to ensure consistent installs, it should also be committed to GIT, it defines what will be installed, and is used by npm for security audit.

- Transitive Dependencies: Transitive dependencies are dependencies of your dependencies — packages that your direct dependencies rely on, but that you didn’t explicitly install. Let's say you have installed "express" via package manager, so express is a direct dependency. But express itself depends on other packages like body-parser, cookie, etc so, These packages are transitive dependencies to you — because you didn't install them directly, but they’re still required for your project to run. Transitive dependencies get installed automatically by package managers (like npm or yarn). Bugs, vulnerabilities, or version conflicts in transitive dependencies can affect your app, even if your direct dependencies are fine. Tools like npm audit scan transitive dependencies for known vulnerabilities.

- There can be multiple **package.json** and **package-lock.json** file within a node project/app. Each dependencies/package may or may not have their own set of dev dependencies and dependencies. And if any dependencies/package has other packages as their dependencies then they will have their own package.json and package-lock.json. Let's say we have installed "A" package via npm as a dependency of our project, but "A" package needs "B" package as its dependency and "B" package needs "C" package as its dependency and so on..so, this will create a dependency tree also known as transitive dependencies. That is why node modules are usually so big with lots of packages/libraries. Do not put any such thing on **git** which can be regenerated like **node_modules** folder because using package.json and package-lock.json we can regenerate the exact same node_modules folder by **npm install** command.

- Using React library from CDN links into projects is not a preferred way due to many resons:
  - Because using react through cdn links is considered an expensive or heavy task because now our project/app makes a request or network call to the domain/url where react is hosted.
  - Another issue is that we have to keep changing the url if there's any update in React package.
- Best/Preferred way: Install React from npm into your project and have react package as a dependency into package.json and all its code in node_modules.

- type="module" in the script tag while importing javascript file in html file means telling browser that this files of module type, not the expected browser's script or normal javascript file. Because if we do not mention type="module" it will throw an error on browser that: Browser scripts cannot have imports or exports. Because normal javascript does not have imports and exports.

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

- **HMR(Hot Module Replacement)**: Automatically refreshing our page after saving the changes by reading all the files for changes. It is a feature provided by modern bundlers like Webpack, Vite, Parcel, etc., that allows you to: Update modules in a running application without a full page reload. Although it is used only for development purpose not used in production builds. HMR is designed to improve the developer experience — for fast feedback and preserving app state during changes.

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

- npx parcel index.html: This command means we are executing npm package parcel and giving index.html as source file.
  This command will create a development build of our project and will run it on https://localhost:1234.

- DOM Element: All HTML element are DOM element. React Element: Equivalent to DOM element but it is not an actual HTML element instead it is an object(Javascript Object) and gets converted to actual OOM/HTML Element when it is rendered to DOM. ReactDOM.render method takes this javascript object created from React core library and converts it into an HTML/DOM element and pushes it to browser/DOM. ReactDOM.render method replaces everything in the root element of the DOM with the content or element we have passed into the render method.

- JSX: It helps us write HTML or XML like (but not actual HTML or XML) syntax within javascript. JSX (JavaScript XML) is a syntax extension for JavaScript. JSX is JavaScript, Not Markup. JSX is more powerful because you can embed logic, variables, expressions, and even dynamic rendering. It is not part of React fundamentals. It was integrated with react or react supports JSX just to make it easier to create react elements using HTML syntax hence making it more understandable and convinient for developers. HTML != JSX != React. Treat JSX just as a syntactic sugar over React.createElement method syntax, JSX syntax gets converted into React.createElement method output under the hood which is a JavaScript object.

- Initial approach of web development: Separate HTML files with all skeleton, JavaScript file for logic and operations on those HTML elements and CSS file for styling those HTML elements. Current modern web technologies include library and frameworks which has merged all these different syntax file into one format/type of file.

- Any javascript piece of code than can be understood by JS Engines are considered as valid javascript code but JS Engines does not understand JSX. Hence JSX is not a pure javascript code. JS Engines only understands ECMAScript(ES6). But still our JSX code is getting compiled and running perfectly fine in browsers without any errors is because of Parcel. Parcel with the help of Babel is transpiling/converting our JSX code into ECMAScript (ES6) before pushing it to JS Engine. So JS Engine still getting the code which browsers can understand even after using JSX and its possible only because of babel transpilation/conversion of our code. How JSX HTML like but actual HTML, because in JSX we give attribute to any tag in camel case, we do not use '-'. For example: 'class' attribute in HTML is written as 'className' in JSX, 'tabindex' in HTML is written as 'tabIndex' in jSX, 'for' in HTML is written as 'htmlFor' in JSX and many more. 'class' and 'for' are reserved keyword in JavaScript.

- React Functional Component: A normal JavaScript function that returns JSX or that returns a React element.
  Some important things to keep in mind while writing & using React Functional Components are: 1.) Capitalize the name of the functional component, 2.) Make sure to pass the functional component name as a custom tag by using angular brackets to the render function because only then babel will get to know that it is a JSX or any custom react component, you can use either self-closing tags or combination of opening and closing tags, you can also call the function within the render function because render function expects the JSX or HTML tags, so even calling function(react functional component) inside render works because anyway our function returns the JSX only.

- Component Composition in React? : Component Composition is the practice of building complex UIs by combining smaller, reusable components. Suppose you have smaller, reusable component 'Header' and 'Footer' and you have created another component called 'Layout' and have used 'Header' & 'Footer' in it, so now this process of using smaller and reusable component to create another large/complex component is called component composition in react.

- JSX also prevents cross site scripting attacks. Whenever we use '{}' curly braces to load any piece of javascript within our component, so JSX sanitizes the data before using it in the webpage to prevent any malicious script from loading and executing. Let's say we are using any javascript data within our component and lets say this data is being fetched from an API, and attackers passes any piece of JS code in response, so if JSX does not sanitizes the data before it being used so we might expose local storage, session storage, cookies any many other important information about our system which can lead to security lapse and we an fall prey to cyber attacks.

- React Project Based Learning: Creating food ordering app.
  Planning of Layout/Design/Mockup: The first and foremost important thing, do not directly jump into writing code.
  - Components of food ordering app:
    - Header: Logo, Navigation Menu Items(Location, Search Restaurant), Profile, Cart.
    - Body: Food Option Selector, Brand Options Selector, Restaurant Container(Restaurant Card).
    - Footer: Logo, Copyright, Links, About, Address, Contacts, Social Links, Country and Language Selection, App

---
