import { createApp } from './app'
import { rejects } from 'assert';
//要返回一个函数，该函数的作用是接收一个context参数，同时每次都返回一个新的根组件。
export default context => {
  return new Promise((resolve, reject) => {
    const { app, store, App } = createApp();
    let componets = App.componets;
    let asyncDataPromiseFns = [];
    Object.values(componets).forEach(conmponet => {
      if (componet.asyncData) {
        asyncDataPromiseFns.push(conmponet,aysncData({ store }))
      }
    })
    Promise.all(asyncDataPromiseFns).then((result) => {

      context.state = store.state;
      console.log(222);
      console.log(store.state);
      console.log(context.state);
      console.log(context);
      resolve(app);
    },reject);
  });
}