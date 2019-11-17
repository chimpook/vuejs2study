<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Another reset Name</button>
    </div>
</template>

<script>
    export default {
        props: {
            myName: String,
            resetFn: Function,
            userAge: Number
            /*
            mySecondName: [String, Array],
            myAge: {
                type: Number,
                required: false,
                default: 30
            }
            */
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName="Max";
                this.$emit('nameWasReset', this.myName);
            }
        }

    }
</script>

<style scoped>
    div {
        background-color: lightcoral !important;
    }
</style>
