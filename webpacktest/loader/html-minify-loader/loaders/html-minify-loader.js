const loaderUtils = require('loader-utils');
const Minimize = require('minimize');

module.exports = function(source) {
    var options = loaderUtils.getOptions(this) || {}; //这里拿到 webpack.config.js 的 loader 配置
    var minimize = new Minimize();
    return minimize.parse(source);
};
