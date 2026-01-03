const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    // main
    main1: path.join(__dirname, "src/index/index.js"),
    main2: path.join(__dirname, "src/index/contact/contact.js"),
    main3: path.join(__dirname, "src/index/meditation/meditation.js"),
    main4: path.join(__dirname, "src/index/osteopathie/osteopathie.js"),
    main5: path.join(__dirname, "src/index/medecine-rythmique/medecine-rythmique.js"),
    main6: path.join(__dirname, "src/index/qui-suis-je/qui-suis-je.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index/index.html",
      chunks: ["main1"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/index/contact/contact.html",
      chunks: ["main2"],
    }),
    new HtmlWebpackPlugin({
      filename: "meditation.html",
      template: "./src/index/meditation/meditation.html",
      chunks: ["main3"],
    }),
    new HtmlWebpackPlugin({
      filename: "osteopathie.html",
      template: "./src/index/osteopathie/osteopathie.html",
      chunks: ["main4"],
    }),
    new HtmlWebpackPlugin({
      filename: "medecine-rythmique.html",
      template: "./src/index/medecine-rythmique/medecine-rythmique.html",
      chunks: ["main5"],
    }),
    new HtmlWebpackPlugin({
      filename: "qui-suis-je.html",
      template: "./src/index/qui-suis-je/qui-suis-je.html",
      chunks: ["main6"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/images/*",
          to: "src/assets/images/[name][ext]",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  stats: "maximal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: true,
    static: path.resolve(__dirname, "./dist"),
    watchFiles: ["./src/**"],
    port: 4002,
    hot: true,
  },
};
