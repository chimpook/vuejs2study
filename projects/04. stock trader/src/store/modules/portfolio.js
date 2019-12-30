const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {

        let sum = stockPrice * quantity;
        let act_sum = 0;
        let act_quantity = 0;
        if (state.funds > sum) {
            act_quantity = quantity;
            act_sum = sum;
        } else {
            act_quantity = Math.round(state.funds / stockPrice);
            act_sum = act_quantity * stockPrice;
        }

        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += act_quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: act_quantity
            });
        }
        state.funds -= act_sum;
    },
    'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
            state.funds += stockPrice * quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
            state.funds += stockPrice * record.quantity;
        }
    },
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map( stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}