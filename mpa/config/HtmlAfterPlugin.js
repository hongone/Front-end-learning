
//构建webpack插件
const pluginName ='HtmlAfterPlugin';
const assetHelp = (data)=>{
    let css = [];
    let js =[];
    const dir={
        js:item=>`<script src="${item}"></script>`,
        css:item=>`<link rel="stylesheet" type="text/css" href="${item}"  />`
    }
    for(let item of data.js){
        js.push(dir.js(item));
    }

    for(let item of data.css){
        css.push(dir.css(item));
    }
    return {
        css,
        js
    }
}

class HtmlAfterPlugin {
    //compiler是编译核心，带很多钩子
    apply(compiler){
     // compilation是webpack编译时的所有资源文件
        compiler.hooks.compilation.tap(pluginName,compilation =>{
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName,htmlPluginData=>{
                let _html = htmlPluginData.html;
                _html = _html.replace(/widgets:/g,'../../../');
              
                
                const result = assetHelp(htmlPluginData.assets);
                _html = _html.replace('<!--injectcss-->',result.css.join(""));
                _html = _html.replace('<!--injectjs-->',result.js.join(""));
                
                htmlPluginData.html = _html ;
                // for(let key in htmlPluginData){
                //     console.log(key);
                // }
                
            });
        })
    }
}
module.exports =HtmlAfterPlugin;

