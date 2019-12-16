import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    tripleCounter: state => {
        return state.counter * 3;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
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
    }
};

const actions = {
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
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};