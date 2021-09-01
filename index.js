console.log("priyanka")
const loader = document.getElementById("loader")
const imageContainer = document.getElementById("image-container")
let photosArray = []

const count = 10
const apiKey = 'DL4-qzwOj6zR0VJCIpKoINEVofX3SKMju-kEPTpAltI'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${ apiKey }&count=${ count }`
console.log(apiUrl)

// Helper Function to set setAttribute on DOM Element
function setAttribute(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

function displayPhotos() {
  photosArray.forEach((photo) => {
    // create <a> to link to Unsplash 
    let item = document.createElement("a")
    // item.setAttribute('href', photo.links.html)
    // item.setAttribute('target', '_blank')
    setAttribute(item, {
      href: photo.links.html,
      target: '_blank'
    })
    // create <img> for photo 
    const img = document.createElement("img")
    // img.setAttribute("src", photo.urls.regular)
    // img.setAttribute("alt", photo.alt_description)
    // img.setAttribute("title", photo.alt_description)
    setAttribute(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    })

    // put <img> inside <a>, then put both inside imageContainer Element 
    item.appendChild(img)
    imageContainer.appendChild(item)
    console.log('the priyanka')
  })
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    photosArray = await response.json()
    // console.log(data)
    displayPhotos()
  } catch (error) {

  }
}

window.addEventListener("scroll", ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
    getPhotos()
  }
})
getPhotos()
