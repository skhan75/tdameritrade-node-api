const { TDAmeritrade } = require("./index");

const init = async () => {
    
    const td = new TDAmeritrade({ apiKey: process.env.CLIENT_ID });

   console.log(td)
    // console.log(response)


    console.log(await td.getQuote("AMZN"))
    // const account = td.account("");
    // console.log(account);

    // const response = await account.getQuote("AMZN")
    // console.log("RES", response.data)

    // const market = td.market();
    // console.log(account);

    // const response2 = await market.getHoursForMultipleMarkets();
    // console.log("RES", response.data);
};

(async function () {
    await init();
}());
