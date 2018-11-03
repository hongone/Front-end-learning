const gulp = require('gulp');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
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
    gulp.src('./src/nodeuii/**/*.js') 
    .pipe(
      babel({
        babelrc: false,
        ignore : './src/nodeuii/config/index.js',
        "plugins": ["transform-es2015-modules-commonjs"]
    }))
    .pipe(rollup({
        output : { format : "cjs"},
        plugins: [
            replace({
              "process.env.NODE_ENV": JSON.stringify('production')
            })
          ],
        input: './src/nodeuii/config/index.js'
    }))
    .pipe(gulp.dest('./dist'))
})

let _task = ['builddev']

if (process.env.NODE_ENV == 'production') {
  _task = ['buildprod']
}
console.log(_task)
gulp.task('default', _task)
