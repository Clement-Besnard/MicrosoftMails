import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AuthCallback from './components/AuthCallback.vue';
import MailsPage from './components/MailsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/mails', component: MailsPage, },
  { path: '/auth/callback', component: AuthCallback }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;