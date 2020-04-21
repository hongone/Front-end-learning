// npm i -D loader-utils
 const { getOptions } = require('loader-utils');
// npm i -D schema-utils
const validate = require('schema-utils');
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')
 

 
$.html()
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
   
    const tableRefs = [];
    const regT = /<template>([\s\S]*)<\/template>/g
    const regS = /<script>([\s\S]*)<\/script>/g
    // const reg2 = /<template>[\s\S]*<\/template>/
    // const reg = /(.*?)/g

    // 模板处理块
    regT.test(source)
    const $ = cheerio.load(RegExp.$1)
    const tables = $('el-table');
    
    tables.each(function(index, el) {
      console.log($(this).attr('show-summary'))
      var refValue = undefined
      refValue = $(this).attr('ref') ? $(this).attr('ref') : 'etable_' + index;
      if (!$(this).attr('ref')){
        $(this).attr('ref', refValue) 
      }
      tableRefs.push(refValue)
      console.log(refValue);
      // console.log($(this).nodeName+':'+$(this).nodeValue);
    });

    // $('el-table').eq(0).attr('ref', 'table1')
    
    // var obj=$("#el-table").eq(0).attr();
    //  console.log($("el-table").eq(0).attributes); 

    const newTemplate = '<template>' + $('body').html() + '</template>'
    // console.log(newTemplate)
    // console.log(source.replace(reg2, newTemplate))
    source = source.replace(reg2, newTemplate)

    // 脚本处理块
    regS.test(source)
    // const $ = cheerio.load(RegExp.$1)

    console.log(source)
    return source;
};
