
//构建webpack插件
const pluginName ='HtmlAfterPlugin';
class HtmlAfterPlugin {
    //compiler是编译核心，带很多钩子
    apply(compiler){
     // compilation是webpack编译时的所有资源文件
        compiler.hooks.compilation.tap(pluginName,compilation =>{
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName,htmlPluginData=>{
                let _html = htmlPluginData.html;
               
                _html = _html.replace('<!--injectjs-->','<script></sccript>');
                htmlPluginData.html = _html ;
                // for(let key in htmlPluginData){
                //     console.log(key);
                // }
                
            });
        })
    }
}
module.exports =HtmlAfterPlugin;

