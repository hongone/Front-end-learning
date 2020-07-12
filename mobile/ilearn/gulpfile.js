//导入工具包 require('node_modules里对应模块')
const { series, src, dest, watch } = require('gulp');
const less = require('gulp-less');
const lessFiles = './src/css/**/*.less';

const distdDir = './dist';
 
const htmlFiles = './src/**/*.html';
const cssFiles = './src/**/*.css';

 // 开发环境的gulp
function builddev() {
  return watch([lessFiles,htmlFiles,cssFiles], { ignoreInitial: false },
    () => {  
      return src(lessFiles)
        .pipe(less())
        .pipe(dest(distdDir));
       
    },()=>{
        src(cssFiles)
          .pipe(dest(distdDir));
  },()=>{
    return src(cssFiles)
        .pipe(dest(distdDir));
  })
}

function copydev() {
  return watch([sourceFiles], { ignoreInitial: false },
    () => {
      return src(sourceFiles)
        .pipe(less())
        .pipe(dest(distdDir));
  })
}

let _task = series(builddev)

exports.default = _task
