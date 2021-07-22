//theta togle cdn only
myPlayer.tech_.trigger('toggleUseCDN');

//earn theta TFUEL with thea script

async function getWalletAccessToken() {
    //Check if a user is logged in...
    let isAuthenticated = true;

    if (!isAuthenticated) {
        //No user is logged in, no wallet will be used
        return null;
    }

    //This API should check the user's auth 
    let body = await yourAPIRequestToGenerateThetaWalletAccessTokenForAuthedUser(); //I will demand it with the special acccount created for ths project

    //Return the access token from the request body
    return body.access_token;
}
