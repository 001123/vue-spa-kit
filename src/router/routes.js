import { ROUTER } from '@/constants';

const routes = [
  // Demo
  // Root router first
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
