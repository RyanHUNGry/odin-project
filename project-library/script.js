let library = [];

library.push(new createBook("yes", "hi", 121, true));
library.push(new createBook("yess", "hi", 121, true));

function createBook(author, title, numPages, hasRead) {
    this.author = author
    this.title = title
    this.numPages = numPages
    this.hasRead = hasRead
}

const displayBooks = (libraryContainer, library) => {
    library.forEach((book, i) => {
        const bookDiv = document.createElement("div")
        bookDiv.classList.add("book")
        bookDiv.id = i

        const bookKeys = Object.keys(book)
        bookKeys.forEach(key => {
            const valueDiv = document.createElement("div")
            valueDiv.textContent = book[key]
            valueDiv.classList.add(key)
            bookDiv.appendChild(valueDiv)
        })

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete This Book"
        deleteButton.classList.add("delete")
        bookDiv.appendChild(deleteButton)

        libraryContainer.appendChild(bookDiv)
    })
}

const removeBook = (id, parent, library) => {
    library.splice(parseInt(id), 1)
    parent.remove()
}

const initializeDeleteButtons = () => {
    const deleteButtons = document.querySelectorAll('.delete')
    deleteButtons.forEach(button => {
        const parent = button.parentElement
        const index = button.parentElement.id
        button.addEventListener("click", () => {
            removeBook(index, parent, library)
        })
    })
}

const libraryContainer = document.querySelector(".library-container")

displayBooks(libraryContainer, library)
initializeDeleteButtons()



