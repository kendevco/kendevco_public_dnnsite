const path = require("path");

module.exports = {
  entry: "./src/js/index.js", //location of your main js file
  output: {
    path: path.resolve(__dirname, "../"),
    filename: "bundle.js", // where js files would be bundled to,
    library: "dnnsfDateFns",
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //using regex to tell babel exactly what files to transcompile
        exclude: /node_modules/, // files to be ignored
        use: {
          loader: "babel-loader", // specify the loader
        },
      },
    ],
  },
};
