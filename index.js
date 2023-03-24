let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}

//manually adding book
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "No");
myLibrary.push(theHobbit);

let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookPages = document.getElementById("pages");
let isRead = document.getElementById("select");

function addBookToLibrary() {
  const newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    Number(bookPages.value),
    isRead.value
  );

  myLibrary.push(newBook);
}
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayBooks();
  clearForm();
});

//clear form
function clearForm() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
}

function displayBooks() {
  const bookCard = document.querySelector(".book-card");

  bookCard.innerHTML += myLibrary
    .map((book, idx) => {
      return `<div class="book">
      <h3>${book.title}</h3>
      by
      <div>${book.author}</div>
      </div>
      <div class="btn-wrapper">
      <button>Remove</button>
      <button>Read</button>
      </div>
      `;
    })
    //bookCard.remove()
    .join("");
  //   function removeBook() {

  //   }
}

addBookToLibrary.prototype.toggleRead = function () {
  //return this.read
};
console.log(Object.getPrototypeOf(theHobbit) === Book.prototype);

console.log(myLibrary);
