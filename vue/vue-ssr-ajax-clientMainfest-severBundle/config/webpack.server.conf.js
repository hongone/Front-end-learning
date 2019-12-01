const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const base = require('./webpack.base.config');


module.exports = merge(base, {
    target: 'node',
    devtool: '#source-map',
    entry: {
        server: path.resolve(__dirname, '../src/entry-server.js')
    },

    output: {
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    plugins: [    
        new VueSSRServerPlugin(),
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, '../src/index.ssr.html'),
            filename: 'index.ssr.html',
            files: {
                js: 'client.bundle.js'
            },
            //不要在index.ssr.html中引入打包出的server.bundle.js，要引为浏览器打包的client.bundle.js
            // 是为了让Vue可以将服务器吐出来的html进行激活，从而接管后续响应
            excludeChunks: ['server']
        }),
      
        
    ]
});