/**
 * 批处理
 */
function Batcher(){
  this.reset();
}

Batcher.prototype.push = function (job) {
  // console.log('job',job)
  if(!this.has[job.uid]) {
    this.queue.push(job);
    this.has[job.uid] = job;
    if(!this.waiting) {
      this.waiting = true;
     // console.log(this.queue)
    // setTimeout(() => {
    //   console.log('setTimeout', this.queue)
    //   this.flush();
    // })     
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
  this.sycflush();
  if ("Promise" in window) {
    this.flush = function() {
      Promise.resolve().then( ()=> {
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
}

Batcher.prototype.sycflush = function () {
  this.queue.forEach(function(job){
    job.cb();
  });
  this.reset();
}

