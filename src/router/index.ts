import { createMemoryHistory, createRouter } from 'vue-router';
const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/login', component: () => import('@/views/LoginView.vue') }
];
const router = createRouter({
  history: createMemoryHistory(),
  routes
});
export default router;
