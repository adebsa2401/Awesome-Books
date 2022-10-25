import BooksCollection from './booksCollection.js';

document.addEventListener('DOMContentLoaded', () => {
  BooksCollection.renderBooks();
});

document.querySelector('#add-book-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');
  const title = titleInput.value;
  const author = authorInput.value;
  BooksCollection.addBook(title, author);

  titleInput.value = '';
  authorInput.value = '';

  document.querySelector('a[data-for="list-content"]').dispatchEvent(new Event('click'));
});
