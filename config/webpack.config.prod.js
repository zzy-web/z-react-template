const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/component/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "../build"),
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin((percentage, message, ...args) => {
      if (percentage == 1) {
        console.log(111);
        console.log(message, ...args);
        console.log(111);
        //copy files
      }
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
};
