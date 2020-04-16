
function Watcher(vm, node, name, type){

  Dep.target = this;  // Dep.target是一个全局变量
  this.vm = vm;
  this.uid = vm.$getuid();
  this.node = node;
  this.name = name;
  this.type = type;
  this.update();
  // this.cb();
  Dep.target = null;
}

Watcher.prototype = {
  update(){
    this.get();
    // var batcher = new Batcher();
    // batcher.push(this);
    // this.node[this.type] = this.value; // 这里是改变节点内容的关键
    
    // Watcher.prototype.batcher.push(this);
  },
  cb: function() {
    // console.log('cb',this)
    this.node[this.type] = this.value; // 这里是改变节点内容的关键
    
  },
  get(){
    this.value = this.vm[this.name]; //  触发相应观察者的get
  }
}
// Watcher.prototype.batcher = new Batcher();