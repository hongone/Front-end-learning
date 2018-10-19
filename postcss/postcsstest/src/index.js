//require css 有两种玩法 :  css module单页
import item from './index.css';
document.getElementById('app').innerHTML = `<h1 class="${item.test}">下一代CSS</h1>`;