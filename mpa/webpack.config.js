const HtmlWebpackPlugin = require('html-webpack-plugin')
//const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const argv = require('yargs-parser')(process.argv.slice(2)) // 强大选项解析器。参数分析器
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 编译提醒插件
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

var glob = require('glob');

var path = require('path')

const _mode = argv.mode || 'development';
const _modeflag = _mode == 'production';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
var merge = require('webpack-merge');

const setTitle = require('node-bash-title');
setTitle('🍻  river8的' + _mode);

var ProgressBarPlugin = require('progress-bar-webpack-plugin');

// 计时工具
//const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

//const smp = new SpeedMeasurePlugin()

const files =glob.sync('.src/views/**/*.entry.js');
for(let item of files){
  
}
let _entry ={

}
let plugins = [ new HtmlWebpackPlugin({
    // Also generate a test.html
    filename: 'index.html',
    template: 'src/index.html',


    minify: {
      removeComments: _modeflag,
      collapseWhitespace: _modeflag
    }
  })
]


let webpackBase = {
  module: {
    rules: [
      
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
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
      },
      //图片压缩
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ttf|otf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024
            }
          }
        ]
      }
    ]
  },
  //watch : !_modeflag,
  // watchOptions :{
      // poll : 1000,
      // aggregateTimeout : 500,
      // ignored : /node_modules/
  // },

  devServer: {
    before (app) {
      app.get('/api/test', (req, res) => {
        res.json({
          code: 200,
          message: 'hello'
        })
      })
    }
  },
  optimization: {
    // Use the optimization.noEmitOnErrors to skip the emitting phase whenever there are errors while compiling. This ensures that no erroring assets are emitted. The emitted flag in the stats is false for all assets.
    noEmitOnErrors: false,
    // namedChunks
    //  moduleIds

    // 生成公共文件
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'common',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        }
      }
    },

    runtimeChunk: {
      name: 'runtime'
    }
  },
  plugins: [
   
    // new InlineManifestWebpackPlugin(),
   // new InlineManifestWebpackPlugin('runtime'),
    new MiniCssExtractPlugin({
      filename: _modeflag
        ? 'styles/[name].[contenthash:5].css'
        : 'styles/[name].css',
      chunkFilename: _modeflag
        ? 'styles/[id].[contenthash:5]..css'
        : 'styles/[id].css'
    }),
    new WebpackBuildNotifierPlugin({
      title: 'Webpack 编译',
      logo: path.resolve('./favicon.png'),
      suppressSuccess: true
    }),
    // 进度条
    new ProgressBarPlugin(),
   // new CleanWebpackPlugin(pathsToClean)
  ]
}

// module.exports = smp.wrap(merge(_mergeConfig, webpackBase));
module.exports = merge(_mergeConfig, webpackBase)
