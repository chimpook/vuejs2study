<template>
    <li class="list-group-item">
        Server #{{ server.id }} <span v-bind:style="{color: actualColor, 'font-weight': 'bold'}">{{server.name}}</span> 
        is {{ server.status }} <button @click="toggleServer">Toggle server</button>
    </li>
</template>

<script>
    export default {
        props: ['server'],
        data: function() {
            return {
                server: {
                    id: 0,
                    name: 'Abstract Server',
                    color: 'black',
                    status: 'Off'
                },
                inactiveColor: 'lightgray'
            }
        },
        methods: {
            toggleServer() {
                this.server.status = (this.server.status == 'Off' ? 'On' : 'Off');
            }
        },
        computed: {
            actualColor: function() {
                return this.server.status === 'On' ? this.server.color : this.inactiveColor;
            }
        }
    }
</script>

<style>

</style>
