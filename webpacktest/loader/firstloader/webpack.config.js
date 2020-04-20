const path = require('path');
const webpack = require('webpack');
module.exports={
    entry :{
        'index' : './src/app.js'
    },
    output :{
        path : path.join(__dirname,'./dist/'), 
        publicPath : './',  //在全部的资源引用前面加路径
        filename : 'scripts/[name]-[hash:5].bundle.js'
    },
    module :{
        rules :[{
            test : /\.js$/,    //匹配 ，正则测试后缀是否符合,用于标识出应该被对应的 loader 进行转换的某个或某些文件。
            use : [{
                loader : 'first-loader',
                options :{
                   test: 'amass'
                }
            }]
        }]
    },
    resolveLoader: {
        // 告诉 webpack 该去那个目录下找 loader 模块
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    plugins :[
    ]
}