import { ROUTER } from '@/constants';

const routes = [
  // Demo
  // Root router first
  {
    path: ROUTER.HOME.path,
    name: ROUTER.HOME.name,
    component: () => import(/* webpackChunkName: "HomePage" */ './HomePage.vue'),
  },
  {
    path: ROUTER.LOGIN.path,
    name: ROUTER.LOGIN.name,
    component: () => import(/* webpackChunkName: "LoginPage" */ './LoginPage.vue'),
  },
  {
    path: ROUTER.SIGNUP.path,
    name: ROUTER.SIGNUP.name,
    component: () => import(/* webpackChunkName: "SignUpPage" */ './SignUpPage.vue'),
  },
  {
    path: ROUTER.ACCOUNT.path,
    name: ROUTER.ACCOUNT.name,
    component: () => import(/* webpackChunkName: "AccountPage" */ './AccountPage.vue'),
  },
  {
    path: ROUTER.GUIDE.path,
    name: ROUTER.GUIDE.name,
    component: () => import(/* webpackChunkName: "GuidePage" */ './__demo/GuidePage.vue'),
  },
  {
    path: ROUTER.DEMO.path,
    name: ROUTER.DEMO.name,
    component: () => import(/* webpackChunkName: "Admin" */ './__demo/DemoPage.vue'),
  },
];

export default routes;
