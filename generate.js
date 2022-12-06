const axios = require('axios');
const fs = require('fs');

const config = {
    "client_id": process.env.AUTH0_BACKEND_CLIENT_ID,
    "client_secret": process.env.AUTH0_BACKEND_CLIENT_SECRET,
    "audience": `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
    "grant_type": "client_credentials"
};

axios.post(`${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
    config,
    {headers: {'content-type': 'application/json'}}
).then(response => {
    if (!response.data.access_token) {
        console.log('could not fetch token');
        return;
    }
    fs.writeFileSync('./.token', `TOKEN=${response.data.access_token}`);
}).catch(err => console.log('err'))