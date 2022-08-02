This is setting up a react webpack-dev server from scratch without create-react-app 

Based off https://javascript.plainenglish.io/create-a-react-app-from-scratch-in-2021-8e9948602e9c

initial install:
 
    npm i webpack babel-loader @babel/preset-react @babel/core babel-preset-react html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties webpack-cli -D 

    npm i react react-dom -S

running:

    npx webpack serve --config webpack.config.js
