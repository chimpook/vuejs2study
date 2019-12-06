import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', // 'hash' by default
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (toString.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 700};
  }
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  next(); 
  // () - can pass to assined route
  // (false) - can be terminated
  // ({path: ..} | '') - here can be an object of router as an argument
});

new Vue({
  el: '#app',
  router, // shortcut for routes: router
  render: h => h(App)
})
