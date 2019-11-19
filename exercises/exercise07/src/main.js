import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    serverSelect(server) {
      this.$emit('serverWasSelected', server);
    },
    serverChangeStatus(id, status) {
      this.$emit('serverStatusWasChanged', id, status);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
