## Next.js Starter Kit

Up and running with [ZEIT's Next.js framework for server-rendered React apps](https://github.com/zeit/next.js), Tachyons CSS framework, ESlint and JavaScript Standard Style, Jest and Microsoft Visual Studio Code.

### Contents

* `react`, `react-dom`: [Facebook's JavaScript UI library](https://github.com/facebook/react)
* `next`: [ZEIT's framework for server-rendered React apps](https://github.com/zeit/next.js)
* `Tachyons`: [atomic CSS components framework](http://tachyons.io)
* `eslint`: [Pluggable linting utility for JavaScript and JSX](https://eslint.org)
* `eslint-config-standard-react`: [ESLint config for React/JSX support in JavaScript Standard Style](https://github.com/standard/eslint-config-standard-react#eslint-config-standard-react----)
* `flow`: [Facebook's static type checker for JavaScript](https://flow.org)	
* `jest`: [Facebook's JavaScript code testing platform](https://facebook.github.io/jest/)
* `classnames`: [Jed Watson's JavaScript utility for conditionally joining class names together](https://github.com/JedWatson/classnames)


### Installation
1. Get the latest version:
```bash
$ git clone -o nextjs-starter-kit -b master --single-branch \
      https://github.com/ajaykurien/nextjs-starter-kit.git MyNextApp
$ cd MyNextApp
```
2. Install the project dependencies and the developer tools specified in `package.json`

```bash
$ npm install
```
3. Start Next.js' dev server at `http://localhost:3000`
```bash
$ npm run dev
```
4. Follow the documentation at [ZEIT/Next.js](https://github.com/zeit/next.js/blob/master/readme.md#setup) to add pages, static files, JavaScript modules and React components to build your universal app or static site.
	* Create `next.config.js` file and [customise Next.js' behaviour](https://github.com/zeit/next.js/blob/master/readme.md#custom-configuration).
	* Create `now.json` and [configure the app's deployment](https://github.com/zeit/now-cli#project-configuration) on [now](https://zeit.co/now)

---


#### Tools, plugins, set-up and commands...

*(Information only: the following is an aide de memoire for me; please follow the **Installation** instructions above)*

#### Tool setup
* [Microsoft Visual Studio Code](https://code.visualstudio.com), plus plugins:
	- [X] [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) automatically adds closing HTML & XML tags.
	- [X] [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) automatically renames pairs of HTML & XML tags.
	- [X] [npm support for VS Code](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) validates installed `npm` modules against the dependencies specified in `package.json`.
	- [X] [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)	autocompletes names of npm modules in `import` statements.
	- [X] [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) debug JavaScript code running in Google Chrome from inside VS Code.
	- [X] [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) integrates ESLint into VS Code
	- [X] [ES7 React/Redux/React-Native/JS snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) snippets in ES7 for Javascript and React/Redux, with `babel-plugin` features.
	- [X] [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) adds [Flow](https://flow.org)	support.
	- [X] [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) automatically generates detailed JSDoc comments for both TypeScript and JavaScript files.
	- [ ] [exports autocomplete](https://marketplace.visualstudio.com/items?itemName=capaj.vscode-exports-autocomplete) collects ES6 exports from your project and autocompletes them.
	

#### Set up working directory and git repo:

```bash
$ mkdir MyNextJSApp && cd $_
$ git init
$ touch .gitignore
$ git add *
$ git commit -m "Initialised repo."
```
#### Initialise a new project:

```bash
$ npm init
```

#### Install production libraries:
```bash 
$ npm install next react react-dom classnames
```
#### Add `flow`...
```bash
$ npm install -D flow-bin eslint-plugin-flowtype
$ flow init
```
#### plus [Flow type annotations for Zeit/Next.js](https://github.com/zeit/next.js/tree/master/examples/with-flow):	
```bash
$ mkdir types
$ curl "https://raw.githubusercontent.com/zeit/next.js/master/examples/with-flow/types/next.js.flow" > types/next.js.flow
```
#### Add some entries to `.flowconfig`...
```javascript
[libs]
types/
```
#### and in `.babelrc`:
```javascript
{
  "presets": ["next/babel"],
  "plugins": ["transform-flow-strip-types"]
}
```

#### Install and configure linters:
```bash 
$ npm install -D eslint babel-eslint babel-plugin-transform-flow-strip-types eslint-config-standard eslint-config-standard-react eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```
#### Configure the newly-created `eslintrc.js`:
```javascript
module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  plugins: ['react', 'flow'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'] // follow Facebook's convention for double quotes in JSX attributes.
  }
}
```

#### Install and configure Jest test framework:
```bash
$ npm install -D jest
```

#### Set up Zeit/Next.js  [(instructions)](https://https://github.com/zeit/next.js#how-to-use):
* Create folders for pages (required), static files, site-wide utilities, and React components:
```bash 
$ mkdir pages static lib components config
$ touch pages/.gitkeep static/.gitkeep lib/.gitkeep components/.gitkeep config/.gitkeep
```
* Create the main entry point and a custom wrapper for common page elements:
```bash 
$ touch pages/index.js pages/_document.js
```
* Add the core HTML that will appear on every page, including the [Tachyons](http://tachyons.io) CSS library:
```javascript
/* pages/_document.js */
import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

```
---
## TODO
- [ ] Automate the setup process, inspired by [segmentio/create-next-app](https://github.com/segmentio/create-next-app): 
	- [ ] Use [`Inquirer.js`](https://github.com/SBoudrias/Inquirer.js) and [`merge-config`](https://www.npmjs.com/package/merge-config) in npm `postinstall` scripts to take command line arguments and customise the setup.