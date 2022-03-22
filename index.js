import { recordNewBook } from "../modules/recordNewBook.mjs";
import { deleteBookRecord } from "../modules/deleteBookRecord.mjs";

import { BookList } from "../modules/bookList.mjs";

import { showTime } from "../modules/displayTime.mjs";

showTime()

const bookList = new BookList();

// Submit Event Listener
document.querySelector("#book-form").addEventListener("submit", (e) => {
    recordNewBook(bookList, e);
});

// Event listener when the user clicks on remove button
document.addEventListener("click", (e) => {
    deleteBookRecord(bookList, e);
});
