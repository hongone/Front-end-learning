const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    output: {
     //   filename: "scripts/[name].[hash:5].bundles.js",
        filename: "scripts/[name].[contenthash:5].bundles.js",
     
        //公司的CDN
        publicPath: '/'
    },
    // optimization : {
    //     minimizer:[
    //     ]
    // },
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
