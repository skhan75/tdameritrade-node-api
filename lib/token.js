const { constants } = require("../enums");

/**
 *
 * @param authCode
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

/**
 *
 * @param refreshToken
 */
function getRefreshToken(refreshToken) {
    const data = new URLSearchParams();
    data.append("grant_type", constants.REFRESH_TOKEN_STRING);
    data.append("access_type", constants.OFFLINE);
    data.append("client_id", this.clientId);
    data.append("refresh_token", refreshToken || this.refreshToken);

    return this.fetch({ method: constants.POST, url: "/oauth2/token", data });
}

/**
 *
 */
function isAccessTokenExpired() {
    return this.accessTokenExpiresAt
        ? new Date(this.refreshTokenExpiresAt).getTime() <= Date.now()
        : true;
}

/**
 *
 */
function isRefreshTokenExpired() {
    return this.refreshTokenExpiresAt
        ? new Date(this.refreshTokenExpiresAt).getTime() <= Date.now()
        : true;
}

module.exports = {
    getAccessToken,
    getRefreshToken,
    isAccessTokenExpired,
    isRefreshTokenExpired
};
