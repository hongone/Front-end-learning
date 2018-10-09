var gulp = require('gulp');
var babel = require('gulp-babel');
//An array of tasks to be executed and completed before your task will run.
//一定要有default
gulp.task('default', ['praise'],()=>{
    //Watch files and do something when a file changes. This always returns an EventEmitter that emits change events.
    gulp.watch(['src/**/*.es6','!src/public/*/*.es6'],['praise']);
   
});
gulp.task('praise', ()=>{
  return  gulp.src(['src/**/*.es6','!src/public/*/*.es6'])
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('./build'));
});