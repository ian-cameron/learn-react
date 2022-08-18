const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
mode: "development",
devServer: {
  static: { 
    directory: path.resolve(__dirname, './assets')//, 
    //publicPath: '/assets'
  }
},
  module: {
    rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader"
   }
 },
 { test: /\.(gif|png|jpe?g)$/,
 use: [
   {
     loader: 'file-loader',
     options: {
       name: '[name].[ext]',
       outputPath: './'
     }
   }
 ]},
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  }
]},
 plugins: [htmlPlugin]
};
