window.addEventListener("load", function(event) {
    new Vue({
        el: '#app',
        data : {
            inGame: false,
            hero: {
                name: 'Samwise Gamgee',
                health: 100,
                energy: 100
            },
            monster: {
                name: 'Shelob',
                health: 100,
                energy: 100
            },
            logs: [
            ]
        },
        methods: {
            startGame: function() {
                this.inGame = true;
                var vm = this;

                vm.logs.push({
                    side: 'hero',
                    message: vm.wrapName(vm.hero.name)
                        + ' is preparing to the battle...'
                });
                setTimeout(function() {
                    vm.logs.push({
                        side: 'monster',
                        message: vm.wrapName(vm.monster.name)
                            + ' is looking around...'
                    });
                }, 1000);
            },
            endGame: function() {
                this.hero.health = 100;
                this.hero.energy = 100;
                this.monster.health = 100;
                this.monster.energy = 100;
                this.logs = [];
                this.inGame = false;
            },
            wrapName: function(name) {
                return '<span class="name">' + name + '</span>';
            },
        },
        computed: {
            heroHealth: function() {
                return {
                    width: this.hero.health + '%'
                };
            },
            heroEnergy: function() {
                return {
                    width: this.hero.energy + '%'
                };
            },
            logClass: function(side) {
                return 'alert alert-primary';
            }
        }
    });
});
