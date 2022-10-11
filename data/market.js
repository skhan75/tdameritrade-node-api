class TDMarket {}

/**
 * Get quote for a symbol
 * @param {string} symbol
 * @returns {Promise<any>} quote
 */
TDMarket.prototype.getQuote = function (symbol) {
    return this.fetch({ url: `/marketdata/${symbol}/quotes` });
};

/**
 * Get quotes for multiple symbols
 * @param {string[]} symbols 
 * @returns list of quotes
 */
TDMarket.prototype.getQuotes = function (symbols) {
    return this.fetch({
        url: "/marketdata/quotes",
        params: { symbol: [].concat(symbols).join(",") }
    });
};

/**
 * Get price history for a symbol
 * @param {string} symbol
 * @returns {Promise<any>}
 */
TDMarket.prototype.getPriceHistory = function (symbol) {
    return this.fetch({ url: `/marketdata/${symbol}/pricehistory` });
};

/**
 *
 * @param {string|string[]} markets The market(s) for which you are requesting market hours
 * @param {string} date The date for which market hour information is requested.
 * Valid ISO-8601 formats are `yyyy-MM-dd` and `yyyy-MM-dd'T'HH:mm:ssz`
 * @returns {Promise<any>} The market hours
 */
TDMarket.prototype.getMarketHours = function (markets, date) {
    return this.fetch({
        url: "/marketdata/hours",
        params: { markets: [].concat(markets).join(","), date }
    });
};

/**
 * Retrieve market hours for specified single market
 * @param {*} market 
 * @param {*} date 
 * @returns 
 */
TDMarket.prototype.getMarketHour = function (market, date) {
    return this.fetch({
        url: `/marketdata/${market}/hours`,
        params: { date }
    });
};

module.exports = TDMarket;
