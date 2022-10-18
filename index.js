const TDClient = require("./lib/client");

class TDAmeritrade extends TDClient {
    constructor(config) {
        super(config);
    }
}

module.exports = {
    TDAmeritrade
};
