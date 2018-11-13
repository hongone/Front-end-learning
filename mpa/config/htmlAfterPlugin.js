//构建
const pluginName ='ConsoleLogOnBuildWebpackPlugin';
class ConsoleLogOnBuildWebpackPlugin {
    //compiler是核心
    apply(compiler){
       // compilation是webpack编译时的所有资源文件
        compiler.hooks.run.tap(pluginName,compilation =>{
            console.log('webpack 构建过程开始!');
        })
    }
}
module.exports =ConsoleLogOnBuildWebpackPlugin;