<template>
    <div class="row">
        <app-stock v-for="stock in stocks" v-bind:key="stock.id" v-bind:stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock';
export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>