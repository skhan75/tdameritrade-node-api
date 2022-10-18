const https = require("https");
const fs = require("fs");
const path = require("path");
const url = require("url");
const Open = require("open");

const { 
    getAccessToken, 
    refreshAccessToken, 
    isAccessTokenExpired, 
    isRefreshTokenExpired
} = require("./token");

/**
 *
 * @param redirectUrl
 * @param clientId
 */
function getAuthUrl(redirectUrl, clientId) {
    return `https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=${this.redirectUrl 
    || redirectUrl}&client_id=${this.clientId || clientId}`;
}

/**
 * 
 * @returns 
 */
function generateToken() {
    return new Promise((resolve, reject) => {
        try {
            const serverOptions = {
                key: fs.readFileSync(path.resolve(this.sslKey)),
                cert: fs.readFileSync(path.resolve(this.sslCert))
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
                            .setAccessTokenExpiresAt(tokenData.data.expires_in) 
                            .setRefreshToken(tokenData.data.refresh_token)
                            .setRefreshTokenExpiresAt(tokenData.data.refresh_token_expires_in);
                        resolve();
                    } catch (e) {
                        console.error(e);
                        reject();
                    }
                })
                .listen(this.port, () => {
                    const authUri = getAuthUrl.call(this);
                    Open(authUri);
                });
        } catch (e) {
            console.error("Error", e);
        }
    });
}

/**
 * Logs in the user by either generating a fresh access token or use refresh token
 * to generate new access tokens
 */
function login() {
    if(!isAccessTokenExpired.call()) {
        return;
    }

    if(!isRefreshTokenExpired.call()) {
        return refreshAccessToken.call();
    }

    return generateToken.call(this);
}

module.exports = {
    login,
    getAuthUrl
};
