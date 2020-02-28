const { series, src, dest, watch } = require('gulp');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const clean = require('gulp-clean');
const pump = require('pump');
// const gulpSequence = require('gulp-sequence');
const eslint = require('gulp-eslint');

// 环境常量
const sourceFiles = './src/nodeuii/**/*.js';
const devDir = './dist';
const prodDir = './dist';
const ignore =['./src/nodeuii/config/index.js'];
const input ='./src/nodeuii/config/index.js';

// 开发环境的gulp
function builddev() {
  return watch([sourceFiles], { ignoreInitial: false },
    () => {
      return src(sourceFiles)
        .pipe(
          babel({
            babelrc: false,
            "plugins": [ "transform-decorators-legacy"
              ,'transform-es2015-modules-commonjs']
          })
        )
        .pipe(dest(devDir));
  })
}
// gulp.task('builddev', () => {
//   return watch('./src/nodeuii/**/*.js', { ignoreInitial: false },
//    () => {
//     gulp.src('./src/nodeuii/**/*.js')
//     .pipe(
//       babel({
//         babelrc: false,
//         "plugins": [ "transform-decorators-legacy"
//           ,'transform-es2015-modules-commonjs']
//       })
//     )
//     .pipe(gulp.dest('./dist'));
//   })
// })


// 生产环境的gulp
function buildprod() {
  //不加return 那么后面的rollup不能编译
  return src(sourceFiles)
    .pipe(
      babel({
        babelrc: false,
        ignore :ignore,
        "plugins": ["transform-decorators-legacy","transform-es2015-modules-commonjs"]
    }))
    .pipe(dest(prodDir))
}
// gulp.task('buildprod', () => {
//   //不加return 那么后面的rollup不能编译

//  return gulp.src('./src/nodeuii/**/*.js') 
//   //  gulp.src('./src/nodeuii/**/*.js') 
//     .pipe(
//       babel({
//         babelrc: false,
//         ignore : ['./src/nodeuii/config/index.js'],
//         "plugins": ["transform-decorators-legacy","transform-es2015-modules-commonjs"]
//     }))

//     .pipe(gulp.dest('./dist'))
// })
// //单独处理config文件，因为没法进行流清洗
function buildconfig() {
  return src(sourceFiles)
    .pipe(rollup({
      input: input,
      output : { format : "cjs"},
      plugins: [
          replace({
            "process.env.NODE_ENV": JSON.stringify('production')
          })
      ]
    }))
    .pipe(dest(prodDir));
}
// gulp.task('buildconfig', ()=> {
    
//   gulp.src('./src/nodeuii/**/*.js')
//     .pipe(rollup({
     
//       input: './src/nodeuii/config/index.js',
//       output : { format : "cjs"},
//       plugins: [
//           replace({
//             "process.env.NODE_ENV": JSON.stringify('production')
//           })
        
//       ]
      
//     }))
//     .pipe(gulp.dest('./dist'));
// })

// eslint
function lint() {
  return src([sourceFiles])
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
}
// gulp.task('lint',()=>{
//   return gulp.src(['./src/nodeuii/**/*.js'])
//       .pipe(eslint())
//       // eslint.format() outputs the lint results to the console.
//       // Alternatively use eslint.formatEach() (see Docs).
//       .pipe(eslint.format())
//       // To have the process exit with an error code (1) on
//       // lint error, return the stream and pipe to failAfterError last.
//       .pipe(eslint.failAfterError());
// });
//清理产品目录下的文件
function cleanFiles(cb) {
  pump([
    src(prodDir),
    clean()
  ], cb)
}


let _task = series(builddev)
if (process.env.NODE_ENV == 'production') {
  _task = series(cleanFiles, init, buildprod, buildconfig,)
}
if (process.env.NODE_ENV == 'lint') {
  _task = series(lint)
}
exports.lint = lint
exports.default = _task

// glup3
// let _task = ['builddev'];
// if (process.env.NODE_ENV == 'production') {
//   _task = gulpSequence('buildprod','buildconfig')
// }
// //代码检查
// if (process.env.NODE_ENV == 'lint') {

//    _task = ['lint'];

// }

// gulp.task('default', _task);
