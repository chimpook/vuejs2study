<template>
<div>
    <!--
    <p>Counter is {{ counter }}</p>
    <p>Number of clicks: {{ clicks }}</p>
    -->
    <p>Counter is {{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
    //props: [ 'counter' ]
/*
    computed: {
        counter() {
            // return this.$store.state.counter * 3;
            return this.$store.getters.tripleCounter;
        },
        clicks() {
            return this.$store.getters.stringCounter;
        }
    }
*/
// computed: mapGetters({ propertyName: 'doubleCounter })
/*
    computed: mapGetters([
        'doubleCounter',
        'stringCounter'
    ])
*/
    computed: {
/*
        ...mapGetters([
            'doubleCounter',
            'stringCounter'
        ]),
*/
        ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER,
            stringCounter: types.CLICK_COUNTER
        }),
        ourOwn() {
            return 'something';
        } 
    }
}
</script>