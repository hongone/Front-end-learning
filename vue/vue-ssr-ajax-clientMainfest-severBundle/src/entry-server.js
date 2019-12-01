import { createApp } from './app.js';

//要返回一个函数，该函数的作用是接收一个context参数，同时每次都返回一个新的根组件�?
export default context => {

  // return (new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {
    const { app, store, App } = createApp();

    let components = App.components;
    let asyncDataPromiseFns = [];

    Object.values(components).forEach(component => {
      // console.log(component)

      if (component.asyncData) {
        asyncDataPromiseFns.push(component.asyncData({ store }));
      }
    });

    Promise.all(asyncDataPromiseFns).then((result) => {
// 当使用emplate 时，context.state 将作为window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML中
      console.log(result);
      context.state = store.state;

      console.log(222);
      console.log(store.state);
      console.log(context.state);
      console.log(context);

      resolve(app);
    }, reject);
  });
}