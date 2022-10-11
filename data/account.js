const operations = require("../operations");
const Request = require("../request");
const fetch = new Request().fetch;

class TDAccount {}

/**
 * Get TD Account balances, positions and orders for a specific account
 * @returns {Promise<any>} The Account
 */
TDAccount.prototype.getAccount = function (accountId) {
    return this.fetch(arguments, { url: `/accounts/${accountId}` });
};

/**
 * 
 * @returns 
 */
TDAccount.prototype.getAccounts = function () {
    return this.fetch(arguments, { url: "/accounts" });
}

TDAccount.prototype.getTransaction = function(accountId, transactionId) {
    
}

/**
 * Get all the orders associated with a specific account
 * @returns
 */
TDAccount.prototype.getOrders = function (params) {
    
    return operations.orders.getOrders.call(this, [this.accountId, params]);
};

/**
 * Get a specific order for a specific account
 * @returns
 */
TDAccount.prototype.getOrder = function (orderId) {
    return operations.orders.getOrder.call(this, [this.accountId, orderId]);
};

/**
 * Place an order for a specific account
 * Place Order Sample Guide {@link https://developer.tdameritrade.com/content/place-order-samples}
 * @param {*} order
 * @returns
 */
TDAccount.prototype.placeOrder = function (orderData) {
    return operations.orders.placeOrder.call(this, [this.accountId, orderData]);
};

/**
 * Replace an existing order for an account.
 * The existing order will be replaced by the new order. Once replaced,
 * the old order will be canceled and a new order will be created.
 * Place Order Sample Guide {@link https://developer.tdameritrade.com/content/place-order-samples}
 * @param {*} order
 * @returns
 */
TDAccount.prototype.replaceOrder = function (order, orderId) {
    return operations.orders.replaceOrder.call(this, [this.accountId, orderId, order]);
};

/**
 * Cancel a specific order for a specific account.
 * @param {*} order
 * @returns
 */
TDAccount.prototype.cancelOrder = function (orderId) {
    return operations.orders.cancelOrder.call(this, [this.accountId, orderId]);
};

/**
 * Save an order for a specific account
 * Place Order Sample Guide {@link https://developer.tdameritrade.com/content/place-order-samples}
 * @param {*} savedOrder
 * @returns
 */
TDAccount.prototype.createSavedOrder = function (savedOrder) {
    return operations.orders.createSavedOrder.call(this, [this.accountId, savedOrder]);
};

/**
 * Get a specific watchlist for a specific account
 * @param {*} watchlistId
 * @returns
 */
TDAccount.prototype.getWatchlist = function (watchlistId) {
    return operations.account.getWatchlist.call(this, [this.accountId, watchlistId]);
};

/**
 * Get a all watchlists for a specific account
 * @returns
 */
TDAccount.prototype.getWatchlists = function () {
    return operations.account.getWatchlists.call(this, [this.accountId]);
};

/**
 * Get preferences for a specific account
 * @returns
 */
TDAccount.prototype.getPreferences = function () {
    return operations.info.getAccountPreferences.call(this, [this.accountId]);
};

module.exports = TDAccount;
