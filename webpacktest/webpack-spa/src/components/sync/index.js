import item from './sync.css';
const sync = () =>{
    console.log('sync');
    document.getElementById('app').innerHTML = `<h1 class="${item.test}“>hello river8</h1>`
};
export {
    sync
}