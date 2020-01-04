<template>
  <div id="app">
    <!-- 1) Show an alert when the Button gets clicked -->
    <div>
        <button @click="myAlert">Show Alert</button>
    </div>
    <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
    <div>
        <input type="text" @keydown="getValue">
        <p>{{ value }}</p>
    </div>
    <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
    <div>
        <input type="text" @keydown.enter="getValue">
        <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        value: ''
      }
  },
  methods: {
    myAlert() {
      alert('Alert!!');
    },
    getValue(event) {
      this.value = event.target.value;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
