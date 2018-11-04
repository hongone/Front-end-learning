const gulp = require('gulp');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
//const resolve = require('rollup-plugin-node-resolve');
const gulpSequence = require('gulp-sequence');
// 开发环境的gulp

gulp.task('builddev', () => {
  return watch('./src/nodeuii/**/*.js', { ignoreInitial: false },
   () => {
    gulp.src('./src/nodeuii/**/*.js')
    .pipe(
      babel({
        babelrc: false,
        "plugins": ['transform-es2015-modules-commonjs']
      })
    )
    .pipe(gulp.dest('./dist'));
  })
})
// gulp.task('builddev',  ()=> {

//     gulp.src('./src/nodeuii/**/*.js').pipe(
//       babel({
//         babelrc: false,
//         "plugins": ["transform-es2015-modules-commonjs"]
//       }))
//     .pipe(gulp.dest('./dist'))
// })

// 生产环境的gulp
gulp.task('buildprod', () => {
  //不加return 那么后面的rollup不能编译

 return gulp.src('./src/nodeuii/**/*.js') 
  //  gulp.src('./src/nodeuii/**/*.js') 
    .pipe(
      babel({
        babelrc: false,
        ignore : ['./src/nodeuii/config/index.js'],
        "plugins": ["transform-es2015-modules-commonjs"]
    }))

    .pipe(gulp.dest('./dist'))
})
// //单独处理config文件，因为没法进行流清洗
//gulp.task('buildconfig', ['buildprod'], ()=> {
  gulp.task('buildconfig', ()=> {
    
  gulp.src('./src/nodeuii/**/*.js')
    .pipe(rollup({
     
      input: './src/nodeuii/config/index.js',
      output : { format : "cjs"},
      plugins: [
          replace({
            "process.env.NODE_ENV": JSON.stringify('production')
          })
        
      ]
      
    }))
    .pipe(gulp.dest('./dist'));
})
// gulp.task('buildprod', () => {
//   gulp.src('./src/nodeuii/**/*.js') 
 
//   .pipe(rollup({
//       output : { format : "cjs"},
//       plugins: [
//           replace({
//             "process.env.NODE_ENV": JSON.stringify('production')
//           })
//         ],
//       input: './src/nodeuii/config/index.js'
//   }))
//   .pipe(
//     babel({
//       babelrc: false,
//       ignore : './src/nodeuii/config/index.js',
//       "plugins": ["transform-es2015-modules-commonjs"]
//   }))
//   .pipe(gulp.dest('./dist'))
// })

let _task = ['builddev'];

if (process.env.NODE_ENV == 'production') {
  _task = ['buildprod'];
  _task = ['buildconfig'];
  
 //_task = ['buildprod','buildconfig'];
  _task = gulpSequence('buildprod','buildconfig')
}

console.log(_task)
//gulp.task('default', _task)
gulp.task('default', _task);
