<template>
    <li class="list-group-item">
        Server #{{ index }} is {{ status }} <button @click="toggleServer">Toggle server</button>
    </li>
</template>

<script>
    export default {
        data: function() {
            return {
                name: '',
                status: 'Off'
            }
        },
        methods: {
            toggleServer() {
                this.status = (this.status == 'Off' ? 'On' : 'Off');
            }
        }
    }
</script>

<style>

</style>
