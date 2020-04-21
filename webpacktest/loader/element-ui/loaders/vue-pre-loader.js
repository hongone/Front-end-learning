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
    // const reg = /[/s/S]*<template>([/s/S]*?)<\/template>[/s/S]*/g
    const reg = /<template>([\s\S]*)<\/template>/g
    const reg2 = /<template>[\s\S]*<\/template>/
    // const reg = /(.*?)/g
    reg.test(source)
    // console.log(reg.test(source))

    // console.log(RegExp.$1)
    const $ = cheerio.load(RegExp.$1)
    console.log('ref', $('el-table').eq(0).attr('ref'))

    $('el-table').eq(0).attr('ref', 'table1')
    
    // var obj=$("#el-table").eq(0).attr();
    //  console.log(obj ); 
//     $.each(obj,function(){
//       console.log(vobj );      
//     });
    // console.log($('body').html())
    const newTemplate = '<template>' + $('body').html() + '</template>'
    // console.log(newTemplate)
    // console.log(source.replace(reg2, newTemplate))
    source = source.replace(reg2, newTemplate)
    console.log(source)
    return source;
};
