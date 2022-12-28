class createBook {
    constructor(author, title, numPages, hasRead) {
        this.author = author
        this.title = title
        this.numPages = numPages
        this.hasRead = hasRead
    }
}

/**
 * Given the index of book in library to remove, erase it from the library array plus DOM and then to maintain index to ID mapping, reiterate bookDiv IDs. Also remap 
 * @param {int} id 
 * @param {HTMLDivElement} bookDiv 
 * @param {Array} library 
 */
const removeBook = (id, bookDiv, library) => {
    library.splice(parseInt(id), 1)
    bookDiv.remove()

    Array.from(libraryContainer.children).forEach((child, i) => {
        child.id = i
    })

    numBooks -= 1;
}

/**
 * Event listener for when the user clicks the delete button to remove a book from both the DOM and library array. 
 * @param {HTMLButtonElement} button 
 */
const initializeDeleteButton = (button, library) => {
    button.addEventListener("click", () => {
        const id = button.parentElement.id
        const bookDiv = button.parentElement
        removeBook(id, bookDiv, library)
    })
}

/**
 * Event listener for when the user changes reading status on a specific book. Updates the correct book value in library.
 * @param {HTMLSelectElement} selectRead 
 */ 
const initializeDropDown = (selectRead) => {
    selectRead.addEventListener('change', () => {
        const id = selectRead.parentNode.parentNode.id
        library[id].hasRead = selectRead.value === 'true'
    })
}

/**
 * Given a new book object, append it to the library array and add it to the DOM inside the libraryContainer div. Also, create relevant buttons.
 * @param {HTMLDivElement} libraryContainer 
 * @param {Array} library
 * @param {createBook} book 
 * @returns 
 */
const displayBook = (libraryContainer, library, book) => {
    library.push(book)

    const bookDiv = document.createElement("div")
    bookDiv.classList.add("book-container")
    bookDiv.id = numBooks

    Object.keys(book).forEach(key => {
        if (key !== "hasRead") {
            const valueDiv = document.createElement('div')
            valueDiv.classList.add(key)
            valueDiv.textContent = book[key]
            bookDiv.appendChild(valueDiv)
        }
    })

    const selectDiv = document.createElement("div")
    const selectRead = document.createElement('select')
    const hasReadOption = document.createElement("option")
    const hasNotReadOption = document.createElement("option")
    hasReadOption.value = "true"
    hasReadOption.textContent = "Read"
    hasNotReadOption.value = "false"
    hasNotReadOption.textContent = "Not Read"
    selectRead.add(hasReadOption)
    selectRead.add(hasNotReadOption)
    selectRead.name = 'has-read'
    selectRead.id ='has-read'

    if (book["hasRead"]) {
        hasReadOption.selected = true
    } else {
        hasNotReadOption.selected = true
    }

    selectDiv.appendChild(selectRead)
    bookDiv.appendChild(selectDiv)
    initializeDropDown(selectRead)

    const deleteButton = document.createElement("button")
    initializeDeleteButton(deleteButton, library)
    deleteButton.textContent = "Delete This Book"
    deleteButton.classList.add("delete")
    bookDiv.appendChild(deleteButton)

    libraryContainer.appendChild(bookDiv)
    numBooks += 1;
}

/**
 * Event listener for when the user clicks the submit button or "enter" key. Creates the book object, then displays it.
 * @param {HTMLFormElement} form 
 * @param {HTMLDivElement} libraryContainer 
 * @param {Array} library 
 */
const initializeBookForm = (form, libraryContainer, library) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const keys = ["#author", "#title", "#num-pages", 'input[name="book-read"]:checked']
        const values = keys.map(key => document.querySelector(key).value)
        const book = new createBook(values[0], values[1], parseInt(values[2]), values[3] === 'true')

        displayBook(libraryContainer, library, book)
        modalContainer.close()
        resetFormFields()
    })
}

/**
 * Goes through each form field and resets them to empty values for the next book insertion.
 */
const resetFormFields = () => {
    const form = document.querySelector(".book-form")
    form.reset()
}

/**
 * Event listener for the form open and form close buttons.
 * @param {HTMLDialogElement} modalContainer 
 * @param {HTMLButtonElement} openBookForm 
 * @param {HTMLButtonElement} closeBookForm 
 */
const initializeFormButtons = (modalContainer, openBookForm, closeBookForm) => {
    openBookForm.addEventListener("click", () => {
        modalContainer.showModal()
    })
    
    closeBookForm.addEventListener("click", () => {
        resetFormFields()
        modalContainer.close()
    })

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            resetFormFields()
            modalContainer.close()
        }
    })
}

const libraryContainer = document.querySelector(".library-container")
const bookForm = document.querySelector(".book-form")
const library = [];
let numBooks = 0;

initializeBookForm(bookForm, libraryContainer, library)

const modalContainer = document.querySelector(".modal-container")
const openBookForm = document.querySelector(".add-book")
const closeBookForm = document.querySelector(".close-button")

initializeFormButtons(modalContainer, openBookForm, closeBookForm)


