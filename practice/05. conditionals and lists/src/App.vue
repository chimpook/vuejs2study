<template>
  <div id="app">
    <!-- 1) Hook up the button to toggle the display of the two paragraphs. Use both v-if and v-show and inspect the elements to see the difference -->
    <div>
      <button @click="seeFirst = !seeFirst">Toggle</button>
      <p v-if="seeFirst">You either see me ...</p>
      <p v-else>...or me</p>
      <p v-show="seeFirst">You either see me ...</p>
      <p v-show="!seeFirst">...or me</p>
    </div>
    <!-- 2) Output an <ul> of array elements of your choice. Also print the index of each element. -->
    <ul>
      <li v-for="(person,index) in array" v-bind:key="index">{{ index + 1 }} : {{person}}</li>
    </ul>
    <!-- 3) Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the index of each item. -->
    <ul>
      <li v-for="(value, name, index) in myObject" v-bind:key="index">{{ index + 1 }} : {{ name }} : {{ value }}</li>
    </ul>
    <!-- 4) Print the following object (only the values) and also create a nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this) -->
    <ul>
      <li v-for="(value, name, index) in testData" v-bind:key="index">
        {{ index + 1 }} : {{ name }} :
        <template v-if="typeof value === 'object'">
          [
          <ul>
            <li v-for="(subvalue, subindex) in value" v-bind:key="subindex">{{ subindex + 1 }} : {{ subvalue }}</li>
          </ul>
          ]
        </template>
        <template v-else>
          {{ value }}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      seeFirst: true,
      array: ['Max', 'Anna', 'Chris', 'Manu'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      testData: {
        name: 'TESTOBJECT', 
        id: 10,
        data: [1.67, 1.33, 0.98, 2.21],
        date: '09.01.2020'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
