import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        tripleCounter: state => {
            return state.counter * 3;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        increment: (state, payload) => {
            if (payload) {
                state.counter += payload;
            } else {
                state.counter++;
            }
        },
        decrement: (state, payload) => {
            if (payload) {
                state.counter -= payload;
            } else {
                state.counter--;
            }
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        /*
        increment: context => {
            context.commit('increment'); 
        }
        */
        increment: ({ commit }, payload) => {
            commit('increment', payload);
        },
        decrement: ({ commit }) => {
            commit('decrement');
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            },payload.duration);
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            },payload.duration); 
        },
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload);
        }
    }
});