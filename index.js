/* eslint-disable import/extensions */
import { recordNewBook } from './modules/recordNewBook.js';
import { deleteBookRecord } from './modules/deleteBookRecord.js';

import { BookList } from './modules/bookList.js';

import { showTime } from './modules/displayTime.js';

showTime();

const bookList = new BookList();

// Submit Event Listener
document.querySelector('#book-form').addEventListener('submit', (e) => {
  recordNewBook(bookList, e);
});

// Event listener when the user clicks on remove button
document.addEventListener('click', (e) => {
  deleteBookRecord(bookList, e);
});
