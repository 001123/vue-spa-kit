import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';

import './registerServiceWorker';
import router from './router';
import store from './store';

import './globalComponents';
import './scss/App.scss';

Vue.config.productionTip = false;
Vue.use(VueI18n);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
