const { constants, defaults } = require("./properties");
const axios = require("axios");

class Request {
    constructor() {}

    fetch({ method = defaults.GET, url, data, params = {}, headers = {} }) {
        Object.assign(params, { apikey: this.apiKey });
        if (this.accessToken) {
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
    }
}

module.exports = Request;