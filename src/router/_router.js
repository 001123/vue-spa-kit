import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import routes from './_routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

// Router events

// Ensures all pending requests are cancelled on route change
router.beforeEach((to, from, next) => {
  store.dispatch('cancelRequest/CANCEL_PENDING_REQUESTS');
  next();
});

export default router;
