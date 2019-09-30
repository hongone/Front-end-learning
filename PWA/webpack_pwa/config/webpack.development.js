const CopyWebpackPlugin = require('copy-webpack-plugin');
const {join} = require('path');
module.exports ={
    entry : {
        app: './src/scripts/index.js'
    },
    output :{
        path: join(__dirname,'../dist/assets'),
        publicPath: '/',
        filename : "scripts/[name].bundles.js"
    },
    resolve: {
        extensions: ['.js']
    },
    plugins :[
        
    ]
}