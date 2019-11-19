<template>
    <div class="container">
        <div class="col-xs-12 col-sm-6" v-if="server.id">
            <h3>Server: {{ server.name }}</h3>
            <p>Status: <span v-bind:class="{ [server.status + 'Style']: true}">{{ server.status }}</span></p>
            <button v-on:click="startServer" v-if="canStartServer" type="button" class="btn btn-success">Запустить</button>
            <button v-on:click="restartServer" v-if="canRestartServer" type="button" class="btn btn-primary">Перезапустить</button>
            <button v-on:click="stopServer" v-if="canStopServer" type="button" class="btn btn-danger">Остановить</button>

        </div>
        <div class="col-xs-12 col-sm-6" v-else>
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
    export default {
        data: function() {
            return {
                server: {}
            }
        },
        methods: {
            startServer() {
                eventBus.serverChangeStatus(this.server.id, 'Starting');
            },
            restartServer() {
                eventBus.serverChangeStatus(this.server.id, 'Restarting');
            },
            stopServer() {
                eventBus.serverChangeStatus(this.server.id, 'Stopping');
            }
        },
        computed: {
            canStartServer() {
                return ["Stopped"].includes(this.server.status);
            },
            canRestartServer() {
                return ["Normal", "Unknown", "Critical"].includes(this.server.status);
            },
            canStopServer() {
                return ["Normal", "Unknown", "Critical"].includes(this.server.status);
            }
        },
        created() {
            eventBus.$on('serverWasSelected', (server) => {
                this.server = server;
            })
        }
    }
</script>

<style>

</style>
