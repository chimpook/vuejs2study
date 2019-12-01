<template>
  <div id="app">
    <div class="row justify-content-md-center">
      <div class="col-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>The Super Quiz</h1>
        <hr>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

        <transition
              appear
              enter-active-class="animated flipInY"
              leave-active-class="animated flipOutY"
              mode="out-in">
          
          <div class="card text-center question" v-if="status=='Question'" v-bind:key="'Question'">
            <div class="card-header">
              {{ question }}
            </div>
            <div class="card-body">
              <table>
                <tr>
                  <td><button class="btn btn-primary variant" @click="doCheck(0)">{{ variants[0] }}</button></td>
                  <td><button class="btn btn-primary variant" @click="doCheck(1)">{{ variants[1] }}</button></td>
                </tr>
                <tr>
                  <td><button class="btn btn-primary variant" @click="doCheck(2)">{{ variants[2] }}</button></td>
                  <td><button class="btn btn-primary variant" @click="doCheck(3)">{{ variants[3] }}</button></td>
                </tr>
              </table>
            </div>
          </div>

          <div class="card answer answer-correct" v-if="status == 'CorrectAnswer'" v-bind:key="'CorrectAnswer'">
            <div class="card-body">
              <h2 class="card-title">That's correct!</h2>
              <hr>
              <button class="btn btn-primary next" @click="doRestart">Next question</button>
            </div>
          </div>
          
          <div class="card answer answer-incorrect" v-if="status == 'IncorrectAnswer'" v-bind:key="'IncorrectAnswer'">
            <div class="card-body">
              <h2 class="card-title">That's incorrect!</h2>
              <hr>
              <button class="btn btn-primary next" @click="doRestart">Try another question..</button>
            </div>
          </div>

        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'the_super_quiz',
  data() {
    return {
      maxNumber: 10,
      actions: ['+', '-'],
      equation: {
        x: 0,
        y: 0,
        action: '+',
        result: 0
      },
      variants: [0, 0, 0, 0],
      status: 'Question',
      question: ''
    }
  },
  created() {
    this.generateQuestion();
    this.generateVariants();
  },
  methods: {
    generateQuestion() {
      let actionIndex = Math.floor(Math.random() * this.actions.length);
      this.equation.action = this.actions[actionIndex];

      let a = Math.floor(Math.random() * this.maxNumber);
      let b = Math.floor(Math.random() * this.maxNumber);

      // Let them all to be positive numbers
      if ( (a > b && this.equation.action === '-' ) || 
            (a < b && this.equation.action === '+')) {
        this.equation.x = a;
        this.equation.result = b;
      } else {
        this.equation.x = b;
        this.equation.result = a;
      }

      if (this.equation.action === '+') {
        this.equation.y = this.equation.result - this.equation.x;
      } else if (this.equation.action === '-') {
        this.equation.y = this.equation.x - this.equation.result;
      } else {
        this.equation.y = 0;
      }

      if (this.equation.y < 0) {
        this.question = 'What is ' + this.equation.x + ' ' + this.equation.action + ' (' + this.equation.y + ') ?';
      } else {
        this.question = 'What is ' + this.equation.x + ' ' + this.equation.action + ' ' + this.equation.y + ' ?';
      }
    },
    generateVariants() {
      // set a random variant with the correct value
      let correctVariantIndex = Math.floor(Math.random() * this.variants.length);
      this.$set(this.variants, correctVariantIndex, this.equation.result);
      // fill rest variants with random values
      this.variants.forEach((element, index) => {
          if (index !== correctVariantIndex) {
            this.$set(this.variants, index, Math.floor(Math.random() * this.maxNumber));
          }
      });
    },
    doCheck(index) { 
      if (this.variants[index] === this.equation.result) {
        this.status = 'CorrectAnswer';
      } else {
        this.status = 'IncorrectAnswer';
      }
      /* eslint-disable no-console */
      //console.log(this.status);
      /* eslint-enable no-console */
    },
    doRestart() {
      this.generateQuestion();
      this.generateVariants();
      this.status = 'Question';
    }

  },
  components: {
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
}

.question hr {
  height: 1px;
  color: lightgrey;
  background-color: lightgrey;
  border: 0;
}

.answer hr {
  height: 1px;
  color: darkgreen;
  background-color: darkgreen;
  border: 0;
}

.variant {
  width: 64px;
  height: 64px;
  margin: 24px;
}

.question,.answer {
  height: 300px;
}

.answer-correct {
  background-color: lightgreen;
}

.answer-incorrect {
  background-color: lightsalmon;
}

.next {
  width: 200px;
}

table {
  margin: auto;
}

.answer{
  padding-top: 48px;
}

h2.card-title {
  font-weight: bolder;
}

</style>
