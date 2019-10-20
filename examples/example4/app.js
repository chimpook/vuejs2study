window.addEventListener("load", function(event) {
    new Vue({
        el: '#app',
        data: {
            counter: 0,
            secondCounter: 0
        },
        computed: {
            output: function() {
                console.log('Computed: ' + this.counter);
                return this.counter > 5 ? '>5' : (this.counter < 5 ? '<5' : '=5')
            }
        },
        methods: {
            result: function() {
                console.log('Method: ' + this.counter);
                return this.counter > 5 ? '>5' : (this.counter < 5 ? '<5' : '=5')
            },
            secondResult: function() {
                return this.secondCounter > 10 ? '>10' : (this.secondCounter < 10 ? '<10' : '=10')
            }
        }
    });
});
