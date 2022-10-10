const https = require("https");
const fs = require("fs");
const path = require("path");
const url = require("url");
const Open = require("open");
const request = require("request");

function getAuthUrl(redirectUrl, clientId) {
    return `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${this.redirectUrl || redirectUrl}&client_id=${this.clientId || clientId}`;
}

async function generateToken() {
    return new Promise((resolve, reject) => {
        try {
            console.log("THIS", this);
            const serverOptions = {
                key: fs.readFileSync("selfsigned.key"),
                cert: fs.readFileSync("selfsigned.crt")
            };

            https
                .createServer(serverOptions, async (req, res) => {
                    const { code: authCode } = url.parse(req.url, true).query;
                    if (!authCode) {
                        res
                            .writeHead(422, { "Content-Type": "text/html" })
                            .write("Authorization code is required.");
                        return res.end();
                    }

                    console.log("RED ", this.redirectUrl);

                    const data = new URLSearchParams();
                    data.append("grant_type", "authorization_code");
                    data.append("access_type", "offline");
                    data.append("client_id", this.clientId);
                    data.append("redirect_uri", this.redirectUrl);
                    data.append("code", decodeURIComponent(authCode.toString()));

                    try {
                        // const data = await this.axios.post("/oauth2/token", params, )
                        const response = await this.request({ method: "post", url: "/oauth2/token", data });
                        resolve(response.data);
                    } catch (e) {
                        console.error(e);
                        reject();
                    }
                })
                .listen(4000, () => {
                    const authUri = getAuthUrl.call(this);
                    Open(authUri);
                });
        } catch (e) {
            console.error("Error", e);
        }
    });
    
}

module.exports = {
    generateToken
};