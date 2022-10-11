const { TDAmeritrade } = require("./index");
const Open = require("open");

const init = async () => {
    
    const td = new TDAmeritrade({ apiKey: process.env.CLIENT_ID });

    console.log(td);
    



    // console.log(await td.getQuote("AMZN"))
    // const res = await td.login();
    // console.log("FINAL RES", res);
    // console.log(td);


    // console.log(res)
    // const account = td.account("");
    // console.log(account);

    // const response = await td.getQuote("AMZN")
    // console.log("RES", response.data)

    // const response = await td.getQuote("AMZN");
    // console.log("RES", response.data)

    const response = await td.getQuotes(["AMZN", "AAPL"]);
    console.log("RES", response.data)

    // const market = td.market();
    // console.log(account);

    // const response2 = await market.getHoursForMultipleMarkets();
    // console.log("RES", response.data);
};

(async function () {
    await init();
}());
