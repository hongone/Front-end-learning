import item from './sync.css'
const sync = () => {
  fetch('/api/test')
    .then(Response => Response.json())
    .then(data => {
      console.log('fetch结果', data.message)
    })
    .catch(err => {
      console.log('错误', err);
     // navigator.sendBeacon('http://127.0.0.1:8080/a.gif?errinfo= +err');
      
    })
  document.getElementById('app').innerHTML = `<h1 class="${item.test}">hello river8</h1>`
  
  console.log('sync')
}
export { sync }
