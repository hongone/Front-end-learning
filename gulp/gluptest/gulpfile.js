const gulp = require('gulp');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');


const eslint = require('gulp-eslint');
gulp.task('builddev',  ()=> {

    return gulp.src('./src/nodeuii/**/*.js').pipe(
      babel({
        babelrc: false,
        "plugins": ["transform-es2015-modules-commonjs"]
      }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('buildconfig', ()=> {
    
  return gulp.src('./src/nodeuii/**/*.js')
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

gulp.task('lint',()=>{
  return gulp.src(['./src/nodeuii/**/*.js'])
      .pipe(eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failAfterError last.
      .pipe(eslint.failAfterError());
});

let _task = gulp.series('builddev','buildconfig');

if (process.env.NODE_ENV == 'lint') {

  _task = gulp.series('lint');

}

gulp.task('default',_task, function(cb){
  console.log('default');
  cb();
});