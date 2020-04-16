 // 编译HTML元素

 function nodeToFragment(node, vm) {
  var fragment = interNodeToFragment(node, vm);

  // 批量更新
  vm.deps.forEach(dep => {
    dep.notify();
  });
  return fragment
}

function interNodeToFragment(node, vm) {
  var fragment = document.createDocumentFragment();
  var child;
  while (child = node.firstChild) {
    complieElemnt(child, vm);
    fragment.appendChild(child)
  }

  return fragment
}

 function complieElemnt(node, vm) {
  // 用来匹配{{ xxx }}中的xxx
  var reg =/\{\{(.*)\}\}/;
  // 如果是元素节点
  if(node.nodeType === 1) {
    // console.log(node.childNodes)
    if(node.childNodes.length > 0) {
      var dom = interNodeToFragment(node, vm)
      node.appendChild(dom)
    }else {
      var attr = node.attributes;
      for(let i=0; i < attr.length; i++) {
        if (attr[i].nodeName === 'v-model') {
          // 看是与哪个数据相关
          var name = attr[i].nodeValue;
          node.addEventListener('input', function(e){
            vm[name] = e.target.value;
          })
          // node.value = vm[name];
          node.removeAttribute('v-model');
          // 双向绑定
          new Watcher(vm, node, name, 'value');
          break;
        }
      }            
    }

  
  }
  // 文本节点
  if(node.nodeType === 3) {
    // console.log(node.nodeValue)
    if(reg.test(node.nodeValue)) {
      var name = RegExp.$1;
      name = name.trim();
      // node.nodeValue = vm[name];
      new Watcher(vm, node, name, 'nodeValue');
      
    }
  }

}
