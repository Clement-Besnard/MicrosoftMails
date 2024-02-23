import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AuthCallback from './components/AuthCallback.vue';
import MailsPage from './components/MailsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/mails', component: MailsPage, beforeEnter: requireAuth },
  { path: '/auth/callback', component: AuthCallback }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


function requireAuth(to, from, next) {
  const isAuthenticated = localStorage.getItem('username') !== null; 
  if (isAuthenticated) {
    next();
  } else {
    
    alert("Vous devez être connecté pour accéder à la page des e-mails.");
    next('/');
  }
}

export default router;