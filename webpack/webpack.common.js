const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/main.ts"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new CopyPlugin([{ from: "assets", to: "assets" }]),
    new HtmlWebpackPlugin()
  ]
};
