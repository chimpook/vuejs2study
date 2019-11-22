<template>
    
    <div class="form-group">
        <div class="row">
            <app-quote v-for="(item,index) in list" v-bind:key="index">{{ item }}</app-quote>
        </div>
    </div>

</template>

<script>
import Quote from './Quote.vue';

export default {
    data: function() {
        return {
            list: [
                "Just a Quote to start with something",
                "Just a Quote to start with something else"
            ]
        };
    },
    components: {
        appQuote: Quote
    }
}
</script>

<style scoped>

</style>