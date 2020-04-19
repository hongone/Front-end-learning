//  主题
function Dep(){
  this.subs = [];
}
Dep.prototype = {
  addSub(sub){
    this.subs.push(sub);
  },
  notify(){
    this.subs.forEach(function(sub){
      sub.update();
    })
    // console.log('setTimeout', this.subs)
    // batcher.flush()
    // setTimeout(() => {
    //   // console.log('setTimeout', batcher.queue)
    //   Dep.prototype.batcher.flush();
    // })
    // console.log('batcher', Dep.prototype.batcher.queue.length)
    // Dep.prototype.batcher.flush();
  }
}