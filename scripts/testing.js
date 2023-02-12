import {Book, myLibrary} from "./Book.js";

// Test adding a book to the library and display 
let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
let csBook = new Book('C++', 'Ben Schmidt', 500, true)
myLibrary.push(theHobbit);
myLibrary.push(csBook)
myLibrary.forEach(e => console.log(e));