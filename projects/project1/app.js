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
            }
        },
        methods: {
            startGame: function() {
                this.inGame = true;
            },
            endGame: function() {
                this.hero.health = 100;
                this.hero.energy = 100;
                this.monster.health = 100;
                this.monster.energy = 100;
                this.inGame = false;
            }
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
            }
        }
    });
});
