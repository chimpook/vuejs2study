<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';
    export default {
        mixins: [ fruitMixin ],
        created() {
            /* eslint-disable no-console */
            console.log('List created.');
            /* eslint-enable no-console */
        }
    }
</script>

<style>

</style>
