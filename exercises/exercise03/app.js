window.addEventListener("load", function(event) {
    new Vue({
        el: '#exercise',
        data: {
            value: 0,
            result: '',
            limit: 37
        },
        watch: {
            value: function(value) {
                this.result = this.value >= this.limit ? 'done' : 'not there yet';
            },
            result: function(value) {
                var vm = this;
                if (value == 'done') {
                    setTimeout(function() {
                        vm.value = 0;
                    }, 5000);
                }
            }
        }
    });
});
