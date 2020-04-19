/**
 * 批处理
 */
function Batcher(){
  this.reset();
}

Batcher.prototype.push = function (job) {
  // console.log('job',job)
  if(typeof this.has[job.uid] === 'undefined') {
    this.queue.push(job);
    this.has[job.uid] = job;
    // console.log(this.queue)
    if(!this.waiting) {
      this.waiting = true;
      // 利用同步队列 比 异步队列执行早的机制 来实现只执行一次flush
      this.flush();
    }

  }
}

Batcher.prototype.reset = function () {
  this.queue = [];
  this.has = {};
  this.waiting = false;
}

/***
 * 执行并清空事件队列 
 */
Batcher.prototype.flush = function () {
  
  if ("Promise" in window) {
    this.flush = function() {
      Promise.resolve().then( ()=> {
          // console.log('flush')
          this.sycflush();
      })
    }
  } else {
    this.flush = function() {  
      setTimeout(() => {
          this.sycflush();
      }, 0);
    }
  }
  this.flush();
}

Batcher.prototype.sycflush = function () {
  this.queue.forEach(function(job){
    job.cb();
  });
  this.reset();
}

