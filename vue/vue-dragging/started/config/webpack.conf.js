const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log(path.resolve(__dirname, '../dist'))

module.exports = {
    // mode: 'development',

    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader', 'postcss-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(ttf|woff)$/,
                use: 'file-loader'
            }
        ]
    },

    plugins: [    
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: 'styles/[name].css'
        }),
        
    ]
}