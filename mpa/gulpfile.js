const gulp = require('gulp');
const watch = require('gulp-watch');

//开发环境的gulp
gulp.task('builddev',()=>{

})
//生产环境的gulp
gulp.task('buildprod',()=>{
    
})

let _task = ['builddev'];

if(process.env.NODE_ENV=='production'){
    _task =['buildprod'];
}


gulp.task('default',_task);