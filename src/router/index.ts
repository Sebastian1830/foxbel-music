import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Login from '@/views/Login.vue';
import RecentPage from '@/views/RecentPage.vue';
import HomePage from '@/views/HomePage.vue';

Vue.use(Router);

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Login', component: Login },
  { path: '/recent-page/', name: 'recent-page', component: RecentPage, props: true },
  { path: '/home/', name: 'home', component: HomePage },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
