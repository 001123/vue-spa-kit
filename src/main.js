import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueHead from 'vue-head';

import ScreenLoading from './library/screen-loading';

import App from './App.vue';

import './registerServiceWorker';
import router from './router';
import store from './store';

import './globalComponents';
import './scss/App.scss';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(VueHead);

// Custom plugin
Vue.use(ScreenLoading);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

export default app;
