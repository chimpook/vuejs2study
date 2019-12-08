<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
export default {
    methods: {
        increment() {
            this.$emit('update', 1);
        },
        decrement() {
            this.$emit('update', -1);
        }
    }
}
</script>

<style scoped>
button+button {
    margin-left: 12px;
}
</style>