import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AuthCallback from './components/AuthCallback.vue';
import Test from './components/Test.vue';

console.log(Test)
const routes = [
  { path: '/', component: HomePage },
  { path: '/test', component: Test },
  { path: '/auth/callback', component: AuthCallback } // Ajoutez la route pour la page de retour d'authentification
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
