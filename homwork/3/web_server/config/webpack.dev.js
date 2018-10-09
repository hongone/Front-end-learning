const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
 const ExtractTextPlugin = require('extract-text-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    // 合成文件
    index: [
      path.join(__dirname, '../src/public/js/praisebutton.es6'),
      path.join(__dirname, '../src/public/js/utilty.es6')
    ],
    tag: [path.join(__dirname, '../src/public/js/xtag.es6')]
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    publicPath: './', // 在全部的资源引用前面加路径
    filename: 'public/js/[name]-[hash:5].js'
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
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    }),
    new LiveReloadPlugin({ appendScriptTag: true }),
    //输出css
    new ExtractTextPlugin('public/css/[name]-[hash:5].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'public/js/common/vendor-[hash:5].min.js',
     // minChunks: 2 // 最少两次引用相同的js代码
    }),
    new HtmlWebpackPlugin({
      filename : './views/layout.html', //以output的目录为基准
      template : 'src/views/layout.html',
      inject :true
    }),
    new HtmlWebpackPlugin({
      filename : './views/index.html', //以output的目录为基准
      template : 'src/views/index.html',
      inject :false
    })
   
  ]
  
}
