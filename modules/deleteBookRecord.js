export default (bookList, e) => {
  const deleteButton = e.target;
  if (
    deleteButton !== undefined
        && deleteButton.classList.contains('delete')
  ) {
    e.preventDefault();
    const tr = deleteButton.closest('tr');
    const isbn = tr.getAttribute('data-isbn');
    tr.remove();

    bookList.removeNewBook(isbn);
  }
};