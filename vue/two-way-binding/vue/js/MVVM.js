
function Vue(options){
  var uid = 0;
  this.data = options.data
  this.$deps =[];
  this.$getuid = function(){
    return ++uid;
  };
  observe(this.data, this)
  var id = options.el
  // var dom = nodeToFragment(document.getElementById(id), this);
  var dom = new Compile(document.getElementById(id), this);
  document.getElementById(id).appendChild(dom)
}