# Learn React
 Interactive lessons from https://scrimba.com/learn/learnreact/

## Windows dev setup:
VS Code: https://code.visualstudio.com/Download

Install the VSCode Extension 'Live Server' to easily test in browser. This works if you are using CDNs (unpkg) for React and Babel.  For example:

    <html>
    <head>
        <link rel="stylesheet" href="index.css">
        <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script src="index.js" type="text/babel"></script>
    </body>
    </html>

The above will work by relying on CDNs to serve precompiled javascript libraries, and transpiles your JSX into javascript in the browser.  It is not sutible for production, but it saves you the headache of learning the whole dev toolchain (Babel, Webpack, Expres.js) Lessions 1-5 of in this repo do things that way.

The middle ground between CDNs and setting it all up from scratch would be using create-react-app which sets all those up with react-scripts that just tees off with a simple 'npm start' command.  It has thousands of packages and uses 250MB+ of node modules. 

The Learn React course doesn't use create-react-app, it is purely React and relies on Scrimba (online sandbox) to do it all for you.  I didn't want to use Scrima and wanted to set up local developement.  In order to do that the following steps are taken:

### Node JS
Install NVM for Windows: https://github.com/coreybutler/nvm-windows/releases

Open a new CMD prompt *as Administrator* and type 

    nvm install lts
    nvm use lts
    powershell set-Executionpolicy Remotesigned

Restart VS Code as Administrator. 

Open VSCode terminal (Powershell) with Ctrl+`
Now you should have node, npm, nvm commands available.

    npm install react
    npm install react-dom

This will create your node_modules folder, package.json and package-lock.json.

Add node_modules to .gitignore

### Setup JSX transpiler manually
'npm install --save-dev @babel/core @babel/cli'
'npx babel --version' and you should see something >7.18.9
Open a terminal and run:
npx babel "*/src/*.js" --out-dir ../lib  --relative --plugins transform-react-jsx --verbose --watch

### Setup Webpack Dev Server manually
see [/my-app-from-scratch/README.md](/my-app-from-scratch/README.md)
