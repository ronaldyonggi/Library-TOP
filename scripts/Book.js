let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let messageRead = read ? 'read' : 'not yet read';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${messageRead}`
  }
}

// Scan through library and display each book
function scan() {
  // Each time this function is ran, deletes the whole cards and creates
  // a new cards section
  document.getElementById('cardsContainer').remove();

  // Create a whole new cards section
  let newCardsContainer = document.createElement('div');
  newCardsContainer.setAttribute('id', 'cardsContainer')


  myLibrary.forEach(book => {
    // Create a div for each book
    let newCard = document.createElement('div');
    // Assign a class 'card' to the div
    newCard.classList.add('card');
    // Within the div, lists the following:

    // Title
    let newTitle = document.createElement('p');
    newTitle.classList.add('title');
    newTitle.innerText = `Title: ${book.title}`;
    newCard.appendChild(newTitle);

    // Author
    let newAuthor = document.createElement('p');
    newAuthor.classList.add('author');
    newAuthor.innerText = `Author: ${book.author}`
    newCard.appendChild(newAuthor);

    // Pages
    let newNumPages = document.createElement('p');
    newNumPages.classList.add('numPages');
    newNumPages.innerText = `Number of Pages: ${book.pages}`;
    newCard.append(newNumPages);

    // Has been read
    let hasRead = document.createElement('p');
    hasRead.classList.add('hasRead');
    hasRead.innerText = book.read ? 'Read' : 'Not read'
    newCard.appendChild(hasRead);

    // Add the card into cards container
    newCardsContainer.appendChild(newCard);

    // Add the cards container to the outer container
    document.getElementById('container').appendChild(newCardsContainer);

  })
}

// Add the display functionality to display button
document.getElementById('display-button').addEventListener('click', scan);

// New book button pulls up the new book form
document.getElementById('new-book-button').addEventListener('click', () => {
  let addBookForm = document.getElementById('add-book-form');
  addBookForm.classList.remove('hidden');
})

function addBookToLibrary () {
  let userInput
  // Take user input

  myLibrary.push(userInput)

}

export {Book, scan, myLibrary}