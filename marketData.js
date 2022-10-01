const operations = require("./operations");

class TDMarketData {}

/**
 * Get quote for a symbol
 * @param {string} symbol
 * @returns {Promise<any>} quote
 */
TDMarketData.prototype.getQuote = function (symbol) {
    return operations.market.getQuote.call(this, [symbol]);
};

/**
 * Get quotes for multiple symbols
 * @param {string[]} symbols 
 * @returns list of quotes
 */
TDMarketData.prototype.getQuotes = function (symbols) {
    return operations.market.getQuotes.call(this, [symbols]);
};

/**
 * Get price history for a symbol
 * @param {string} symbol
 * @returns {Promise<any>}
 */
TDMarketData.prototype.getPriceHistory = function (symbol) {
    return operations.market.getPriceHistory.call(this, [symbol]);
};

/**
 *
 * @param {string|string[]} markets The market(s) for which you are requesting market hours
 * @param {string} date The date for which market hour information is requested.
 * Valid ISO-8601 formats are `yyyy-MM-dd` and `yyyy-MM-dd'T'HH:mm:ssz`
 * @returns {Promise<any>} The market hours
 */
TDMarketData.prototype.getMarketHours = function (markets) {
    return operations.market.getMarketHours.call(this, [markets]);
};

module.exports = TDMarketData;
