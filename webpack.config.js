const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: {
      test: "/.(j|t)sx$/",
      exclude: /node_modules/,
      use: "babel-loader",
    },
  },
};
