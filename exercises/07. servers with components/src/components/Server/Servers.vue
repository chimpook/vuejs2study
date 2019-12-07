<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="server in servers" v-bind:key="server.id" v-bind:server="server"></app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';
    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, name: "Alfa", status: "Normal"},
                    { id: 2, name: "Beta", status: "Critical"},
                    { id: 3, name: "Gamma", status: "Unknown"},
                    { id: 4, name: "Delta", status: "Normal"},
                    { id: 5, name: "Eta", status: "Unknown"}
                ]
            };
        },
        components: {
            appServer: Server
        }
    }
</script>

<style scoped>

</style>