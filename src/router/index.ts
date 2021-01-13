import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '../views/Login.vue';
import RecentPage from '../views/RecentPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Login', component: Login },
  { path: '/recent-page/', name: 'recent-page', component: RecentPage, props: true },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
