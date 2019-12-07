<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add berries</button>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="(fruit,index) in filteredFruits" :key="index">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './components/List';
    import { fruitMixin } from './components/fruitMixin';
    export default {
        data() {
            return {
                text: 'Hello kitty!'
            }
        },
        components: {
            appList: List
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.filterText);
                });
            }
        },
        mixins: [ fruitMixin ],
        created() {
            // Mixins created() will be executed firstly
            // then - components created()
            /* eslint-disable no-console */
            console.log('App created.');
            /* eslint-enable no-console */
        }
    }
</script>

<style>

</style>
