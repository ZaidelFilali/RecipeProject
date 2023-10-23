import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App)
const pinia = createPinia()

app.use(createPinia())
app.use(router)

app.mount('#app')
pinia.use(piniaPluginPersistedstate);
import "bootstrap/dist/js/bootstrap.js";