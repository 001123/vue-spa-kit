import { ROUTER } from '@/constants';
import LoginPage from './_login/LoginPage.vue';

const routes = [
  // Login
  {
    path: ROUTER.LOGIN.path,
    name: ROUTER.LOGIN.name,
    component: LoginPage,
  },
  // Demo
  {
    path: ROUTER.DEMO.path,
    name: ROUTER.DEMO.name,
    component: () => import(/* webpackChunkName: "Admin" */ './__demo/DemoPage.vue'),
  },
];

export default routes;
