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
    ObjectExpression(path) {
    
      if(!types.isExportDefaultDeclaration(path.parent)){
        return
      }
     
      const hasData = path.node.properties.some(val => {
        console.log(val.key.name)
        return val.key.name ==='data'
      })
      console.log(hasData)
      // console.log(path.node.properties)
  
      // path.node.properties.push(types.objectProperty('data','StringLiteral'));
      let stringLiteral = JSON.stringify({data: 1})
      // let stringLiteral = 'data: 1'
      let extraPropsExpression = parser.parseExpression(stringLiteral)
      console.log(typeof extraPropsExpression.properties)
      console.log(extraPropsExpression.properties.slice(0))
       // 如果原本 data不存在, 我们直接将我们的自定义属性作为属性参数
      if (hasData) {
        // path.node.properties
      } else {
      // 否则，我们将我们的自定义属性与原属性进行合并（只处理对象类型的 props）
      path.node.properties = path.node.properties.concat(extraPropsExpression.properties)
        // console.log(path.node.properties)
          // path.node.arguments[1] = types.objectExpression(
          //     propsExpression.properties.concat(
          //         (<types.ObjectExpression>extraPropsExpression).properties,
          //     ),
          // )
      }
      let fntCode = `
        {
          beforeUpdate() { 
            this.$nextTick(() => {  
              console.log('beforeUpdate')
            }) 
          }
        } 
      `;
      let extraFntExpression = parser.parseExpression(fntCode)
      path.node.properties = path.node.properties.concat(extraFntExpression.properties)
      // console.log(fntCode)
      // path.node.properties.push(extraFntExpression)
        // let propertyPath = path.
        // if (path.properties.some(val => val.key.name === 'beforeUpdate') === false) {

        // }
    
        // t.isVariableDeclarator(path.parent)
      
      // const isExportDefaultObject = path.pa types.isMemberExpression(callee) && callee.object.name === 'console' 
      //   && callee.property.name === 'log'
      // if(isConsoleLog) {
      //   // 如果是console.log的调用 找掉上一个父节点是函数
      //   const funcPath = path.findParent(p => {
      //     return p.isFunctionDeclaration();
      //   });
      //   // 取函数的名称
      //   const funcName = funcPath.node.id.name;
      //   // 将名称通过types来放到函数的参数前面去
      //   path.node.arguments.unshift(types.stringLiteral(funcName));

      // }

    }
  }
  traverse.default(ast, visitor);

  // 3. generator 将 AST 转回成代码
  return generator.default(ast, {}, code);
}

const code = `
export default {
  name: 'bar'
}
`;
const newCode = compile(code)
console.log(newCode)