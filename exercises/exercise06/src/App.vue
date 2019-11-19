<template>
    <div>
        <div class="claster_label">{{claster}}</div>
        <app-servers v-bind:servers="servers"></app-servers>
    </div>
</template>

<script>
    export default {
        props: ['claster', 'servers'],
        data: function() {
            return {
                claster: 'Claster-Y',
                servers: [
                    {id: 1, name: 'Alfa-Y', color: 'pink', status: 'On'},
                    {id: 2, name: 'Beta-Y', color: 'firebrick', status: 'Off'},
                    {id: 3, name: 'Gamma-Y', color: 'goldenrod', status: 'On'},
                    {id: 4, name: 'Delta-Y', color: 'darkblue', status: 'Off'},
                    {id: 5, name: 'Epsilon-Y', color: 'darkgreen', status: 'Off'}
                ]
            }
        }
    }
</script>

<style>
.claster_label {
    position: fixed;
    left: 0;
    right: 0;
    width: 100px;
    height: 50px;
    vertical-align: center;
    text-align: center;
    line-height: 50px;
    background: lightyellow;
    border-radius: 0 0 14px 0;
    box-shadow: 0 0 4px rgba(0,0,0,0.5);
    font-weight: bold;
}
</style>
