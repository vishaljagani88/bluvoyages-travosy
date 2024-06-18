// webpack.config.js
module.exports = {
  // other configurations...
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              // Add any specific options you need
            },
          },
        ],
      },
      // other rules...
    ],
  },
};
