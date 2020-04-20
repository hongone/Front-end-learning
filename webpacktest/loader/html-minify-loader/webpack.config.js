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
      rules: [{
        test: /\.html$/,
        use: ['html-loader',
          {
            loader: 'html-minify-loader',
            options: {
              comments: false
            }
          } 
        ] // 处理顺序 html-minify-loader => html-loader => webpack
      }]
    },
    resolveLoader: {
        // 告诉 webpack 该去那个目录下找 loader 模块
        modules: [path.resolve(__dirname, 'loaders'), 'node_modules']
    },
    plugins :[
    ]
}