const { market, account, orders, movers, instruments, info } = require("./data/operations");
const { login, getAuthUrl } = require("./oauth");
const Base = require("./base")
const Request = require("../request");

class TDClient extends Base {
    constructor(config) {
        super(config);
        this.fetch = new Request().fetch;
    }
}

TDClient.prototype.getAccount = account.getAccount;
TDClient.prototype.getAccounts = account.getAccounts;
TDClient.prototype.getTransaction = account.getTransaction;
TDClient.prototype.getTransactions = account.getTransactions;
TDClient.prototype.getWatchlist = account.getWatchlist;
TDClient.prototype.getWatchlists = account.getWatchlists;
TDClient.prototype.createWatchList = account.createWatchList;
TDClient.prototype.updateWatchList = account.updateWatchList;
TDClient.prototype.deleteWatchList = account.deleteWatchList;
TDClient.prototype.replaceWatchList = account.replaceWatchList;
TDClient.prototype.getQuote = market.getQuote;
TDClient.prototype.getQuotes = market.getQuotes;
TDClient.prototype.getPriceHistory = market.getPriceHistory;
TDClient.prototype.getMarketHours = market.getMarketHours;
TDClient.prototype.getMarketHour = market.getMarketHour;
TDClient.prototype.getOrder = orders.getOrder;
TDClient.prototype.getOrders = orders.getOrders;
TDClient.prototype.placeOrder = orders.placeOrder;
TDClient.prototype.cancelOrder = orders.cancelOrder;
TDClient.prototype.replaceOrder = orders.replaceOrder;
TDClient.prototype.getSavedOrder = orders.getSavedOrder;
TDClient.prototype.getSavedOrders = orders.getSavedOrders;
TDClient.prototype.createSavedOrder = orders.createSavedOrder;
TDClient.prototype.deleteSavedOrder = orders.deleteSavedOrder;
TDClient.prototype.replaceSavedOrder = orders.replaceSavedOrder;
TDClient.prototype.getPrefreferences = info.getAccountPreferences;
TDClient.prototype.getUserPrincipals = info.getUserPrincipals;
TDClient.prototype.updateAccountPreferences = info.updateAccountPreferences;
TDClient.prototype.searchInstruments = instruments.searchInstruments;
TDClient.prototype.getInstrument = instruments.getInstrument;
TDClient.prototype.getMovers = movers.getMovers;

TDClient.prototype.login = login;
TDClient.prototype.getAuthUrl = getAuthUrl;


module.exports = TDClient;