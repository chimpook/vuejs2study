<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Servers' Infrastructure Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <app-server v-for="server in servers" v-bind:key="server.id" v-bind:server="server"></app-server>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Server from './Server.vue';
    export default {
        props: ['servers'],
        data: function() {
            return {
                servers: [
                    {id: 1, name: 'Alfa-Z', color: 'pink', status: 'On'},
                    {id: 2, name: 'Beta-Z', color: 'firebrick', status: 'Off'},
                    {id: 3, name: 'Gamma-Z', color: 'goldenrod', status: 'On'},
                ]
            }
        },
        components: {
            'app-server': Server
        }
    }
</script>

<style>

</style>
