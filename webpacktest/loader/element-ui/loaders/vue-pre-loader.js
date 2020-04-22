// npm i -D loader-utils
 const { getOptions } = require('loader-utils');
// npm i -D schema-utils
const validate = require('schema-utils');
const cheerio = require('cheerio')
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const core = require("@babel/core")
 
const schema = {
  'type': 'object',
  'properties': {
    'test': {
      'type': "string"
    }
  }
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
    if(!regS.test(source)){
      tableRefs.map(val => {
        // console.log(val.replaceTag)
        // console.log(val.newString)
        // console.log(newString)
        if(val.ref != ''){
          newString += 'this.$refs.' + val.ref + '.doLayout();\n';
        }
        // console.log(newString)
      })
      if (newString != '') {
        newString = ' beforeUpdate() { \
          this.$nextTick(() => {  '
         + newString +
        '  }) \
        } ';
        newTemplate = '<script>' + newString + '</script>';
    // console.log(source.replace(reg2, newTemplate))
        source = source.replace(regS, newTemplate)
      }
    }
   
    // const scriptString = RegExp.$1;
    // const $ = cheerio.load(RegExp.$1)

    console.log(source)
    return source;
};
