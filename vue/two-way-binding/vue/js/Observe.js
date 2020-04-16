
// 响应式监听函数  告诉主题什么时候添加观察者，什么时候通知观察者
function defineReactive(vm, key, val) {
  var dep = new Dep();
  vm.$deps.push(dep)
  
  Object.defineProperty(vm, key, {
    get: function() {
      if(Dep.target){
        dep.addSub(Dep.target);
      }
      return val
    },
    set: function(newVal) {
      if(newVal === val) {
        return
      }
      val = newVal;

      dep.notify();

    }
  })
}
//观察者
function observe(obj, vm) {
  for(let key of Object.keys(obj)){
    defineReactive(vm, key, obj[key]);
  }
}