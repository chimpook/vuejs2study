<template>

    <div class="form-group">
        <div class="row">
            <div class="col"></div>
            <div class="col-6">
            <h4>Quote</h4>
            <!--<textarea name="quotearea" id="quotearea" cols="30" rows="10"></textarea>-->
            <textarea class="form-control" name="quotearea" id="quotearea" v-model="content"></textarea>
            <div class="row justify-content-md-center">
                <div class="col col-md-auto">
                    <button class="btn btn-info" @click="addQuote">Add Quote</button>
                </div>
            </div>
            </div>
            <div class="col"></div>
        </div>
    </div>

</template>

<script>

import { eventBus } from '../main.js';

export default {
    data: function() {
        return {
            content: ""
        };
    },
    methods: {
        addQuote() {
            eventBus.addQuote(this.content);
        }
    }
}
</script>

<style scoped>

    button {
    margin-top: 20px;
    text-align: center;
    }

    h4 {
        font-weight: bold;
        font-size: 14pt;
    }

</style>