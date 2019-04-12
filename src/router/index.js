import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../views/Login/index.vue'),
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home/detail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue'),
    },
  ],
});
