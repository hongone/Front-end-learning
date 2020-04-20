// npm i -D loader-utils
 const { getOptions } = require('loader-utils');
// npm i -D schema-utils
const validate = require('schema-utils');

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
    console.log(options)
    console.log(source)
    console.log(validate(schema, options, 'Example Loader'));
  
    // 在这里写转换 source 的逻辑 ...
    return `export default ${ JSON.stringify(source) }`;
};
