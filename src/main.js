import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Asegúrate de que esta ruta sea correcta
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
