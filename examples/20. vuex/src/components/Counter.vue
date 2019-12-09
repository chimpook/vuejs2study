<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
/*
    methods: {
        increment() {
            //this.$emit('update', 1);
            this.$store.state.counter++;
        },
        decrement() {
            //this.$emit('update', -1);
            this.$store.state.counter--;
        }
    }
*/
    methods: {
        ...mapActions([
            'increment',
            'decrement'
        ])
    }

}
</script>

<style scoped>
button+button {
    margin-left: 12px;
}
</style>