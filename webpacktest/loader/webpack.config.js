const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
            test : /\.es6$/,    //匹配 ，正则测试后缀是否符合,用于标识出应该被对应的 loader 进行转换的某个或某些文件。
            use : [{
                loader : 'babel-loader',
                options :{
                   // 'presets' : ['es2015','stage-0']
                   //module:false就不会对es6的语法（诸如:import）进行转换了
                   'presets' : [['es2015',{'modules': false}],'stage-0']
                }
            }]
        },
        {
            test :/\.less$/i,
            //use : [{}]
            use : ExtractTextPlugin.extract({
                fallback : 'style-loader',
                use :[{loader : 'css-loader'},
                    {loader : 'less-loader'}]
     
			
            })
        },
        {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: [{
                loader :'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                  }
        }]
        }]
    },
    resolveLoader: {
        // 告诉 webpack 该去那个目录下找 loader 模块
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    plugins :[
        new ExtractTextPlugin('styles/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'scripts/[name].js',
            minChunks : 2  //最少两次引用相同的js代码
        }),
        //压缩会做 treeShaking
        new webpack.optimize.UglifyJsPlugin({
            compress :{
                warnings : true
            },
            output : {
                comments : false
            },
            sourceMap : false
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            filename : 'index.html', //以output的目录为基准
            template : './src/index.html',
            inject :true
        })
    ]
}