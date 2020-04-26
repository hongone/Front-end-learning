const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types = require("@babel/types");

function compile(code) {
  // 1.parse 将代码解析为抽象语法树（AST）
  const options = {
    // allowImportExportEverywhere: true,
    sourceType: 'module'
  }
  const ast = parser.parse(code, options);

  // 2,traverse 转换代码
  const visitor = {
    BlockStatement(path) {
      console.log(types.isFunctionDeclaration(path.parent))
      if(!types.isFunctionDeclaration(path.parent)){
        return
      }
      // console.log(path.parent)
      let body = path.node.body;
      console.log(typeof body,body.length)
      let fntCode = `
        this.$nextTick(() => {  
          console.log('beforeUpdate')
        });
      `;
      // console.log(path)
      // let injectExpression = parser.parseExpression(fntCode)
      // 代码中有分号的要用parse 不能用parseExpression
      let injectExpression = parser.parse(fntCode)
      // console.log(extraFntExpression)
      path.node.body.unshift(injectExpression)


    }
  }
  traverse.default(ast, visitor);

  // 3. generator 将 AST 转回成代码
  return generator.default(ast, {}, code);
}

const code = `
function fnt(){
  console.log('fnt')
}
`;
const newCode = compile(code)
console.log(newCode)