// // Submit Event Listener
// export function addBook(bookAuthor, bookTitle, bookIsbn) {
//     const book = {
//         title: bookTitle,
//         author: bookAuthor,
//         isbn: bookIsbn,
//     };

//     this.bookArr.push(book);

//     this.displayBook(book.isbn);

//     localStorage.setItem('books', JSON.stringify(this.bookArr));
// }

// document.querySelector('#book-form').addEventListener('submit', (e) => {
//     e.preventDefault();

//     const author = document.querySelector('#author').value;
//     const title = document.querySelector('#title').value;
//     const isbn = document.querySelector('#isbn').value;

//     bookList.addBook(author, title, isbn);

//     document.querySelector('#author').value = '';
//     document.querySelector('#title').value = '';
//     document.querySelector('#isbn').value = '';
// });