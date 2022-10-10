const axios = require("axios");
const { constants, defaults } = require("./properties");

class Client {
    constructor(config){
        this.apiKey = config.apiKey;
        this.clientId = (`${this.apiKey}`).endsWith(constants.API_KEY_SUFFIX)
            ? this.apiKey : this.apiKey + constants.API_KEY_SUFFIX;
        this.redirectUrl = (config.redirectUrl || defaults.REDIRECT_URL) + ":" + (process.env.PORT || defaults.PORT);
        this.accessToken = constants.NULL;
        this.refreshToken = constants.NULL;
        this.request = function ({
            method = defaults.GET, url, data, params = {}, headers = {}
        }) {
            Object.assign(params, { apikey: this.apiKey });
            if(this.accessToken) {
                Object.assign(headers, { Authorization: `Bearer ${this.accessToken}` });
            }
            const instance = axios.create({ baseURL: constants.BASE_URL, params });
            try {
                return instance({
                    method,
                    url,
                    data,
                    headers
                });
            } catch (e) {
                console.error("Error Occured", e);
            }
        };
    }

    setAccessToken(token) {
        this.accessToken = token;
        return this;
    }

    setRefreshToken(token) {
        this.refreshToken = token;
        return this;
    }
}

module.exports = Client;