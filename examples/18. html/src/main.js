import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-bbf77.firebaseio.com';
Vue.http.interceptors.push((request, next) => {
  /* eslint-disable no-console */
  console.log(request);
  /* eslint-enable no-console */
  if (request.method === 'POST') {
    // Here we can intercept the request and change it's method
    // fetching of data from App will be broken
    request.method = 'PUT';
  }
  // our own filter for all response data
  next(response => {
    // fetching of data will be recovered
    response.json = () => { return { messages: response.body }};
  });
  
});

new Vue({
  el: '#app',
  render: h => h(App)
})
