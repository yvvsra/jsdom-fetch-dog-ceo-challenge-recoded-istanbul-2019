console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', function () {
    fetchImg()
})

function fetchImg() {
    return fetch(imgUrl)
        .then(response => response.json())
        .then(json => renderImg(json.message))
}
function renderImg(imgArr) {
    imgArr.map(imgUrl => {
        let img = document.createElement('img')
        img.src = imgUrl
        document.getElementById("dog-image-container").appendChild(img)
    })
}

