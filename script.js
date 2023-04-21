// Variables
const addBookBtn = document.querySelector("#addBookBtn");
const cardContainer = document.querySelector("#cardContainer");
// library array
let myLibrary = [];

// book constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}
// Toggle read status method

// add book to library
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// Display the books in the library
function displayBooks() {
  // Clear the card container
  cardContainer.innerHTML = "";

  // Create a table element
  const tableEl = document.createElement("table");

  // Create a table header row
  const headerRow = document.createElement("tr");

  // Create table header cells for each column
  const titleHeader = document.createElement("th");
  titleHeader.textContent = "Title";
  headerRow.appendChild(titleHeader);

  const authorHeader = document.createElement("th");
  authorHeader.textContent = "Author";
  headerRow.appendChild(authorHeader);

  const pagesHeader = document.createElement("th");
  pagesHeader.textContent = "Pages";
  headerRow.appendChild(pagesHeader);

  const readHeader = document.createElement("th");
  readHeader.textContent = "Read";
  headerRow.appendChild(readHeader);

  const deleteHeader = document.createElement("th");
  deleteHeader.textContent = "Remove";
  headerRow.appendChild(deleteHeader);

  // Add the header row to the table
  tableEl.appendChild(headerRow);

  // Loop through the books in the library
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    // Create a table row for the book
    const row = document.createElement("tr");
    row.setAttribute("data-index", i);

    // Create table cells for each column
    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.read ? "Read" : "Not read yet";
    row.appendChild(readCell);

    const deleteCell = document.createElement("td");

    // Add the delete button to the cell
    addDeleteButton(deleteCell, i);

    // Add the delete cell to the row
    row.appendChild(deleteCell);

    // Add the row to the table
    tableEl.appendChild(row);
  }

  // Add the table to the card container
  cardContainer.appendChild(tableEl);
}

// Function to add a delete button to a cell
function addDeleteButton(cell, index) {
  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML =
    '<i class="fa-regular fa-trash-can fa-xl" style="color: #800000;"></i>';
  cell.appendChild(deleteBtn);

  // Add an event listener to the delete button
  deleteBtn.addEventListener("click", function () {
    // Get the index of the book from the data-index attribute
    const index = parseInt(cell.parentElement.getAttribute("data-index"));

    // Remove the book from the library
    myLibrary.splice(index, 1);

    // Update the display
    displayBooks();
  });
  cell.appendChild(deleteBtn);
}

// Add event listener to the add book button
addBookBtn.addEventListener("click", function () {
  // Display a form to add a new book
  const form = document.createElement("form");
  form.classList.add("form");

  // Create input fields for the book properties
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.required = true;
  titleInput.classList.add("titleInput");

  const authorInput = document.createElement("input");
  authorInput.type = "text";
  authorInput.placeholder = "Author";
  authorInput.required = true;
  authorInput.classList.add("authorInput");

  const pagesInput = document.createElement("input");
  pagesInput.type = "number";
  pagesInput.placeholder = "Pages";
  pagesInput.required = true;
  pagesInput.min = 0;
  pagesInput.classList.add("pagesInput");

  const readInput = document.createElement("input");
  readInput.type = "checkbox";
  readInput.id = "read";
  readInput.classList.add("readInput");

  const readLabel = document.createElement("label");
  readLabel.htmlFor = "read";
  readLabel.textContent = "Read";
  readLabel.classList.add("readLabel");

  // Create a submit button
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.classList.add("submitBtn");
  submitBtn.innerHTML =
    '<i class="fa-regular fa-square-plus fa-xl" style="color: #EADDCA;"></i>';

  // Add the form elements to the form
  form.appendChild(titleInput);
  form.appendChild(authorInput);
  form.appendChild(pagesInput);
  form.appendChild(readInput);
  form.appendChild(readLabel);
  form.appendChild(submitBtn);

  // Add an event listener to the form's submit button
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the form data
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;

    // Add the new book to the library
    addBookToLibrary(title, author, pages, read);

    // Clear the form
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;

    // Display the updated library
    displayBooks();
  });

  // Add the form to the card container
  cardContainer.appendChild(form);
});
