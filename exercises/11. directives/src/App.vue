<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myon:click="buzz" class="btn btn-success">Click me</button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            buzz() {
                this.counter++;
                /* eslint-disable no-console */
                console.log('Buzzz ' + this.counter + ' times..');
                /* eslint-enable no-console */
            }
        },
        directives: {
            'myon': {
                bind(el, binding) {
                    if (binding.arg == 'click') {
                        let fn = binding.value;
                        if (typeof fn === 'function') {
                            el.addEventListener('click', fn);
                        }
                    }
                }
            }
        }
    }
</script>

<style>
</style>
