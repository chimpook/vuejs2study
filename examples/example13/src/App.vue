<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <app-quote>
          <p>Here we are:</p>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A Wonderful Quote!!</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  export default {
    data: function() {
      return {
        quoteTitle: 'The Quote'
      }
    },
    components: {
      appQuote: Quote
    }
  }
</script>

<style lang="stylus" scoped>

</style>