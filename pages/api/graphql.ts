import {getAccessToken, withApiAuthRequired} from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function graphql(req, res) {
    // If your Access Token is expired, and you have a Refresh Token,
    // `getAccessToken` will fetch you a new one using the `refresh_token` grant
    const {accessToken} = await getAccessToken(req, res);

    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify(req.body)
    });

    const result = await response.json();
    res.status(200).json(result);
});