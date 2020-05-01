// npm i -D loader-utils
 const { getOptions } = require('loader-utils');
// npm i -D schema-utils
const validate = require('schema-utils');
// const cheerio = require('cheerio')
const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types = require("@babel/types");
 
const schema = {
  'type': 'object',
  'properties': {
    'test': {
      'type': "string"
    }
  }
}
function generateScript(tableRefs, options = {existsTag: true}){

  let result = '';
  if(!Array.isArray(tableRefs) || tableRefs.length === 0){
    // return result;
    return parser.parse(result);
  }

  tableRefs.map(val => {
    if(val.ref != ''){
      result += 'this.$refs.' + val.ref + '.doLayout();\n';
    }
  })

  if (result !== '') {

    if(!options.existsTag){
      result = 'export default { \n \
       beforeUpdate() { \n \
        this.$nextTick(() => {  '
       + result +
      '  }) \
        } \n\
      } ';
    }
  }
  // console.log(result)
  return result;
}
function generateExpression(tableRefs, options = {existsTag: true}){
  // console.log(result)
  return parser.parse(generateScript(tableRefs,options));
}

module.exports = function(source) {
    const options = getOptions(this);
    // console.log('--s')
    // console.log(source)
    // 在这里写转换 source 的逻辑 ...
    const regTag = /<el-table\s/g
    if (regTag.test(source) === false) {
      // console.log('false')
      return source;
    }
    const tableRefs = [];
    const regT = /<template>([\s\S]*)<\/template>/g
    // const reg2 = /<template>[\s\S]*<\/template>/
   
    // const reg = /(.*?)/g

    // 模板处理块

    if (regT.test(source) === false) {
      return source;
    }
    // cheerio 不支持自定义自闭合标签
    // // {decodeEntities: false}解决中文乱码问题
    // const $ = cheerio.load(RegExp.$1, {decodeEntities: false})
    // const tables = $('el-table');
    
    // tables.each(function(index, el) {
    //   console.log($(this).attr('show-summary'))
    //   var refValue = undefined
    //   refValue = $(this).attr('ref') ? $(this).attr('ref') : 'etable_' + index;
    //   if (!$(this).attr('ref')){
    //     $(this).attr('ref', refValue) 
    //   }
    //   tableRefs.push(refValue)
    //   console.log(refValue);
    //   // console.log($(this).nodeName+':'+$(this).nodeValue);
    // });

    // const newTemplate = '<template>' + $('body').html() + '</template>'
    // // console.log(newTemplate)
    // // console.log(source.replace(reg2, newTemplate))
    // source = source.replace(regT, newTemplate)

    const htmlString = RegExp.$1;
    const regTable = /<el-table([^>]*?show\-summary[^>]*?)>/
    const regShow = /(\sshow\-summary\s|\s:show\-summary="true"\s)/
    const regRef = /\sref="([^"]+)"\s/
    // var n = htmlString.search(regTable);
    // console.log('n', n)
    // console.log(regTable.test(htmlString))
    let tableString = ''
    let props = ''
    regTable.test(htmlString)
    let newString = htmlString;
    let index =0;
    let ref=''
    while(regTable.test(newString)) {
      index++;
      props = RegExp.$1
      const obj = {
        tableString: RegExp.lastMatch,
        replaceTag: '\$el\$' + index,
        newString: RegExp.lastMatch,
        ref: ''
      }
      newString = newString.replace(obj.tableString, obj.replaceTag)
      ref = '';
      if(regShow.test(props)) {
        if(!regRef.test(props)){
          ref = `eltable_${index}`
          props += `\nref="${ref}" `
        }else{
          ref = RegExp.$1;
        }
      }
      if(ref != ''){
        obj.ref = ref;
        obj.newString = `<el-table${props}>`
      }
      tableRefs.push(obj)

    }
    tableRefs.map(val => {
      // console.log(val.replaceTag)
      // console.log(val.newString)
      // console.log(newString)
      newString = newString.replace(val.replaceTag, val.newString)
      // console.log(newString)
    })
    // console.log(newString)
    // console.log(RegExp.$1) 
    // console.log('RegExp.lastMatch', RegExp.lastMatch) 

    // regShow.test(RegExp.$1)
    // console.log(RegExp.$1) 
    // console.log('RegExp.lastMatch', RegExp.lastMatch) 
    // console.log(RegExp.$3) 
    // console.log(RegExp.$4) 
    let newTemplate = '<template>' + newString + '</template>'
    // console.log(source.replace(reg2, newTemplate))
    source = source.replace(regT, newTemplate)


    // 脚本处理块
    const regS = /<script>([\s\S]*)<\/script>/g
    newString = ''
    // console.log(regS.test(source))
    if(!regS.test(source)){
      newString = generateScript(tableRefs, {existsTag: false})
      newTemplate = '\n<script>' + newString + '</script>';
      source = source + newTemplate;
    }else{
      //**正则已实现但不完整 */
      // const scriptString = RegExp.$1;
      // 
      // const regBeforeUpdate = /\sbeforeUpdate\(\)\s*\{([^}]*?)\}/g
      // if(regBeforeUpdate.test(scriptString)){

      // }

      // tableRefs.map(val => {
      //   if(val.ref !== ''){
      //     newString += 'this.$refs.' + val.ref + '.doLayout();\n';
      //   }
      //   // console.log(newString)
      // })
      // if (newString !== '') {
      //   newString = ' beforeUpdate() { \n \
      //     this.$nextTick(() => {  \n '
      //    + newString +
      //   '  }) \n \
      //   } ';
      //   const regexport =  /export\s+default\s+\{/;
      //   regexport.test(scriptString)
      //   const exportString = RegExp.lastMatch;
      //   // console.log(exportString)
      //   newString = exportString + '\n' + newString +',\n';
      //   newString = scriptString.replace(exportString, newString)
      //   newTemplate = '<script>' + newString + '</script>';
      //   // console.log(newTemplate)
      //   source = source.replace(regS, newTemplate)
      // }
      // 正则End
      const scriptString = RegExp.$1;
      
      function compile(code) {
        // 1.parse 将代码解析为抽象语法树（AST）
        const options = {
          // allowImportExportEverywhere: true,
          sourceType: 'module'
        }
        const ast = parser.parse(code, options);
      
        // 2,traverse 转换代码
        const visitor = {
          ObjectExpression(path) {
            // console.log(types.isExportDefaultDeclaration(path.parent))
            if(!types.isExportDefaultDeclaration(path.parent)){
              return
            }
            // console.log(path.parent)
            
            let properties = path.node.properties;
            // console.log(typeof properties,properties.length);
            let fntNode = null;
            for(let i=0; i < properties.length; i++){
              if(properties[i].type === 'ObjectMethod' && properties[i].kind === 'method' && properties[i].key.name === 'beforeUpdate'){
                fntNode = properties[i];
                break;
              }
            }
            const injectExpression = generateExpression(tableRefs, {existsTag: true})
            // console.log(typeof injectExpression.program.body);
            // console.log(injectExpression);
            // 不存在 beforeUpdate时
            if(fntNode === null){
              // let injectExpression = parser.parse(injectCode);
              let expression = types.objectMethod("method", types.identifier('beforeUpdate'), [], types.blockStatement(injectExpression.program.body, []), false, false, false);
              // console.log(expression)
              properties.unshift(expression);
            }else{
              fntNode.body.unshift(injectExpression);
            }
          }
        }
        traverse.default(ast, visitor);
      
        // 3. generator 将 AST 转回成代码
        return generator.default(ast, {}, code);
      }
      
  
      newString = compile(scriptString).code;
      // console.log(newString)
      newTemplate = '<script>' + newString + '</script>';
      source = source.replace(regS, newTemplate);
    }

    // console.log(source)
    return source;
};
