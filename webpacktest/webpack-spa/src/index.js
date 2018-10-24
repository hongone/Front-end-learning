import { sync } from './components/sync/index.js'
//异步加载
import(/* webpackChunkName : "async-banner" */"./components/banner/index.js").then(_ => {
    _.default.init();
});
sync();
