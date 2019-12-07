import Vue from 'vue'
import App from './App.vue'

Vue.filter('counter', function(string) {
    return string + ' ( ' + string.length + ' )';
});

Vue.mixin({
    created() {
        /* eslint-disable no-console */
        console.log('Global Mixin - Created Hook');
        /* eslint-enable no-console */
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
