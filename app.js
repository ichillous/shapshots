const DOMAIN = 'https://api.pexels.com/v1/search?query=people'
const API_KEY = '563492ad6f917000010000015ccce792a03d407c9f4d32cc165e44d9'
const BASE_URL = `${'api.pexels.com/v1'}?apikey=${''}`

async function showPicture() {
    const resp = await axios.get(DOMAIN, { headers: {"Authorization" : `Bearer ${API_KEY}`} });
    console.log(resp)
}
showPicture()
