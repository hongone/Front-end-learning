const CopyWebpackPlugin = require('copy-webpack-plugin');
const {join} = require('path');
module.exports ={
    output :{
        path: join(__dirname,'../dist/assets'),
        publicPath: '/',
        filename : "scripts/[name].bundles.js"
    },
    resolve: {
        //  第一项空字符串必不可少，否则报模块错误
        extensions: ['.js']
    },
    plugins :[
        
    ]
}