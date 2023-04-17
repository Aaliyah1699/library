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