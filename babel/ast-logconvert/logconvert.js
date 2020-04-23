const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types = require("@babel/types");

function compile(code) {
  // 1.parse 将代码解析为抽象语法树（AST）
  const ast = parser.parse(code);

  // 2,traverse 转换代码
  const visitor = {
    CallExpression(path) {
      const { callee } = path.node;

      const isConsoleLog = types.isMemberExpression(callee) && callee.object.name === 'console' 
        && callee.property.name === 'log'
      if(isConsoleLog) {
        const funcPath = path.findParent(p => {
          return p.isFunctionDeclaration();
        })
      }

    }
  }
  traverse.default(ast, {});

  // 3. generator 将 AST 转回成代码
  return generator.default(ast, {}, code);
}

const code = `
function getData() {
  console.log("data")
}
`;
const newCode = compile(code)
console.log(newCode)