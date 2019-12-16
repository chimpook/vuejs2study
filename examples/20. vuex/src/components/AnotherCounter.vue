<template>
    <div>
        <!--
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        -->

        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
//import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
export default {
/*    
    methods: {
        increment() {
            //this.$emit('update', 1);
            //this.$store.state.counter++;  // Using getters
            this.$store.commit('increment'); // Using mutations
        },
        decrement() {
            //this.$emit('update', -1);
            //this.$store.state.counter--;
            this.$store.commit('decrement');
        }
    }
*/
/*
    methods: {
        ...mapMutations([
            'increment',
            'decrement'
        ])
    }
*/
    methods: {
        ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
        ])
    }
}
</script>

<style scoped>
button+button {
    margin-left: 12px;
}
</style>