// 创建一个worker线程
const worker = new Worker('./worker.js');

// 创建1kb内存
const sharedBuffer = new SharedArrayBuffer(1024);

// 创建视图
const intBuffer = new Int32Array(sharedBuffer);
console.log(intBuffer);
for(let i=0; i<intBuffer.length; i++){
  intBuffer[i] = i;
}
// 发送内存共享地址
worker.postMessage(intBuffer);

worker.onmessage = function(e){
  console.log('收到子线程消息:'+ e.data);
  console.log(intBuffer,Atomics.load(intBuffer,2));

}
