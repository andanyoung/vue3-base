import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import '@/assets/css/index.css';
import 'virtual:svg-icons-register';

let app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
