const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    plugins :[
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: 'src/index.html'
          })

    ]
}