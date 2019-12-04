import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' // 'hash' by default
});

new Vue({
  el: '#app',
  router, // shortcut for routes: router
  render: h => h(App)
})
