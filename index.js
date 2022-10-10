const TDAccount = require("./account");
const { account, orders, info, market } = require("./operations");
const { login, getAuthUrl } = require("./oauth");
const TDMarketData = require("./marketData");
const EventEmitter = require("eventemitter3");

const Client = require("./client");

class TDAmeritrade extends Client {}

TDAmeritrade.prototype.getAccount = account.getAccount;
TDAmeritrade.prototype.getAccounts = account.getAccounts;
TDAmeritrade.prototype.getTransaction = account.getTransaction;
TDAmeritrade.prototype.getTransactions = account.getTransactions;
TDAmeritrade.prototype.getWatchlist = account.getWatchlist;
TDAmeritrade.prototype.getWatchlists = account.getWatchlists;
TDAmeritrade.prototype.createWatchList = account.createWatchList;
TDAmeritrade.prototype.updateWatchList = account.updateWatchList;
TDAmeritrade.prototype.getPriceHistory = market.getPriceHistory;
TDAmeritrade.prototype.getOrder = orders.getOrder;
TDAmeritrade.prototype.getOrders = orders.getOrders;
TDAmeritrade.prototype.placeOrder = orders.placeOrder;
TDAmeritrade.prototype.cancelOrder = orders.cancelOrder;
TDAmeritrade.prototype.replaceOrder = orders.replaceOrder;
TDAmeritrade.prototype.getSavedOrder = orders.getSavedOrder;
TDAmeritrade.prototype.getSavedOrders = orders.getSavedOrders;
TDAmeritrade.prototype.createSavedOrder = orders.createSavedOrder;
TDAmeritrade.prototype.deleteSavedOrder = orders.deleteSavedOrder;
TDAmeritrade.prototype.replaceSavedOrder = orders.replaceSavedOrder;
TDAmeritrade.prototype.getMarketHours = market.getMarketHours;
TDAmeritrade.prototype.getQuotes = market.getQuotes;
TDAmeritrade.prototype.getQuote = market.getQuote;
TDAmeritrade.prototype.getPrefreferences = info.getAccountPreferences;
TDAmeritrade.prototype.getUserPrincipals = info.getUserPrincipals;
TDAmeritrade.prototype.updateAccountPreferences = info.updateAccountPreferences;

TDAmeritrade.prototype.login = login;
TDAmeritrade.prototype.getAuthUrl = getAuthUrl;
// TDAmeritrade.prototype.authorize = authorize
// TDAmeritrade.prototype.login = login
// TDAmeritrade.prototype.on = on

// TDAmeritrade.prototype.account = function (accountId) {
//     const instance = new TDAccount(accountId);
//     instance.request = this.request;
//     return instance;
// };

// TDAmeritrade.prototype.market = function () {
//     const instance = new TDMarketData();
//     instance.request = this.request;
//     return instance;
// };

module.exports = {
    TDAmeritrade
};

