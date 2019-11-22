import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    addQuote(quote) {
      this.$emit('quoteWasAdded', quote);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
