// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import About from './views/About.vue';
import Dashboard from './views/Dashboard.vue';
import Starship from './views/Starship.vue';
import DetailStarship from './views/DetailStarship.vue';
import NotFound from './views/NotFound.vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App);
const pinia = createPinia();


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/starship', component: Starship },
    { path: '/starship/:id', component: DetailStarship },
    { path: '/about', component: About },
    { path: '/:pathMatch(.*)*', component: NotFound }, // Rute untuk halaman 404

  ],
});

app.use(pinia);
app.use(router);
app.use(Antd);
app.mount('#app');
