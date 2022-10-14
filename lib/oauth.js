const https = require("https");
const fs = require("fs");
const path = require("path");
const url = require("url");
const Open = require("open");
const request = require("request");
const { constants } = require("../enums");


function getAuthUrl(redirectUrl, clientId) {
    return `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${this.redirectUrl 
    || redirectUrl}&client_id=${this.clientId || clientId}`;
}

/**
 * The token endpoint returns an access token along with an optional refresh token.
 * @param {*} authCode 
 * @returns 
 */
function getAccessToken(authCode) {
    const data = new URLSearchParams();
    data.append("grant_type", constants.AUTHORIZATION_CODE_STRING);
    data.append("access_type", constants.OFFLINE);
    data.append("client_id", this.clientId);
    data.append("redirect_uri", this.redirectUrl);
    data.append("code", decodeURIComponent(authCode.toString()));
    return this.fetch({ method: constants.POST, url: "/oauth2/token", data });
}

function getRefreshToken(authCode) {
    const data = new URLSearchParams();
    data.append("grant_type", constants.REFRESH_TOKEN_STRING);
    data.append("client_id", this.clientId);
    data.append("redirect_uri", this.redirectUrl);
    data.append("code", decodeURIComponent(authCode.toString())); 
    data.append("refresh_token", this.refreshToken);
    return this.fetch({ method: constants.POST, url: "/oauth2/token", data });
}



function isAccessTokenExpired() {
    return false;
}

function isRefreshTokenExpired() {
    return false;
}



/**
 * 
 * @returns 
 */
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
                    const tokenData = await getAccessToken.call(this, [authCode]);
                    try {
                        this.setAccessToken(tokenData.data.access_token)
                            .setRefreshToken(tokenData.data.refresh_token);
                        
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