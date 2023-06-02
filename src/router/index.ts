// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Starship from '../views/Starship.vue';
import Detail from '../views/DetailStarship.vue';
import About from '../views/About.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Dashboard },
  { path: '/starship', component: Starship },
  { path: '/starship/:id', component: Detail },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
