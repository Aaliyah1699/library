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

// Toggle read status method
Book.prototype.toggleRead = function() {
  this.read = !this.read;
};

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

// Add event listener to the add book button
addBookBtn.addEventListener('click', function() {
  // Display a form to add a new book
  const form = document.createElement('form');

  // Create input fields for the book properties
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.placeholder = 'Title';

  const authorInput = document.createElement('input');
  authorInput.type = 'text';
  authorInput.placeholder = 'Author';

  const pagesInput = document.createElement('input');
  pagesInput.type = 'number';
  pagesInput.placeholder = 'Pages';

  const readInput = document.createElement('input');
  readInput.type = 'checkbox';
  readInput.id = 'read';
  
  const readLabel = document.createElement('label');
  readLabel.htmlFor = 'read';
  readLabel.textContent = 'Read';

  // Create a submit button
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Add Book';

  // Add the form elements to the form
  form.appendChild(titleInput);
  form.appendChild(authorInput);
  form.appendChild(pagesInput);
  form.appendChild(readInput);
  form.appendChild(readLabel);
  form.appendChild(submitBtn);

  // Add an event listener to the form's submit button
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the form data
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;

    // Add the new book to the library
    addBookToLibrary(title, author, pages, read);

    // Clear the form
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;

    // Display the updated library
    displayBooks();
  });

  // Add the form to the card container
  cardContainer.appendChild(form);
});
