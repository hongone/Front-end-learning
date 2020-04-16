
function Vue(options){
  this.data = options.data
  this.deps =[];
  this.uid = 0;
  observe(this.data, this)
  var id = options.el
  // var dom = nodeToFragment(document.getElementById(id), this);
  var dom = new Compile(document.getElementById(id), this);
  document.getElementById(id).appendChild(dom)
}