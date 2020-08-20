const input = document.querySelector('#search')
const button = document.querySelector('#button')
const showPics = document.querySelector('.renderPics')
const API_KEY = '563492ad6f917000010000015ccce792a03d407c9f4d32cc165e44d9'
const BASE_URL = `https://api.pexels.com/v1/search?`


//               button waits for click event
button.addEventListener('click', (e) => {
    console.log(BASE_URL)
    
    e.preventDefault() //Allows page to keep information w/o refreshing
    getResults(input.value)
})

let getResults = async (value) => {
    console.log(`${BASE_URL}&query=${value}`)
    let results = await axios.get(`${BASE_URL}query=${value}&apikey=${API_KEY}`, { headers: {"Authorization" : `Bearer ${API_KEY}`}})
    console.log(results)
    console.log(results.data.photos) 
    let photos = results.data.photos //storing data in photo variable
    for (i = 0; i < photos.length; i++) { //looping through photos
        console.log(photos[i].src.original)
        let img = document.createElement('img') //creating img variable
        img.src = photos[i].src.small // storing photos info into img variable
        showPics.appendChild(img) //appending img var to showPics Div.
    }
}

// async function showPicture() {
//     const resp = await axios.get(DOMAIN, { headers: {"Authorization" : `Bearer ${API_KEY}`} });
//     console.log(resp.data)

// }
// showPicture()




