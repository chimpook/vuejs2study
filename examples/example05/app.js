window.addEventListener("load", function(event) {
    new Vue({
        el: '#app',
        data: {
            link: 'http://apple.com'
        },
        methods: {
            changeLink: function() {
                this.link = 'http://debian.org'
            }
        }
    });
});
