import Vue from 'vue';
import VueDND from 'awe-dnd'
import App from './App.vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueDND)
Vue.use(ElementUI)
let app = new Vue({
    el: '#app',
    render: h => h(App)
})