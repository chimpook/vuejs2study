window.addEventListener("load", function(event) {
    new Vue({
        el: '#exercise',
        data: {
            effectActive: false,
            effectToggleFlag: false,
            effectIntervalId: 0,
            myClassShape: 'square',
            myClassColor: 'goldenrod',
            myClassForm: 'curved',
            myClass: 'square goldenrod',
            myClass2: 'square goldenrod',
            roundedFlag: false,
            mySize: 100,
            progressHeight: '24px',
            progressWidth: '240px',
            progressDone: false,
            progressActive: false,
            progressValue: 0,
            progressSpeed: 10
        },
        methods: {
            startEffect: function() {
                this.effectActive = true;
            },
            stopEffect: function() {
                this.effectActive = false;
            },
            progressStart: function() {
                this.progressActive = true;
            },
            progressStop: function() {
                this.progressActive = false;
            },
            progressReset: function() {
                this.progressActive = false;
                this.progressDone = false;
                this.progressValue = 0;
            }
        },
        computed: {
            effectClass: function() {
                return {
                    highlight: this.effectActive && this.effectToggleFlag,
                    shrink: this.effectActive && !this.effectToggleFlag
                };
            },
            rounded: function() {
                return {
                    curved: this.roundedFlag
                };
            },
            myStyle: function() {
                return {
                    margin: '12px',
                    backgroundColor: 'pink',
                    width: this.mySize + 'px',
                    height: this.mySize + 'px'
                };
            },
            progressMessage: function() {
                return this.progressDone ? 'done' : '';
            },
            progressSetStyle: function() {
                return {
                    width: this.progressWidth,
                    height: this.progressHeight
                };
            },
            progressSetValue: function() {
                return {
                    width: this.progressValue + '%'
                };
            }
        },
        watch: {
            effectActive: function(value) {
                var vm = this;
                if (value) {
                    vm.effectIntervalId = setInterval(function() {
                        vm.effectToggleFlag = !vm.effectToggleFlag;
                    }, 1000);
                } else {
                    if (vm.effectIntervalId) {
                        clearInterval(vm.effectIntervalId);
                    }
                }
            },
            progressActive: function(value) {
                var vm = this;
                if (value) {
                    vm.progressIntervalId = setInterval(function() {
                        if (vm.progressValue < 100) {
                            vm.progressValue += vm.progressSpeed;
                        } else {
                            vm.progressDone = true;
                            vm.progressStop();
                        };
                    },1000);
                } else {
                    clearInterval(vm.progressIntervalId);
                }
            }
        }
    });
});
