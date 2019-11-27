import Vue from 'vue';
import App from './App.vue';
import Servers from './Servers.vue';

Vue.component('app-servers', Servers);

new Vue({
  el: '#app',
  data: {
    claster: 'Claster-X',
    servers: [
      {id: 1, name: 'Alfa-X', color: 'pink', status: 'On'},
      {id: 2, name: 'Beta-X', color: 'firebrick', status: 'Off'},
      {id: 3, name: 'Gamma-X', color: 'goldenrod', status: 'On'},
      {id: 4, name: 'Delta-X', color: 'darkblue', status: 'Off'},
      {id: 5, name: 'Epsilon-X', color: 'darkgreen', status: 'Off'}
  ]
  },
  //render: h => h(App),
  /* 
  render: h => h(App, {
    props: {
      claster: 'xx',
      servers: []
    }
  }),
  */
  /*
  render: function (createElement) {
    var vm = this;
    return createElement(App, {
      props: {
        claster: vm.claster,
        servers: vm.servers
      }
    });
  }
  */
  render: function (h) {
    var vm = this;
    return h(App, {
      props: {
        claster: vm.claster,
        servers: vm.servers
      }
    });
  }
  /*
  template: '<app v-bind:servers="servers" v-bind:claster="claster"></app>',
  components: {
    App
  }
  */
  //template: '<div><h1>{{test}}</h1><app-servers v-bind:servers="servers" v-bind:claster="claster"></app-servers></div>'
})
