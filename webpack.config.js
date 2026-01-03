const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
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
    clean: true, // supprime le contenu précédent de dist à chaque build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // toutes les images vont dans dist/images
        },
      },
    ],
  },
  plugins: [
    // HTML pages
    new HtmlWebpackPlugin({ filename: "index.html", template: "./src/index/index.html", chunks: ["main1"] }),
    new HtmlWebpackPlugin({ filename: "contact.html", template: "./src/index/contact/contact.html", chunks: ["main2"] }),
    new HtmlWebpackPlugin({ filename: "meditation.html", template: "./src/index/meditation/meditation.html", chunks: ["main3"] }),
    new HtmlWebpackPlugin({ filename: "osteopathie.html", template: "./src/index/osteopathie/osteopathie.html", chunks: ["main4"] }),
    new HtmlWebpackPlugin({ filename: "medecine-rythmique.html", template: "./src/index/medecine-rythmique/medecine-rythmique.html", chunks: ["main5"] }),
    new HtmlWebpackPlugin({ filename: "qui-suis-je.html", template: "./src/index/qui-suis-je/qui-suis-je.html", chunks: ["main6"] }),

    // Copie des fichiers statiques
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "" }, // tout le contenu de public/ va dans dist/
      ],
    }),

    new CleanWebpackPlugin(),
  ],
  stats: "maximal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: true,
    static: path.resolve(__dirname, "dist"),
    watchFiles: ["./src/**"],
    port: 4002,
    hot: true,
  },
};
