window.addEventListener("load", function(event) {
    new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            myAlert: function(event) {
                alert('Beware! The button is clicked!');
            },
            storeValue: function(event) {
                this.value = event.target.value;
            },
            resetValue: function(event) {
                this.value = '';
            }
        }
    });
});
