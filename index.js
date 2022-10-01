const axios = require("axios");
const TDAccount = require("./account");
const TDMarketData = require("./marketData");

const constants = {
    BASE_URL: "https://api.tdameritrade.com/v1",
    API_KEY_SUFFIX: "@AMER.OAUTHAP",
};
const defaults = {
    REDIRECT_URL: "https://localhost:8080",
    GET: "get",
    POST: "post",

};

class TDAmeritrade {
    constructor(config) {
        this.apiKey = config.apiKey;
        this.clientId = (`${config.apiKey}`).endsWith(constants.API_KEY_SUFFIX)
            ? config.apiKey : config.apiKey + constants.API_KEY_SUFFIX;
        this.redirectURL = config.redirectURL || defaults.REDIRECT_URL;
        this.accessToken = null;
        this.refreshToken = null;
        this.request = function ({
            method = defaults.GET, url, data, params,
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

TDAmeritrade.prototype.account = function (accountId) {
    const instance = new TDAccount(accountId);
    instance.request = this.request;
    return instance;
};

TDAmeritrade.prototype.market = function () {
    const instance = new TDMarketData();
    instance.request = this.request;
    return instance;
};

exports.TDAmeritrade = TDAmeritrade;
