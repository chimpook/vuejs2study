<template>
    
    <div class="form-group">
        <div class="row">
            <app-quote v-for="(item,index) in list" v-bind:key="index" v-bind:index="index">{{ item }}</app-quote>
        </div>
    </div>

</template>

<script>
import { eventBus } from '../main.js';
import Quote from './Quote.vue';

export default {
    data: function() {
        return {
            maxQuotes: 10,
            list: [
                "Just a Quote to start with something",
                "Just a Quote to start with something else"
            ]
        };
    },
    components: {
        appQuote: Quote
    },
    created() {
        eventBus.maxQuotes = this.maxQuotes;
        eventBus.numberQuotes = this.list.length;
        eventBus.$on('quoteWasAdded', (quote) => {
            this.list.push(quote ? quote : "Empty quote");
            eventBus.numberQuotes = this.list.length;
        });
        eventBus.$on('quoteWasDropped', (index) => {
            this.list.splice(index, 1);
        });
    }
}
</script>

<style scoped>

</style>