# Project Overview

## Project Name

Shapshots - Picture Generator	
## Project Description

Integrating a photo generator API into a photographers splash page. 

## API and Data Sample
Link : [Pexels API](https://www.pexels.com/api/documentation/)

Sample JSON:
```json
{
    "total_results": 10000,
    "page": 1,
    "per_page": 15,
    "photos": [
        {
            "id": 1687093,
            "width": 3079,
            "height": 4619,
            "url": "https://www.pexels.com/photo/people-on-sidewalk-selective-focal-photo-1687093/",
            "photographer": "Cameron Casey",
            "photographer_url": "https://www.pexels.com/@camcasey",
            "photographer_id": 455136,
            "src": {
                "original": "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg",
                "large2x": "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false
        },

```

## Wireframes
###### Pictures here:
Website Design  https://imgur.com/gallery/JpN7IlM
Mobile Design https://imgur.com/a/9ERvZ20


## Priority Matrix
######Image Link:  https://imgur.com/a/mV0j2Vp


#### MVP 

- The search bar must be functional and asthetic.
- API must populate a picture and fade into homepage afterwards.

#### PostMVP  

- Add link to purchase products.
- Use local storage to save user favorites.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

I want to keep this structure 

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 17| Project Approval | Complete
|August 18| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 19| Initial Clickable Model  | Incomplete
|August 20| MVP touch ups | Incomplete
|August 21| Presentations | Incomplete


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| |   |
| Working on HTML | H | 3hrs|  |   |
| Working on CSS | H | 5hrs|  |  |
| Working on  | H | 5hrs|  |  |
| Working with API - JS| H | 10hrs|  |  |
| Total | H | hrs|  |  |

## Code Snippet 
Attempted to get a callback from postman, after some hours of research I managed to produce data within my console.

```
const DOMAIN = 'https://api.pexels.com/v1/search?query=people' 
const API_KEY = '563492ad6f917000010000015ccce792a03d407c9f4d32cc165e44d9'
const BASE_URL = `${'api.pexels.com/v1'}?apikey=${''}`

async function showPicture() {
    const resp = await axios.get(DOMAIN, { headers: {"Authorization" : `Bearer ${API_KEY}`} });
    console.log(resp)
}
showPicture()
```

## Change Log
  
