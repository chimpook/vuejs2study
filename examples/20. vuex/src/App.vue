<template>
  <div>
    <div class="row">
      <div class="col-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <!-- <app-result :counter="counter"></app-result> -->
        <app-result></app-result>
        <hr>
        <app-another-result></app-another-result>
        <hr>
        <!-- <app-counter @update="counter += $event"></app-counter>-->
        <app-counter></app-counter>
        <hr>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" :value="value" @input="updateValue">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import Counter from './components/Counter';
import Result from './components/Result';
import AnotherResult from './components/AnotherResult';
import AnotherCounter from './components/AnotherCounter';

export default {
/*  
  data() {
    return {
      counter: 0
    }
  },
*/
  computed: {
    value() {
      return this.$store.getters.value;
    }
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value);
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
}
</script>