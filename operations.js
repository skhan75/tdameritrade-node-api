module.exports = {
    account: {
        getAccount: function (accountId) {
            return this.request({ url: `/accounts/${accountId}` });
        },
        getAccounts: function () {
            return this.request({ url: "/accounts" });
        },
        getTransaction: function (accountId, transactionId) {
            return this.request({ url: `/accounts/${accountId}/transactions/${transactionId}` });
        },
        getTransactions: function () {

        },
        getWatchlist: function (accountId, watchlistId) { 
            return this.request({ url: `/accounts/${accountId}/watchlists/${watchlistId}` });
        },
        getWatchlists: function () { 
            return this.request({ url: `/accounts/${accountId}/watchlists` });
        },
        createWatchList: function () {

        },
        updateWatchList: function () {

        }
    },
    orders: {
        getOrders: function (accountId, maxResults, fromEnteredTime, toEnteredTime, status) {
            return this.request({ url: `/accounts/${accountId}/orders`, params: { 
                maxResults,
                fromEnteredTime,
                toEnteredTime,
                status
            } });
        },
        getOrder: function (accountId, orderId) {
            return this.request({ url: `/accounts/${accountId}/orders/${orderId}` });
        },
        placeOrder: function () { 

        },
        replaceOrder: function () { 

        },
        cancelOrder: function () { 

        },
        createSavedOrder: function () { 

        },
        deleteSavedOrder: function () {

        },
        getSavedOrder: function (accountId, savedOrderId) {

        },
        getSavedOrders: function () {

        },
        replaceSavedOrder: function () {

        },
    },
    info: {
        getPreferences: function (accountId) {
            return this.request({ url: `/accounts/${accountId}/preferences` });
        }
    },
    market: {
        getQuote: function (symbol) {
            return this.request({ url: `/marketdata/${symbol}/quotes` });
        },
        getQuotes: function (symbols) {
            return this.request({ url: `/marketdata/quotes`, params: { symbol: [].concat(symbols).join(',') } });
        },
        getPriceHistory: function (symbol) {
            return this.request({ url: `/marketdata/${symbol}/pricehistory` });
        },
        getMarketHours: function (markets) {
            return this.request({ url: `/marketdata/hours`, params: { markets: [].concat(markets).join(','),  date } });
        },
        getMovers

    }
}