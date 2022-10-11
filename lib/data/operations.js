module.exports = {
    account: {
        /**
         * 
         * @param {*} accountId 
         * @returns 
         */
        getAccount(accountId) {
            return this.fetch({ 
                url: `/accounts/${accountId}` 
            });
        },
        /**
         * 
         * @returns 
         */
        getAccounts() {
            return this.fetch({ 
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
            return this.fetch({ 
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
            return this.fetch({ 
                url: `/accounts/${accountId}/watchlists/${watchlistId}` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @returns 
         */
        getWatchlists(accountId) {
            return this.fetch({ 
                url: `/accounts/${accountId}/watchlists` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} watchlist 
         * @returns 
         */
        createWatchList(accountId, watchlist) {
            return this.fetch({
                method: "post", 
                url: `/accounts/${accountId}/watchlists`,
                data: watchlist
            });
        },

        /**
         * 
         * @param {*} accountId 
         * @param {*} watchlistId 
         * @returns 
         */
        deleteWatchList(accountId, watchlistId) {
            return this.fetch({
                method: "delete",
                url: `/accounts/${accountId}/watchlists/${watchlistId}`
            });
        },
        /**
         * Replace watchlist for a specific account.
         * This method does not verify that the symbol or asset type are valid.
         * @param {*} accountId 
         * @param {*} watchlistId 
         * @param {*} newWatchlist 
         * @returns 
         */
        replaceWatchList(accountId, watchlistId, newWatchlist) {
            return this.fetch({
                method: "put",
                url: `/accounts/${accountId}/watchlists/${watchlistId}`,
                data: newWatchlist
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} watchlistId 
         * @param {*} newWatchlist 
         * @returns 
         */
        updateWatchList(accountId, watchlistId, updatedWatchList) {
            return this.fetch({
                method: "patch",
                url: `/accounts/${accountId}/watchlists/${watchlistId}`,
                data: updatedWatchList
            });
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
            return this.fetch({
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
            return this.fetch({ 
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
            return this.fetch({ 
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
            return this.fetch({ 
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
            return this.fetch({ 
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
            return this.fetch({ 
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
            return this.fetch({ 
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
            return this.fetch({ 
                url: `/accounts/${accountId}/savedorders/${savedOrderId}` 
            });
        },
        /**
         * 
         * @param {*} accountId 
         * @returns 
         */
        getSavedOrders(accountId) {
            return this.fetch({ 
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
            return this.fetch({ 
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
            return this.fetch({ url: `/accounts/${accountId}/preferences` });
        },
        /**
         * 
         * @returns 
         */
        getUserPrincipals() {
            return this.fetch({ url: "/userprincipals" });
        },
        /**
         * 
         * @param {*} accountId 
         * @param {*} newPreferences 
         * @returns 
         */
        updateAccountPreferences(accountId, newPreferences) {
            return this.fetch({
                method: "put",
                url: `/accounts/${accountId}/preferences`,
                data: newPreferences
            });
        }
    },
    instruments: {
        /**
         * Search or retrieve instrument data, including fundamental data
         * @param {*} symbol 
         * @param {*} projection 
         * @returns 
         */
        searchInstruments(symbol, projection) {
            return this.fetch({ url: `/instruments`, params: { symbol, projection } });
        },
        /**
         * Get an instrument by CUSIP
         * @param {*} cusip 
         * @returns 
         */
        getInstrument(cusip) {
            return this.fetch({ url: `/instruments/${cusip}` });
        }

    },
    market: {
        /**
         * 
         * @param {*} symbol 
         * @returns 
         */
        getQuote(symbol) {
            return this.fetch({ url: `/marketdata/${symbol}/quotes` });
        },
        /**
         * 
         * @param {*} symbols 
         * @returns 
         */
        getQuotes(symbols) {
            return this.fetch({ 
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
            return this.fetch({ url: `/marketdata/${symbol}/pricehistory` });
        },
        /**
         * 
         * @param {*} markets 
         * @param {*} date 
         * @returns 
         */
        getMarketHours(markets, date) {
            return this.fetch({ 
                url: "/marketdata/hours", 
                params: { markets: [].concat(markets).join(","), date } 
            });
        },
        /**
         * Retrieve market hours for specified single market
         * @param {*} market 
         * @param {*} date 
         * @returns 
         */
        getMarketHour(market, date) {
            return this.fetch({
                url: `/marketdata/${market}/hours`,
                params: { date }
            });
        },
    },
    movers: {
        /**
         * Top 10 (up or down) movers by value or percent for a particular market
         * @param {*} market market code
         * @param {*} direction up or down
         * @param {*} change value or percent
         * @returns 
         */
        getMovers(market, direction, change) {
            return this.fetch({
                url: `/marketdata/${market}/movers`,
                params: { direction, change }
            })
        }
    }

};
