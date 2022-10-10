module.exports = {
    account: {
        /**
         * 
         * @param {*} accountId 
         * @returns 
         */
        getAccount(accountId) {
            return this.request({ 
                url: `/accounts/${accountId}` 
            });
        },
        /**
         * 
         * @returns 
         */
        getAccounts() {
            return this.request({ 
                url: "/accounts" 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} transactionId 
         * @returns 
         */
        getTransaction(accountId, transactionId) {
            return this.request({ 
                url: `/accounts/${accountId}/transactions/${transactionId}` 
            });
        },
        getTransactions() {

        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} watchlistId 
         * @returns 
         */
        getWatchlist(accountId, watchlistId) {
            return this.request({ 
                url: `/accounts/${accountId}/watchlists/${watchlistId}` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @returns 
         */
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
        /**
         * 
         * @param {*} accountId 
         * @param {*} maxResults 
         * @param {*} fromEnteredTime 
         * @param {*} toEnteredTime 
         * @param {*} status 
         * @returns 
         */
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
        /**
         * 
         * @param {*} accountId 
         * @param {*} orderId 
         * @returns 
         */
        getOrder(accountId, orderId) {
            return this.request({ 
                url: `/accounts/${accountId}/orders/${orderId}` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} orderData 
         * @returns 
         */
        placeOrder(accountId, orderData) {
            return this.request({ 
                method: "post", 
                data: orderData, 
                url: `/accounts/${accountId}/orders` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} orderId 
         * @param {*} newOrderData 
         * @returns 
         */
        replaceOrder(accountId, orderId, newOrderData) {
            return this.request({ 
                method: "put", 
                data: newOrderData, 
                url: `/accounts/${accountId}/orders/orderId` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} orderId 
         * @returns 
         */
        cancelOrder(accountId, orderId) {
            return this.request({ 
                method: "delete", 
                url: `/accounts/${accountId}/orders/${orderId}` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} orderData 
         * @returns 
         */
        createSavedOrder(accountId, orderData) {
            return this.request({ 
                method: "post", 
                data: orderData, 
                url: `/accounts/${accountId}/savedorders` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} orderData 
         * @param {*} savedOrderId 
         * @returns 
         */
        deleteSavedOrder(accountId, orderData, savedOrderId) {
            return this.request({ 
                method: "delete", 
                data: orderData, 
                url: `/accounts/${accountId}/savedorders/${savedOrderId}` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} savedOrderId 
         * @returns 
         */
        getSavedOrder(accountId, savedOrderId) {
            return this.request({ 
                url: `/accounts/${accountId}/savedorders/${savedOrderId}` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @returns 
         */
        getSavedOrders(accountId) {
            return this.request({ 
                url: `/accounts/${accountId}/savedorders` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} savedOrderId 
         * @param {*} newOrderData 
         * @returns 
         */
        replaceSavedOrder(accountId, savedOrderId, newOrderData) {
            return this.request({ 
                method: "put", 
                data: newOrderData, 
                url: `/accounts/${accountId}/savedorders/${savedOrderId}` 
            });
        },
    },
    info: {
        /**
         * 
         * @param {*} accountId 
         * @returns 
         */
        getAccountPreferences(accountId) {
            return this.request({ 
                url: `/accounts/${accountId}/preferences` 
            });
        },
        /**
         * 
         * @returns 
         */
        getUserPrincipals() {
            return this.request({
                url: "/userprincipals"
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} newPreferences 
         * @returns 
         */
        updateAccountPreferences(accountId, newPreferences) {
            return this.request({
                method: "put",
                url: `/accounts/${accountId}/preferences`,
                data: newPreferences
            });
        }
    },
    market: {
        /**
         * 
         * @param {*} symbol 
         * @returns 
         */
        getQuote(symbol) {
            return this.request({ 
                url: `/marketdata/${symbol}/quotes` 
            });
        },
        /**
         * 
         * @param {*} symbols 
         * @returns 
         */
        getQuotes(symbols) {
            return this.request({ 
                url: "/marketdata/quotes",
                params: { symbol: [].concat(symbols).join(",") } 
            });
        },
        /**
         * 
         * @param {*} symbol 
         * @returns 
         */
        getPriceHistory(symbol) {
            return this.request({ 
                url: `/marketdata/${symbol}/pricehistory` 
            });
        },
        /**
         * 
         * @param {*} markets 
         * @param {*} date 
         * @returns 
         */
        getMarketHours(markets, date) {
            return this.request({ 
                url: "/marketdata/hours", 
                params: { markets: [].concat(markets).join(","), date } 
            });
        },
    },
};
