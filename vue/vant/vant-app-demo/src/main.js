import { createApp } from 'vue';
import App from './App.vue';
// import { Button } from 'vant';
import  vant from 'vant';
import 'vant/lib/index.css';
import "amfe-flexible";


// createApp(App).use(Button).mount('#app')
createApp(App).use(vant).mount('#app');
