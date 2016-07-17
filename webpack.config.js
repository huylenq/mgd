var path = require('path');

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "./dist/bundle.js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
  },

  module: {
    loaders: [
      // https://gist.github.com/mjackson/ecd3914ebee934f4daf4
      { test: /\.json$/, loader: "json" },

      { test: /\.ts$/, loader: "ts-loader" }
    ],

    preLoaders: [
      // !!! Doesn't work along with 'browserify transforming'
      // { test: /\.js$/, loader: "source-map-loader" }
    ],

    postLoaders: [
      // https://gist.github.com/mjackson/ecd3914ebee934f4daf4
      {
        include: path.resolve(__dirname, "node_modules/pixi.js"),
        loader: "transform?brfs"
      }
    ]
  }
};
