<template>
    <div>
        <div class="form-group">
            <label for="full_name">Full Name</label>
            <input type="text" id="full_name" class="form-control" 
                v-bind:value="value" @input="full_name = $event.target.value">
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            full_name: ''
        }
    },
    watch: {
        full_name(value) {
            /* eslint-disable no-console */
            // console.log(value);
            /* eslint-enable no-console */
            this.$emit('input', value);
        }
    }
}
</script>

<style scoped>

</style>