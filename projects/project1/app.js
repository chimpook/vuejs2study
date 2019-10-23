window.addEventListener("load", function(event) {
    new Vue({
        el: '#app',
        data : {
            inGame: false,
            winner: 'none',
            speed: 1000,
            buttonsDisable: {
                attack: false,
                specialAttack: false,
                heal: false,
                useShield: false,
                giveUp: false
            },
            hero: {
                name: 'Samwise Gamgee',
                health: 100,
                energy: 100,
                shield: false,
                weapon: 10,
                consumptionHit: 10,
                consumptionSpecial: 20,
                special: 2,
                potions: 3,
                rest: 20
            },
            monster: {
                name: 'Shelob',
                health: 100,
                energy: 100,
                weapon: 15,
                consumptionHit: 10,
                rest: 20
            },
            logs: [
            ]
        },
        methods: {
            heroPrepare: function() {
                this.logs.unshift({
                    side: 'hero',
                    message: this.wrapName(this.hero.name)
                        + ' is preparing to the battle...'
                });
            },
            heroAttack: function() {
                if (this.hero.energy >= this.hero.consumptionHit ) {
                    var hit = Math.round(Math.random() * this.hero.weapon);
                    this.logs.unshift({
                        side: 'hero',
                        message: this.wrapName(this.hero.name)
                            + ' is attacking ' + this.wrapName(this.monster.name)
                            + ' and hits for ' + hit
                    });
                    this.hero.energy -= this.hero.consumptionHit;
                    this.monster.health -= hit;
                }
                this.monsterAction();
            },
            heroSpecialAttack: function(hit) {
                if (this.hero.energy >= this.hero.consumptionSpecial) {
                    var hit = Math.round(Math.random() * this.hero.weapon * this.hero.special);
                    this.logs.unshift({
                        side: 'hero',
                        message: this.wrapName(this.hero.name)
                            + ' is attacking ' + this.wrapName(this.monster.name)
                            + ' with a special move and hits for ' + hit
                    });
                    this.hero.energy -= this.hero.consumptionSpecial;
                    this.monster.health -= hit;
                    this.monsterAction();
                }
            },
            heroHeal: function() {
                if (this.hero.potions) {
                    this.hero.potions--;
                    this.logs.unshift({
                        side: 'hero',
                        message: this.wrapName(this.hero.name)
                            + ' is drinking a healing potion... '
                            + (this.hero.potions ? this.hero.potions + ' only left' : ' Potions are over')
                    });
                    this.hero.health = 100;
                }
                this.monsterAction();
            },
            heroUseShield: function() {
                this.hero.shield = true;
                this.logs.unshift({
                    side: 'hero',
                    message: this.wrapName(this.hero.name)
                        + ' is hiding behind his shield...'
                });
                this.hero.energy += this.hero.rest;
                if (this.hero.energy > 100) {
                    this.hero.energy = 100;
                }
                this.monsterAction();
            },
            startGame: function() {
                this.inGame = true;

                var vm = this;

                this.heroPrepare();
                this.monsterLookAround();
            },
            monsterLookAround: function() {
                var vm = this;
                var coin = vm.tossCoin();
                console.log(coin);
                setTimeout(function() {
                    vm.logs.unshift({
                        side: 'monster',
                        message: vm.wrapName(vm.monster.name)
                            + ' is looking around...'
                    });
                    setTimeout(function() {
                        if (coin) {
                            vm.logs.unshift({
                                side: 'monster',
                                message: '... and spotted ' + vm.wrapName(vm.hero.name)
                            });
                            vm.monsterAction();
                        } else {
                            vm.logs.unshift({
                                side: 'monster',
                                message: '... and saw nothing'
                            });
                        }
                    }, vm.speed);
                }, vm.speed);
            },
            monsterAction: function() {
                var vm = this;
                setTimeout(function() {
                    if (vm.monster.energy >= vm.monster.consumptionHit) {
                        vm.monsterAttack();
                    } else {
                        vm.monsterRest();
                    }
                }, vm.speed);
            },
            monsterAttack: function() {
                if (this.monster.energy > 0) {
                    var hit = Math.round(Math.random() * this.monster.weapon);
                    if (this.shield) {
                        hit = Math.round(hit/2);
                        this.shield = false;
                    }
                    this.logs.unshift({
                        side: 'monster',
                        message: this.wrapName(this.monster.name)
                            + ' is attacking ' + this.wrapName(this.hero.name)
                            + ' and hits for ' + hit
                    });
                    this.monster.energy -= this.monster.consumptionHit;
                    this.hero.health -= hit;
                }
            },
            monsterRest: function() {
                this.logs.unshift({
                    side: 'monster',
                    message: this.wrapName(this.monster.name)
                        + ' is resting... '
                });
                this.monster.energy += this.monster.rest;
            },
            giveUp: function() {
                this.hero.health = 100;
                this.hero.energy = 100;
                this.monster.health = 100;
                this.monster.energy = 100;
                this.logs = [];
                this.inGame = false;
            },
            endGame: function() {
                if (this.winner === 'hero') {
                    this.logs.unshift({
                        side: 'hero',
                        message: this.wrapName(this.hero.name)
                            + ' won the battle!!!'
                            + this.wrapName(this.monster.name)
                            + ' was defeated!'
                    });
                } else {
                    this.logs.unshift({
                        side: 'monster',
                        message: this.wrapName(this.hero.name)
                            + ' was defeated... '
                            + this.wrapName(this.monster.name) 
                            + ' won the battle...'
                    });
                }
            },
            wrapName: function(name) {
                return '<span class="name">' + name + '</span>';
            },
            tossCoin: function() {
                return Math.round(Math.random());
            },
            actionAttack: function() {
                alert("Hit!!");
            },
            buttonAttackDisable: function() {
                return true;
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
            },
            logClass: function(side) {
                return 'alert alert-primary';
            }
        },
        watch: {
            inGame: function(value) {
                var vm = this;
                if(value) {
                    
                } else {
                    
                }
            },
            'hero.health': function(value) {
                var vm = this;
                if (value<=0) {
                    vm.winner = 'monster';
                    vm.endGame();
                }
            },
            'monster.health': function(value) {
                var vm = this;
                if (value<=0) {
                    vm.winner = 'hero';
                    vm.endGame();
                }
            },
            'hero.energy': function(value) {
                var vm = this;
                if (value<vm.hero.consumptionHit) {
                    vm.logs.unshift({
                        side: 'hero',
                        message: this.wrapName(this.hero.name)
                            + ' is exhausted... '
                    });
                    vm.buttonsDisable.attack = true;
                    vm.buttonsDisable.specialAttack = true;
                } else if (value<vm.hero.consumptionSpecial) {
                    vm.logs.unshift({
                        side: 'hero',
                        message: this.wrapName(this.hero.name)
                            + ' is tired... '
                    });
                    vm.buttonsDisable.specialAttack = true;
                } else {
                    vm.buttonsDisable.attack = false;
                    vm.buttonsDisable.specialAttack = false;
                }
            },
            'monster.energy': function(value) {
                var vm = this;
                if (value<=0) {
                    vm.logs.unshift({
                        side: 'monster',
                        message: this.wrapName(this.monster.name)
                            + ' is exhausted... '
                    });
                }
            }
        }
    });
});
