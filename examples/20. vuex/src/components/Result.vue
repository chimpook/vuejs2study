<template>
    <p>Counter is {{ counter }}</p>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';
export default {
    //props: [ 'counter' ]
/*    
    computed: {
        counter() {
            //return this.$store.state.counter * 2;
            return this.$store.getters.doubleCounter;
        }
    }
*/  
    computed: {
        ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER,
        })
    }
}
</script>