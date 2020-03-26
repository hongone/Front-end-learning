var xl =require('xlsx');
//workbook 对象，指的是整份 Excel 文档。我们在使用 js-xlsx 读取 Excel 文档之后就会获得 workbook 对象。
var workbook = xl.readFile("./temp/upload/11.xlsx")
const sheetNames = workbook.SheetNames;
console.log(sheetNames)
//返回json数据
// 根据表名获取对应某张表
const worksheet = workbook.Sheets[sheetNames[0]];
var dataa =xl.utils.sheet_to_json(worksheet);
console.log(dataa)