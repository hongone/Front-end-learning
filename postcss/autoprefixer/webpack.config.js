const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 
          {
            loader: MiniCssExtractPlugin.loader
          },
          { 
            loader: 'css-loader', options: { importLoaders: 1 } 
          },
          'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
}