This is setting up a react webpack-dev server from scratch without create-react-app 

Based off https://javascript.plainenglish.io/create-a-react-app-from-scratch-in-2021-8e9948602e9c

Initial install:
 
    npm i webpack babel-loader @babel/preset-react @babel/core babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D 

    npm i react react-dom -S

* Create a ./src directory with index.html and index.js
* Copy [webpack.config.js](webpack.config.js) into project root
* index.js gets inserted into index.html
* import styles.css from in index.js like a module, it gets included into index.html

Running:

    npx webpack serve --config webpack.config.js
    http://localhost:8080

