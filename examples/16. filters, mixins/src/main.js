import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

// Order of execution:
// GLobal mixin
// Local mixin
// Component
Vue.mixin({
  // We need to be cautious. because it will be
  // executed everywhere
  created() {
    /* eslint-disable no-console */
    console.log('Global mixin created hook.');
    /* eslint-enable no-console */
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
