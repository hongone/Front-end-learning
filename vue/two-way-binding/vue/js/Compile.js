 // 编译HTML元素
function Compile(node, vm) {
  if (node) {
    this.$frag = this.nodeToFragment(node, vm);
    return this.$frag;
  }
}
Compile.prototype = {
  nodeToFragment(node, vm) {
    var fragment = this.interNodeToFragment(node, vm);
 
    // 第一次吐页面前批量更新
    vm.$deps.forEach(dep => {
      dep.notify();
      dep.batcher.sycflush();
    });
    return fragment
  },

  interNodeToFragment(node, vm) {
    var that = this;
    var fragment = document.createDocumentFragment();
    var child;
    
    while (child = node.firstChild) {
      that.complieElemnt(child, vm);
      fragment.appendChild(child)
    }

    return fragment
  },

  complieElemnt(node, vm) {
    var that = this;
    // 用来匹配{{ xxx }}中的xxx
    var reg =/\{\{(.*)\}\}/;
    // 如果是元素节点
    if(node.nodeType === 1) {
      // console.log(node.childNodes)
      if(node.childNodes.length > 0) {
        var dom = that.interNodeToFragment(node, vm)
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
}
