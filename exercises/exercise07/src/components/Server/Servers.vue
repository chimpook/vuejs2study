<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers" v-bind:key="server.id"
                    @click="serverSelect(server)"
                    >
                Server #{{ server.id }} <span v-bind:class="{ [server.status + 'Style']: true }">{{ server.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
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
        methods: {
            serverSelect: function(server) {
                eventBus.serverSelect(server);
            }
        },
        created() {
            eventBus.$on('serverStatusWasChanged', (id, status) => {
                let index = this.servers.findIndex(function(element){ return (element.id === id); });
                this.servers[index].status = status;
                let t = 0;
                let s = '';
                if (['Starting', 'Restarting', 'Stopping'].includes(status)) {
                    switch (status) {
                        case 'Starting':
                            t = 3000;
                            s = 'Normal';
                            break;
                        case 'Restarting':
                            t = 5000;
                            s = 'Normal';
                            break;
                        case 'Stopping':
                            t = 4000;
                            s = 'Stopped';
                            break;
                        default:
                            break;
                    }
                    let vm = this;
                    setTimeout(function() {
                        vm.servers[index].status = s;
                    }, t);
                }

            })
        }
    }
</script>

<style scoped>
    li:hover {
        background-color: whitesmoke;
    }
</style>>

<style>
    .TestStyle {
        color: blue;
    }
    .NormalStyle {
        color: green;
    }
    .CriticalStyle {
        color: red;
    }
    .UnknownStyle {
        color: lightsalmon;
    }
    .StoppedStyle {
        color: lightgrey
    }
    .StartingStyle {
        color: lightgreen;
    }
    .RestartingStyle {
        color: lightseagreen;
    }
    .StoppingStyle {
        color: lightskyblue;
    }
</style>