<template>
  <div id="app">

    <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new 
    setInterval tick (attach respective class to the div with id "effect" below) -->
    <h4>Task1</h4>
    <div>
      <button @click="toggleEffect">{{ effectAction }}</button>
      <div id="effect" v-bind:style="effectStyle"></div>
    </div>
    <hr>

    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <h4>Task2</h4>
    <div id="task2" v-bind:class="task2ClassesB" ref="task2">{{ task2.classes }}</div>
    <hr>

    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
    <div>
      <h4>Task3</h4>
      <label for="task3input">Enter actual class (redStyle dottedStyle boxStyle)</label>
      <input id="task3input" type="text" v-model="task3.classes">
      <div id="task3" v-bind:class="task3.classes" ref="task3">{{ task3.classes }}</div>
      <hr>
    </div>

    <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) 
    and attach the classes -->
    <div>
      <h4>Task4</h4>
      <label for="task4Name">One of the classes (redStyle, greenStyle, dottedStyle, boxStyle)</label>
      <input id="task4Name" type="text" v-model="task4.className">
      <label for="task4Value">Value (true / false)</label>
      <input id="task4Value" type="checkbox" v-model="task4.classValue">
      <div v-bind:class="task4.classes">{{ task4ActualClasses }}</div>
    </div>
    <hr>

    <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
    <h4>Task5</h4>
    <div>
      <label for="task5Name">Name of parameter</label>
      <input id="task5Name" type="text" v-model="task5.Name">
      <br>
      <label for="task5Value">Value of parameter</label>
      <input id="task5Value" type="text" v-model="task5.Value" @keyup.enter="task5SetParam">
      <div v-bind:style="task5.params">text</div>
    </div>
    <hr>

    <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
    <h4>Task6</h4>
    <div>
      <button v-on:click="task6StartProgress" v-bind:disabled="task6.disabledButton">Start Progress</button>
      <div id="task6bar">
        <div id="task6progress" v-bind:style="{width: task6.value + '%'}">{{ task6.value + '%' }}</div>
        {{ task6.message }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      task1: {
        effectOn: false,
        size: 10,
        opacity: 0.1,
        delta: 1,
        interval: 50,
        intervalId1: 0,
      },
      task2: {
        classes: ''
      },
      task3: {
        classes: ''
      },
      task4: {
        classes: {
          redStyle: true,
          greenStyle: false,
          boxStyle: true,
          dottedStyle: false
        },
        className: 'dottedStyle',
        classValue: false
      },
      task5: {
        params: {
          width: '100px',
          height: '50px',
          border: '4px dashed green'
        },
        Name: 'background-color',
        Value: ''
      },
      task6: {
        value: 0,
        maxValue: 100,
        intervalId: 0,
        interval: 50,
        message: '',
        disabledButton: false
      }
    }
  },
  computed: {
    // ---------------------------------------------------------- task1
    effectAction() {
      return this.task1.effectOn ? 'Stop Effect' : 'Start Effect';
    },
    effectStyle() {
      return {
        width: this.task1.size + 'px',
        height: '40px',
        'background-color': 'firebrick',
        border: '4px solid green',
        opacity: this.task1.opacity
      }
    },
    // ---------------------------------------------------------- task2
    task2ClassesA() {
      return {
        redStyle: 'redStyle', 
        dottedStyle: 'dottedStyle', 
        boxStyle: 'boxStyle'
      };
    },
    task2ClassesB() {
      return [ 'redStyle', 'dottedStyle', 'boxStyle' ];
    },
    // ---------------------------------------------------------- task4
    task4ActualClasses() {
      let actualClasses = '';
      for (let key in this.task4.classes) {
        if (this.task4.classes[key]) {
          actualClasses += (key + ' ');
        }
      }
      return actualClasses;
    }
  },
  methods: {
    toggleEffect() {
      this.task1.effectOn = ! this.task1.effectOn;
    },
    // ---------------------------------------------------------- task5
    task5SetParam() {
      this.$set(this.task5.params, this.task5.Name, this.task5.Value);
      /* eslint-disable no-console */
      console.log(this.task5);
    },
    // ---------------------------------------------------------- task5
    task6StartProgress() {
      this.task6.value = 0;
      this.task6.disabledButton = true;
      this.task6.message = 'processing...';
      this.task6.intervalId = setInterval(() => {
        this.task6.value++;
      }, this.task6.interval);
    }
  },
  mounted() {
      /* eslint-disable no-console */
      this.task2.classes = this.$refs.task2.className;
      //console.log(this.$refs.task2.className);
      /* eslint-enable no-console */
  },
  watch: {
    'task1.effectOn'(value) {
      if (value) {
        this.task1.intervalId1 = setInterval(() => {
          if (this.task1.opacity >= 1 || this.task1.opacity <= 0) {
            this.task1.delta = this.task1.delta == 1 ? -1 : 1;
          }
          this.task1.opacity += this.task1.delta * 0.01;
          this.task1.size += this.task1.delta;
        }, this.task1.interval);
      } else {
        clearInterval(this.task1.intervalId1);
      }
    },
    'task4.className'(name) {
      this.task4.classValue = this.task4.classes[name];
    },
    'task4.classValue'(value) {
      this.task4.classes[this.task4.className] = value;
    },
    'task6.value'(value) {
      if (value >= 100) {
        clearInterval(this.task6.intervalId);
        this.task6.message = 'done!';
        this.task6.disabledButton = false;
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.redStyle {
  background-color: firebrick;
}
.greenStyle {
  background-color: darkgreen;
}
.dottedStyle {
  border: 2px dotted blue;
}
.boxStyle {
  width: 100px;
  height: 100px;
  color: white;
  padding: 10px;
}
#task6bar {
  height: 40px;
  width: 400px;
  border: 2px solid black;
}
#task6progress {
  height: 100%;
  background-color: darkslategrey;
  color: whitesmoke;
  font-weight: bolder;
  line-height: 40px;
}
</style>
