//导入工具包 require('node_modules里对应模块')

var gulp = require('gulp');
var less = require('gulp-less');
// var babel = require('gulp-babel');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var cleanCSS = require('gulp-clean-css');
var del = require('del');


var paths = {
  styles: {
    src: 'src/styles/**/*.css',
    dest: 'dist/styles/'
  },
  lesses: {
    src: 'src/styles/**/*.less',
    dest: 'dist/styles/'
  },
  // scripts: {
  //   src: 'src/scripts/**/*.js',
  //   dest: 'assets/scripts/'
  // },
  htmls: {
    src: 'src/**/*.html',
    dest: 'dist/'
  }
};


/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'dist' ]);
}

/*
 * Define our tasks using plain functions
 */
function lesses() {
  return gulp.src(paths.lesses.src)
    .pipe(less())
    // .pipe(cleanCSS())
    // pass in options to the stream
    // .pipe(rename({
    //   basename: 'main',
    //   suffix: '.min'
    // }))
    .pipe(gulp.dest(paths.lesses.dest));
}
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(gulp.dest(paths.styles.dest));
}

function htmls() {
  return gulp.src(paths.htmls.src)
    .pipe(gulp.dest(paths.htmls.dest));
}

// function scripts() {
//   return gulp.src(paths.scripts.src, { sourcemaps: true })
//     .pipe(babel())
//     .pipe(uglify())
//     .pipe(concat('main.min.js'))
//     .pipe(gulp.dest(paths.scripts.dest));
// }
 
function watch() {
  gulp.watch(paths.lesses.src, lesses);
  gulp.watch(paths.htmls.src, htmls);
  gulp.watch(paths.styles.src, styles);
}
 
/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles, htmls, lesses));
// 如果没有文件变化，这里的watch没法自动执行一次，所以需要平行执行这些基础任务
var taskSeries = gulp.parallel(watch, gulp.parallel(styles, htmls, lesses));
/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
// exports.scripts = scripts;
exports.lesses = lesses;
exports.htmls = htmls;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */

exports.default = taskSeries;
