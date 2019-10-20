window.addEventListener("load", function(event) {
    new Vue({
        el: '#app',
        data : {
            attachRed: false
        },
        computed: {
            divClasses: function() {
                return {
                    red: this.attachRed,
                    blue: !this.attachRed
                };
            }
        }
    });
});
