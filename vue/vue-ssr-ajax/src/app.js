import Vue from 'vue';
import createStore from './store/store.js'
import App from './App.vue';
// CSR时的代码
// let app = new Vue({
//     el: '#app',
//     render: h => h(App)
// })

// SSR时的代码
// 不指定挂载的el
// 导出一个创建App的方法
export function createApp() {
  const store = createStore();
  const app = new Vue({
    store,
    render: h => h(App)
  });

  return { app, store, App };
}