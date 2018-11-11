const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {join} = require('path');
module.exports = {
    output: {
        path: join(__dirname,'./dist/assets'),
     //   filename: "scripts/[name].[hash:5].bundles.js",
        filename: "scripts/[name].[contenthash:5].bundles.js",
     
        //公司的CDN
        publicPath: '/'
    },
   
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ]
}
