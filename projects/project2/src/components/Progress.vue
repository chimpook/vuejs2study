<template>

    <div class="form-group">
        <div class="row">
            <div class="col-12">
            <h2>Quotes added</h2>
            <div class="progress">
                <div class="progress-bar" role="progressbar" v-bind:style="{ width: width }" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10">
                    {{ num }}/{{ max }}
                </div>
            </div>
            </div>
        </div>
    </div>

</template>

<script>

import { eventBus } from '../main.js';

export default {
    data: function() {
        return {
            num: 0,
            max: 1
            //width: "50%"
        }
    },
    computed: {
        width() {
            return (this.num * 100 / this.max) + '%' ;
        }
    },
    created() {
        eventBus.$on('updateNumberQuotes', (numberQuotes) => {
            this.num = numberQuotes;
        });
        eventBus.$on('updateMaxQuotes', (maxQuotes) => {
            this.max = maxQuotes;
        });
    }
}
</script>

<style scoped>

</style>