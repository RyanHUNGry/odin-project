const img = document.querySelector('img');

const apiCall = async () => {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Y4zptCiLO2LqhXLv8MTergGidp9nGvff&s=cat', { mode: 'cors' })
    const obj = await response.json()
    img.src = obj.data.images.original.url;
}

apiCall()

const button = document.querySelector(".change")
button.addEventListener("click", (e) => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=Y4zptCiLO2LqhXLv8MTergGidp9nGvff&s=cat', { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        img.src = response.data.images.original.url;
    });
})

const form = document.querySelector("form")
const input = document.querySelector("input")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Y4zptCiLO2LqhXLv8MTergGidp9nGvff&s=${input.value}`, { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        img.src = response.data.images.original.url;
    });
})