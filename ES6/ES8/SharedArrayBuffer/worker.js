onmessage = function(e){
  console.log('收到主线程的数据');
  const data = e.data;
  console.log(data);
  console.log(Atomics.load(data,2));
  Atomics.store(data,2,84);
  console.log(data);
  postMessage('数据我改了');
}