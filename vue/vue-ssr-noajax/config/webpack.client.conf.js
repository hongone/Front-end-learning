const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');
console.log(path.resolve(__dirname, '../dist'))

module.exports = merge(base, {
    // mode: 'development',

    entry: {
        client: path.resolve(__dirname, '../src/entry-client.js')
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    plugins: [    

        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, '../src/index.html'),
            filename: 'index.html'
        }),
      
        
    ]
});