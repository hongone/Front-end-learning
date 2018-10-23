const HtmlWebpackPlugin = require('html-webpack-plugin')
const argv = require('yargs-parser')(process.argv.slice(2)) // 强大选项解析器。参数分析器
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// console.log(argv);
const _mode = argv.mode || 'development'
const _modeflag = _mode == 'production'
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
var merge = require('webpack-merge')
let webpackBase = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            // options: {

            //   publicPath: '../'
            // }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
      before(app){
          app.get("/api/test",(req,res)=>{
              res.json({
                  code : 200,
                  message  : "hello"
              })
          })
      }
	
    },

  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: 'index.html',
      template: 'src/index.html',
    

      minify: {
        removeComments: _modeflag,
        collapseWhitespace: _modeflag
      }
    }),
    new MiniCssExtractPlugin({
      filename: _modeflag ? 'styles/[name].[hash:5].css' : 'styles/[name].css',
      chunkFilename: _modeflag
        ? 'styles/[id].[hash:5]..css'
        : 'styles/[id].css'
    })
  ]
}

module.exports = merge(_mergeConfig, webpackBase)
