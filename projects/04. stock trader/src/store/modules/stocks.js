import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        /* eslint-disable no-console */
        console.log(state);
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (0.5 + Math.random()));
        });
    },
    'BUY_STOCK' (state) {
        /* eslint-disable no-console */
        console.log(state);
    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        /* eslint-disable no-console */
        //console.log(order);
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS', stocks);
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};