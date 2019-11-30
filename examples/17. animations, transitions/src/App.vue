<template>
    <div class="container">

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <button @click="toggle(0)" class="btn btn-primary">Show alert 0</button>
                <br>
                {{ show }}
            </div>
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <transition name="fade">
                    <div v-show="show[0]" class="alert alert-info">This is some info</div>
                </transition>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <button @click="toggle(1)" class="btn btn-primary">Show alert 1</button>
                <br>
            </div>
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <transition name="slide" type="animation" appear>
                    <div v-if="show[1]" class="alert alert-info">This is some info</div>
                </transition>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <button @click="toggle(2)" class="btn btn-primary">Show alert 2</button>
                <br>
            </div>
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <!-- appear:  Initial animation -->
                <transition 
                    appear 
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    > 
                    <div v-if="show[2]" class="alert alert-info">This is some info</div>
                </transition>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
            </div>
        </div>


        <div class="row">
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <button @click="toggle(3)" class="btn btn-primary">Show alert 3</button>
                <br>
            </div>
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <transition :name="alertAnimation" appear>
                    <div v-if="show[3]" class="alert alert-info">This is some info</div>
                </transition>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <button @click="toggle(4)" class="btn btn-primary">Show alert 4</button>
                <br>
            </div>
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <transition :name="alertAnimation" appear mode="out-in"> <!-- Without "mode" it will be jumping -->
                    <div v-if="show[4]" class="alert alert-info" key="info">This is some info</div>
                    <!-- Without "key" it will not be animated -->
                    <div v-else class="alert alert-warning" key="warning">This is some warning</div>
                </transition>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <button @click="load = !load" class="btn btn-primary">Load / Remove Element</button>
                <br>
            </div>
            <div class="col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-3">
                <transition 
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                >
                    <div v-if="load" style="width: 300px; height: 100px; background-color: lightgreen;"></div>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: [true, true, true, true, true],
                alertAnimation: 'fade',
                load: true,
                elementWidth: 100
            }
        },
        methods: {
            toggle(index) {
                this.$set(this.show, index, !this.show[index]);
            },
            beforeEnter(el) {
                /* eslint-disable no-console */
                //console.log('beforeEnter!');
                console.log("beforeEnter");
                /* eslint-enable no-console */
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                /* eslint-disable no-console */
                console.log("enter");
                /* eslint-enable no-console */
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
                //done();
            },
            afterEnter(/*el*/) {
                /* eslint-disable no-console */
                console.log("afterEnter");
                /* eslint-enable no-console */
            },
            enterCancelled(/*el*/) {
                /* eslint-disable no-console */
                console.log("enterCancelled");
                /* eslint-enable no-console */
            },
            beforeLeave(el) {
                /* eslint-disable no-console */
                //console.log('beforeEnter!');
                console.log("beforeLeave");
                /* eslint-enable no-console */
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                /* eslint-disable no-console */
                console.log("leave");
                /* eslint-enable no-console */
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
                //done();
            },
            afterLeave(/*el*/) {
                /* eslint-disable no-console */
                console.log("afterLeave");
                /* eslint-enable no-console */
            },
            leaveCancelled(/*el*/) {
                /* eslint-disable no-console */
                //console.log(arguments.callee.toString().match(/function ([^\(]+)/)[1]);
                console.log("leaveCancelled");
                /* eslint-enable no-console */
            },
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
        /*opacity: 1;*/
    }

    .fade-leave {
        /* opacity: 1;*/
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        /*transform: translateY(20px);*/
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }

        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(20px);
        }
    }

</style>
