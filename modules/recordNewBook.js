/* eslint-disable import/prefer-default-export */
export const recordNewBook = (bookList) => {
  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const isbn = document.querySelector('#isbn').value;

  bookList.addNewBook(author, title, isbn);

  document.querySelector('#author').value = '';
  document.querySelector('#title').value = '';
  document.querySelector('#isbn').value = '';
};