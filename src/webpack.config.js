// webpack.config.js
const path = require("path");

module.exports = {
  // Các cấu hình khác...
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      // Các rules khác...
    ],
  },
};
