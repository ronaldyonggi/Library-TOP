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

function addBookToLibrary () {
  let userInput
  // Take user input

  myLibrary.push(userInput)

}

export {Book, myLibrary}

// Manual testing

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info())