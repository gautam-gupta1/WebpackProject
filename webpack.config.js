const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
      path: path.join(__dirname,'/dist'),
      filename : "bundle.js"

    },
    plugins :[new HTMLWebpackPlugin()],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
           
          },
          {
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.tsx?$/,
            use: {
              loader: 'babel-loader',
              options:{
                
                presets: ["@babel/preset-env", "@babel/preset-typescript"]
              
              }
            },
            exclude: /node_modules/,
          },
         
        ]
      }

    }