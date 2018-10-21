var gulp = require('gulp');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var less = require('gulp-less');
var mqpcaker = require('css-mqpacker');
var csswring = require('csswring');
gulp.task('default', function () {
    var processors = [
        autoprefixer({
            browsers :['last 3 version']
        }),
        mqpcaker,
        csswring
    ]
 
    return gulp.src('./src/*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});