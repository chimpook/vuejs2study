<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default content</p>
          </component>
        </keep-alive>
<!--         
        <app-quote>
          <p>Here we are:</p>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A Wonderful Quote!!</p>
        </app-quote>
 -->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';
  export default {
    data: function() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style lang="stylus" scoped>

</style>