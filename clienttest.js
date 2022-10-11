const { TDAmeritrade } = require("./index");

const init = async () => {
    
    const td = new TDAmeritrade({ apiKey: process.env.CLIENT_ID });
    console.log(td);

    const quote = await td.getQuote("AMZN");
    console.log("AMZN Quote", quote.data)

    const quotes = await td.getQuotes(["AMZN", "AAPL"]);
    console.log("Quotes", quotes.data)

    // You need to login first for all account and order related stuff, 
    // As it requires Authorization token in the header of the request
    const loginResponse = await td.login();
    
    const accountDetails = await td.getAccount("enter-your-account-id")
    console.log("Account Details", accountDetails)
};

(async function () {
    await init();
}());
