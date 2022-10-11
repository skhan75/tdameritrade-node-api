const TDClient = require("./client")

class TDAmeritrade extends TDClient {
    constructor(config) {
        super(config);
    }
}
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

