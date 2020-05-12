import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from './Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ './About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Ensures all pending requests are cancelled on route change
router.beforeEach((to, from, next) => {
  store.dispatch('cancelRequest/CANCEL_PENDING_REQUESTS');
  next();
});

export default router;
