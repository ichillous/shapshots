const input = document.querySelector('#search')
const button = document.querySelector('#button')
const showPics = document.querySelector('.renderPics')
const API_KEY = '563492ad6f917000010000015ccce792a03d407c9f4d32cc165e44d9'
const BASE_URL = `https://api.pexels.com/v1/search?`

button.addEventListener('click', (e) => {
    console.log(BASE_URL)
    
    e.preventDefault()
    getResults(input.value)
})

let getResults = async (value) => {
    console.log(`${BASE_URL}&query=${value}`)
    let results = await axios.get(`${BASE_URL}query=${value}&apikey=${API_KEY}`, { headers: {"Authorization" : `Bearer ${API_KEY}`}})
    console.log(results)
    console.log(results.data.photos) 
    let photos = results.data.photos
    for (i = 0; i < photos.length; i++) {
        console.log(photos[i].src.original)
        let img = document.createElement('img')
        img.src = photos[i].src.small
        showPics.appendChild(img)
    }
}

// async function showPicture() {
//     const resp = await axios.get(DOMAIN, { headers: {"Authorization" : `Bearer ${API_KEY}`} });
//     console.log(resp.data)

// }
// showPicture()




