<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{ myName }} ({{ myAge }})</p>
    <!-- 2) Output your age, multiplied by 3 -->
    <p>My age multiplied by 3 : {{ myAge * 3 }}</p>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p>My random number : {{ myRandom }}</p>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
        <p>My random image:</p>
        <img v-bind:style="imageStyle" v-bind:src="imageSrc">
    </div>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
        <label for="myName">My Name: </label>
        <input id="myName" type="text" v-model="myName">
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      myName: 'Chimpook Virtuch',
      myAge: '46',
      imageSize: 100
    }
  },
  computed: {
    myRandom() {
      return Math.round(Math.random() * 100) / 100;
    },
    imageStyle() {
      return 'width: ' + this.imageSize + 'px; height: ' + this.imageSize + 'px';
    },
    imageSrc() {
      return 'https://picsum.photos/' + this.imageSize;
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
