import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HoUI from "./components/ho-ui";

const app = createApp(App);

app.use(router).use(HoUI);

app.mount('#app');
