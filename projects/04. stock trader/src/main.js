/* eslint-disable no-console */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import store from './store/store';
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

/**
 * 1. go to https://console.firebase.google.com/
 * 2. create Realtime database
 * 3. go to "Rules" and set write and read both to true
 * 4. go to "Data" and copy link to database
 */
Vue.http.options.root = 'https://vuejs-stock-trader-f52fd.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
