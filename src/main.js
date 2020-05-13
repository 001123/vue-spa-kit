import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueHead from 'vue-head';
import { Button, Select } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

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
// configure language vue element-ui
locale.use(lang);
// Vue element
Vue.use(Button);
Vue.use(Select);

// Custom plugin
Vue.use(ScreenLoading);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

export default app;
