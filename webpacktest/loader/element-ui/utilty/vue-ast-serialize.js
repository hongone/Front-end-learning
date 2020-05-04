// g该方法没有完整实现，可以做入门学习资料
module.exports = function serializeNode(node) {
  const { tag, attrsList, selfClose, children, content } = node;
  console.log(tag, attrsList, selfClose, children, content)
  let attrString = "";
  if(attrsList){
    attrsList.forEach(attr => {
      const { name, value } = attr;
      if (value === true) {
        attrString += ` ${name}`;
      } else {
        attrString += ` ${name}="${value}"`;
      }
    });
  }
  if (selfClose) {
    return `<${tag}${attrString} />`;
  }
  const childrenLength = children ? children.length : 0;
  const contentLength = content ? content.length : 0;
  let serializedChildNodes = "";
  let childrenIndex = 0;
  let contentIndex = 0;
  while (childrenIndex < childrenLength || contentIndex < contentLength) {
    if (childrenIndex >= childrenLength) {
      serializedChildNodes += content[contentIndex++].text;
      continue;
    }
    if (contentIndex >= contentLength) {
      serializedChildNodes += serializeNode(children[childrenIndex++]);
      continue;
    }
    serializedChildNodes +=
      content[contentIndex].start > children[childrenIndex].start
        ? serializeNode(children[childrenIndex++])
        : content[contentIndex++].text;
  }
  return `<${tag}${attrString} >${serializedChildNodes}</${tag}>`;
}