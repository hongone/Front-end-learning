module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', {
            loader: 'css-loader',
            // options: {
            //   modules: true,
            //   localIdentName: '[name]__[local]--[hash:base64:5]'
            // }
          }]
        }
      ]
    }
  }