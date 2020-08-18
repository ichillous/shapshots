
const butn = document.querySelector('#search')

//const DOMAIN = `https://api.pexels.com/v1/search?query=${form}`

const API_KEY = '563492ad6f917000010000015ccce792a03d407c9f4d32cc165e44d9'

const BASE_URL = `${'api.pexels.com/v1'}?apikey=${'563492ad6f917000010000015ccce792a03d407c9f4d32cc165e44d9'}`

butn.addEventListener('click', (e) => {
    
    console.log("hey")
    e.preventDefault()
})

// // async function showPicture() {
//     const resp = await axios.get(DOMAIN, { headers: {"Authorization" : `Bearer ${API_KEY}`} });
//     console.log(resp.data)

// }
// showPicture()




