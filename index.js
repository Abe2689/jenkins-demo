const axios = require('axios');

async function fetchDog() {
    let response = await axios.get('https://dog.ceo/api/breeds/image/random');
    if (response.data.status === 'success')
        console.log(response.data.message);
}

fetchDog();