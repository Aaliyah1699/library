// Variables
const addBookBtn = document.querySelector('#addBookBtn');
const cardContainer = document.querySelector('#cardContainer');
// library array
let myLibrary = [];

// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read;
}

// add book to library
function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// submit button
submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent form submission

    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.checked;

    if (title && author && pages) {
        // add book to library
        addBookToLibrary(title, author, pages, read);

        // create card to add to the page
        const bookCard = createBookCard(title, author, pages, read);
        cardContainer.appendChild(bookCard);

        // reset form
        card.remove();
        titleInput.value = '';
        authorInput.value = '';
        pagesInput.value = '';
        readInput.checked = false;
    }
});