<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote quote="A wonderful quote as an attribute!"></app-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  export default {
    components: {
      appQuote: Quote
    }
  }
</script>

<style lang="stylus" scoped>

</style>