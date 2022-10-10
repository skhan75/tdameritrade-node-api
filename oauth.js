const https = require("https");
const fs = require("fs");
const path = require("path");
const url = require("url");
const Open = require("open");
const request = require("request");

function getAuthUrl(redirectUrl, clientId) {
    return `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${this.redirectUrl 
    || redirectUrl}&client_id=${this.clientId || clientId}`;
}

function generateToken() {
    return new Promise((resolve, reject) => {
        try {
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

                    const data = new URLSearchParams();
                    data.append("grant_type", "authorization_code");
                    data.append("access_type", "offline");
                    data.append("client_id", this.clientId);
                    data.append("redirect_uri", this.redirectUrl);
                    data.append("code", decodeURIComponent(authCode.toString()));

                    try {
                        const response = await this.request({ 
                            method: "post", url: "/oauth2/token", data 
                        });
                        
                        this.setAccessToken(response.data.access_token)
                            .setRefreshToken(response.data.refresh_token);
                        
                        resolve();
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

function login() {
    return generateToken.call(this);
}

module.exports = {
    login,
    getAuthUrl
};