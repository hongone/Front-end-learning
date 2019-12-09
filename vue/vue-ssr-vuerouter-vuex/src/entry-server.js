import { createApp } from './app.js';

//要返回一个函数，该函数的作用是接收一个context参数，同时每次都返回一个新的根组件
export default context => {

  return new Promise((resolve, reject) => {
    const { app, store, router, App } = createApp();

    router.push(context.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      console.log('entry-server', context.url);
      // console.log('entry-server', matchedComponents);

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }


      Promise.all(matchedComponents.map(component => {
        console.log(component.asyncData)
        console.log(store)
        if (component.asyncData) {
          return component.asyncData({ store });
        }
      })).then(() => {
        // 当使用emplate 时，context.state 将作为window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML中

        context.state = store.state;

        // 返回根组件
        resolve(app);
      });
    }, reject);
  });
}