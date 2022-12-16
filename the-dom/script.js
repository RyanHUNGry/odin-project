const paragraph = document.createElement("div")
paragraph.textContent = "Hey I'm red!"
paragraph.style.color = 'red';

const header = document.createElement("h3")
header.textContent = "I'm a blue h3"
header.style.color = 'blue';

const div = document.createElement('div')
div.style.backgroundColor = "pink"
div.style.borderColor = "black"

const header1 = document.createElement("h1")
header1.textContent = "I'm in a div"

const paragraph1 = document.createElement("div")
paragraph1.textContent = "ME TOO!"

div.appendChild(header1)
div.appendChild(paragraph1)

const parentContainer = document.querySelector("#container")
parentContainer.appendChild(paragraph)
parentContainer.appendChild(header)
parentContainer.appendChild(div)