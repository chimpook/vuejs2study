<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            };
        },
        destroyed() {
            /* eslint-disable no-console */
            console.log('Destroyed!');
            /* eslint-enable no-console */
        },
        activated() {
            /* eslint-disable no-console */
            console.log('Activated!');
            /* eslint-enable no-console */
        },
        deactivated() {
            /* eslint-disable no-console */
            console.log('Deactivated!');
            /* eslint-enable no-console */
        }
    }
</script>

<style scoped>

</style>