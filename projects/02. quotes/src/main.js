import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    numberQuotes: 0,
    maxQuotes: 0
  },
  methods: {
      addQuote(quote) {
        if ( this.numberQuotes < this.maxQuotes) {
          this.$emit('quoteWasAdded', quote);
          this.updateNumberQuotes();
        }
      },
      dropQuote(index) {
        this.$emit('quoteWasDropped', index);
        this.updateNumberQuotes();
      },
      updateNumberQuotes() {
        this.$emit('updateNumberQuotes', this.numberQuotes);
      },
      updateMaxQuotes() {
        this.$emit('updateMaxQuotes', this.maxQuotes);
      }
  },
  watch: {
    numberQuotes() {
      this.updateNumberQuotes();
        /* eslint-disable no-console */
        // console.log(this.numberQuotes + ' ? ' + this.maxQuotes);
        /* eslint-enable no-console */
      },
    maxQuotes() {
      this.updateMaxQuotes();
    }
  }

});

new Vue({
  render: h => h(App),
}).$mount('#app')
