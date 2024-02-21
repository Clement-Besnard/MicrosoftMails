import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import GoogleAuthCallback from './components/GoogleAuthCallback.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/auth/google/callback', component: GoogleAuthCallback },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
