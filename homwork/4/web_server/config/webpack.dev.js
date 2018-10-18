const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Manifest= require('webpack-manifest');
//const pkg =require('./package');
module.exports = {
  entry: {
    // 合成文件
    index: [
      path.join(__dirname, '../src/public/javascript/praisebutton.es6'),
      path.join(__dirname, '../src/public/javascript/utilty.es6')
    ],
    tag: [
        path.join(__dirname, '../src/public/javascript/thumb.es6'),
        path.join(__dirname, '../src/public/javascript/star.es6')
    ]
  },
  output: {
    path: path.join(__dirname, '../build/'),
    publicPath: '/', // 在全部的资源引用前面加路径
    filename: 'public/javascript/[name]-[hash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.es6$/, // 匹配 ，正则测试后缀是否符合,用于标识出应该被对应的 loader 进行转换的某个或某些文件。
        exclude : /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
                'presets' : ['env']
              // module:false就不会对es6的语法（诸如:import）进行转换了
              // presets: [['env', { modules: false }], 'stage-0']
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        // use : [{}]
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader' }]
        })
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    }),
    new LiveReloadPlugin({ appendScriptTag: true }),
    //输出css
   // new ExtractTextPlugin('public/css/[name]-[hash:5].css'),
   new ExtractTextPlugin('public/css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'public/javascript/common/vendor-[hash:5].min.js',
     // minChunks: 2 // 最少两次引用相同的js代码
    }),
  
    new HtmlWebpackPlugin({
      filename:'./views/layout.html',//以output的目录为基准
      template:'src/widget/layout.html',
      inject:false
    }),
      new HtmlWebpackPlugin({
        filename:'./views/index.html',
        template:'src/views/index.js',
        inject:false,
        chunks:['vendor','index','tag']
    }),
    new HtmlWebpackPlugin({
        filename:'./widget/index.html',
        template:'src/widget/index.html',
        inject:false
    }),

      new HtmlWebpackPlugin({
        filename:'./views/star.html',
        template:'src/views/star.js',
        inject:false,
        chunks:['vendor','index','tag']
    }),
    new HtmlWebpackPlugin({
        filename:'./widget/star.html',
        template:'src/widget/star.html',
        inject:false
    }),
    new Manifest({
      cache: [
    
        'css/vendor.css',
        'index/index',
        'index/praise',
        'index/star'
     
      ],
      //Add time in comments.
      timestamp: true,
      // 生成的文件名字，选填
      // The generated file name, optional.
      filename:'./public/cache.manifest', 
      // 注意*星号前面用空格隔开
      network: [
        ' index/post'
      ],
      
      // manifest 文件中添加注释
      // Add notes to manifest file.
      headcomment: "praisebutton4 " , 
      master: ['./views/layout.html']
  })
   
  ]
  
}
