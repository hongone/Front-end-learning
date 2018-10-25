import item from './sync.css';
import { isArray } from 'lodash-es';
const isArrayfnt = (args) => {
  console.log(lodash.isArray(args));
}
const sync = () => {
  fetch('/api/test')
    .then(Response => Response.json())
    .then(data => {
      console.log('fetch结果', data.message)
    })
    .catch(err => {
      console.log('hi,稍微休息一下.', err);
      // navigator.sendBeacon('http://127.0.0.1:8080/a.gif?errinfo= +err');

    });
    setTimeout(function(){
      document.getElementById('app').innerHTML = `<h1 class="${item.test}">hello river8</h1>`
    },1000);
 // 

  console.log('sync')
}
export { sync, isArrayfnt }
