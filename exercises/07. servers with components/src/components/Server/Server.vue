<template>
    <li
            class="list-group-item"
            @click="serverSelect(server)"
            >
        Server #{{ server.id }} <span v-bind:class="{ [server.status + 'Style']: true }">{{ server.name }}</span>
    </li>
</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        props: {
            server: Object
        },
        methods: {
            serverSelect: function(server) {
                eventBus.serverSelect(server);
            }
        },
        created() {
            eventBus.$on('serverStatusWasChanged', (id, status) => {
                if (this.server.id === id) {
                    this.server.status = status;
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
                            vm.server.status = s;
                        }, t);
                    }
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