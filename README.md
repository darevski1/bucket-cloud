# React project setup



[gist](https://github.com/darevski1/bucket-cloud)
 
 

## Getting Started
    - npm init
Create folder structure
    src/index.js
    public/index/html

Install React & React Dom
    npm i react react-dom

Install Babel
    npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react

Create file .babelrc
    {
     "presets": [
         "@babel/env", 
         "@babel/preset-react"
         ]
    }

Install webpack
    npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2

Create new file webpack.config.js
    const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

Create App component 

    import React from 'react';
    const App = () => {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
            </div>
        )
    }
    export default App;
