// // Event listener when the user clicks on remove button
//  export function removeBook(isbn) {
//     this.bookArr = this.bookArr.filter((book) => book.isbn !== isbn);

//     localStorage.setItem('books', JSON.stringify(this.bookArr));
// }

// document.addEventListener('click', (e) => {
//     const deleteButton = e.target;

//     if (deleteButton !== undefined && deleteButton.classList.contains('delete')) {
//         e.preventDefault();
//         const tr = deleteButton.closest('tr');
//         const isbn = tr.getAttribute('data-isbn');
//         tr.remove();

//         bookList.removeBook(isbn);
//     }
// });