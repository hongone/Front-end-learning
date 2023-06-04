const { src,dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const hash = require('gulp-hash-filename');

function assemble() {
  return src('./src/**/*.js')
    .pipe(hash({
    //	"format": "{name}.{hash}.{size}{ext}"
		"format": "{name}.{hash:8}{ext}"
    }))
 //   .pipe(dest('./dist'))
    .pipe(uglify())
    .pipe(rename(function (path) {path.basename += "-min";}))
    .pipe(dest('./dist'));
};

 exports.assemble = assemble;