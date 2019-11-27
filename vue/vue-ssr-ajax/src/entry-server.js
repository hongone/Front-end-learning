import { createApp } from './app'
//要返回一个函数，该函数的作用是接收一个context参数，同时每次都返回一个新的根组件。
export default context => {
  const { app } = createApp();
  return app;
}