<template>

    <div class="form-group">
        <div class="row">
            <div class="col"></div>
            <div class="col-6">
            <h3>Quote</h3>
            <!--<textarea name="quotearea" id="quotearea" cols="30" rows="10"></textarea>-->
            <textarea class="form-control" name="quotearea" id="quotearea"></textarea>
            <div class="row">
                <div class="col"></div>
                <div class="col">
                <button class="btn btn-primary" @click="addQuote">Add Quote</button>
                </div>
                <div class="col"></div>
            </div>
            </div>
            <div class="col"></div>
        </div>
    </div>

</template>

<script>

import { eventBus } from '../main.js';

export default {
    methods: {
        addQuote() {
            eventBus.addQuote('QQ');
        }
    }
}
</script>

<style scoped>

button {
  margin-top: 20px;
  text-align: center;
}

</style>