const axios = require("axios");
const TDAccount = require("./account");
const { account, orders, info, market } = require("./operations");
const { generateToken } = require("./oauth");
const TDMarketData = require("./marketData");
const EventEmitter = require("eventemitter3");
const { constants, defaults } = require("./properties");

class TDAmeritrade {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.clientId = (`${config.apiKey}`).endsWith(constants.API_KEY_SUFFIX)
            ? config.apiKey : config.apiKey + constants.API_KEY_SUFFIX;
        this.redirectUrl = (config.redirectUrl || defaults.REDIRECT_URL) + ":" + (process.env.PORT || defaults.PORT);
        this.accessToken = constants.NULL;
        this.refreshToken = constants.NULL;
        this.request = function ({
            method = defaults.GET, url, data, params={},
        }) {
            Object.assign(params, { apikey: config.apiKey });
            const instance = axios.create({ baseURL: constants.BASE_URL, params });
            try {
                return instance({
                    method,
                    url,
                    data,
                });
            } catch (e) {
                console.error("Error Occured", e);
            }
        };
    }
}

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

TDAmeritrade.prototype.generateToken = generateToken;
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

exports.TDAmeritrade = TDAmeritrade;
