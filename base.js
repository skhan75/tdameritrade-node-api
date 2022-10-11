const { constants, defaults } = require("./properties");

// const TDMarketData = require("./data/marketData")
const Request = require("./request");
// const TDMarketData = require("./data/marketData");

class Base extends Request {
   
    constructor(config){
        super(config);
        this.apiKey = config.apiKey;
        this.clientId = (`${this.apiKey}`).endsWith(constants.API_KEY_SUFFIX)
            ? this.apiKey : this.apiKey + constants.API_KEY_SUFFIX;
        this.redirectUrl = (config.redirectUrl || defaults.REDIRECT_URL) + ":" + (process.env.PORT || defaults.PORT);
        this.accessToken = constants.NULL;
        this.refreshToken = constants.NULL;
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





// Base.prototype.getQuotes = market.getQuotes;
// Base.prototype.getQuote = market.getQuote;
// Base.prototype.getQuote = new TDMarketData().getQuote;



module.exports = Base;