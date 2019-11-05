<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Server Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <app-server v-for="server in 5" v-bind:key="server">
                    </app-server>
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
        data: function() {
            return {
                servers: [
                    {name: 'Alfa', status: 1},
                    {name: 'Beta', status: 0},
                    {name: 'Gamma', status: 1},
                    {name: 'Delta', status: 0},
                    {name: 'Epsilon', status: 0},
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
