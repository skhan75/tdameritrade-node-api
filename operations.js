module.exports = {
    account: {
        getAccount(accountId) {
            return this.request({ 
                url: `/accounts/${accountId}` 
            });
        },
        getAccounts() {
            return this.request({ 
                url: "/accounts" 
            });
        },
        getTransaction(accountId, transactionId) {
            return this.request({ 
                url: `/accounts/${accountId}/transactions/${transactionId}` 
            });
        },
        getTransactions() {

        },
        getWatchlist(accountId, watchlistId) {
            return this.request({ 
                url: `/accounts/${accountId}/watchlists/${watchlistId}` 
            });
        },
        getWatchlists(accountId) {
            return this.request({ 
                url: `/accounts/${accountId}/watchlists` 
            });
        },
        createWatchList() {

        },
        updateWatchList() {

        },
    },
    orders: {
        getOrders(accountId, maxResults, fromEnteredTime, toEnteredTime, status) {
            return this.request({
                url: `/accounts/${accountId}/orders`,
                params: {
                    maxResults,
                    fromEnteredTime,
                    toEnteredTime,
                    status,
                },
            });
        },
        getOrder(accountId, orderId) {
            return this.request({ 
                url: `/accounts/${accountId}/orders/${orderId}` 
            });
        },
        placeOrder(accountId, orderData) {
            return this.request({ 
                method: "post", 
                data: orderData, 
                url: `/accounts/${accountId}/orders` 
            });
        },
        replaceOrder(accountId, orderId, newOrderData) {
            return this.request({ 
                method: "put", 
                data: newOrderData, 
                url: `/accounts/${accountId}/orders/orderId` 
            });
        },
        cancelOrder(accountId, orderId) {
            return this.request({ 
                method: "delete", 
                url: `/accounts/${accountId}/orders/${orderId}` 
            });
        },
        createSavedOrder(accountId, orderData) {
            return this.request({ 
                method: "post", 
                data: orderData, 
                url: `/accounts/${accountId}/savedorders` 
            });
        },
        deleteSavedOrder(accountId, orderData, savedOrderId) {
            return this.request({ 
                method: "delete", 
                data: orderData, 
                url: `/accounts/${accountId}/savedorders/${savedOrderId}` 
            });
        },
        getSavedOrder(accountId, savedOrderId) {
            return this.request({ 
                url: `/accounts/${accountId}/savedorders/${savedOrderId}` 
            });
        },
        getSavedOrders(accountId) {
            return this.request({ 
                url: `/accounts/${accountId}/savedorders` 
            });
        },
        replaceSavedOrder(accountId, savedOrderId, newOrderData) {
            return this.request({ 
                method: "put", 
                data: newOrderData, 
                url: `/accounts/${accountId}/savedorders/${savedOrderId}` 
            });
        },
    },
    info: {
        getPreferences(accountId) {
            return this.request({ 
                url: `/accounts/${accountId}/preferences` 
            });
        },
    },
    market: {
        getQuote(symbol) {
            return this.request({ 
                url: `/marketdata/${symbol}/quotes` 
            });
        },
        getQuotes(symbols) {
            return this.request({ 
                url: "/marketdata/quotes",
                params: { symbol: [].concat(symbols).join(",") } 
            });
        },
        getPriceHistory(symbol) {
            return this.request({ 
                url: `/marketdata/${symbol}/pricehistory` 
            });
        },
        getMarketHours(markets, date) {
            return this.request({ 
                url: "/marketdata/hours", 
                params: { markets: [].concat(markets).join(","), date } 
            });
        },
    },
};
