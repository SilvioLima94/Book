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

function addBookToLibrary() {
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookPages = document.getElementById("pages").value;
  const isRead = document.getElementById("select");
  isRead.addEventListener("change", (e) => console.log(e.target.value));
  console.log(isRead);

  if (!bookTitle && !bookAuthor && !bookPages) return;
  const addBook = new Book(bookTitle, bookAuthor, Number(bookPages));
  return myLibrary.push(addBook);
}
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayBooks();
});
//   bookTitle.value = "";
//   bookAuthor.value = "";
//   bookPages.value = "";

function displayBooks() {
  //const bookContainer = document.querySelector(".book-container");
  const bookCard = document.querySelector(".book-card");
  const btnWrapper = document.querySelector(".btn-wrapper");
  const buttonRemove = document.createElement("button");
  const isReadButton = document.createElement("button");
  const select = document.getElementById("select");
  buttonRemove.textContent = "Remove";
  isReadButton.textContent = "Read";

  for (let book in myLibrary) {
    bookCard.innerHTML += `<div class="book">${myLibrary[book].title}
      <p class="author"> by ${myLibrary[book].author}</p>
      </div>
      <div class="btn-wrapper">
      <button>Remove</button>
      <button>Read</button>
      </div>
      `;
  }
}
//console.log(displayBooks());

console.log(myLibrary);
