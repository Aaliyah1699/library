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

function displayBooks() {
  // Clear the card container first
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  // Loop through the library array
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    // Create a new table row element
    const row = document.createElement('tr');

    // Create table cells for each property of the book object
    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;

    const pagesCell = document.createElement('td');
    pagesCell.textContent = book.pages;

    const readCell = document.createElement('td');
    readCell.textContent = book.read ? 'Read' : 'Not read';

    // Add the cells to the row
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(readCell);

    // Add the row to the card container
    cardContainer.appendChild(row);
  }
}
