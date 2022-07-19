import { createRouter, createWebHistory } from 'vue-router';
import constantRoutes from './constantRoutes';

export default createRouter({
  routes: constantRoutes,
  history: createWebHistory(),
});
