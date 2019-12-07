<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ myString | reverse }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ 'Butterfly' | counter }}</p>
                <p>{{ myString | reverse | counter }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr>
                <p>{{ reversed(myString) }}</p>
                <p>{{ counted(reversed(myString)) }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <hr>
                <p>{{ fence(myString) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { computedMixin } from './components/computedMixin';
    export default {
        data() {
            return {
                myString: "Any string to reverse"
            }
        },
        filters: {
            reverse(string) {
                return string.split('').reverse().join('');
            }
        },
        mixins: [computedMixin],
        computed: {
            reversed() {
                return (string) => {return string.split('').reverse().join('')};
            },
            counted() {
                return (string) => {return string + ' (' + string.length + ')'};
            }
        }
    }
</script>

<style>
</style>
