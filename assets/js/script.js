function removeBook(id) {
  let books = localStorage.getItem('books');

  if (books) {
    books = JSON.parse(books);

    if (books.map((book) => book.id).includes(id)) {
      books = books.filter((book) => book.id !== id);
      localStorage.setItem('books', JSON.stringify(books));
      document.getElementById(`book-card-${id}`).remove();
    }
  }
}

function getBookCard(book) {
  const node = document.createElement('div');

  node.innerHTML = `
    <div id="book-card-${book.id}" class="book-card">
      <p class="book-title">${book.title}</p>
      <p class="book-author">${book.author}</p>
      <button id="remove-book-${book.id}" class="remove-button" type="button">Remove</button>
      <hr/>
    </div>
    `.trim();

  node.firstChild.querySelector(`#remove-book-${book.id}`).addEventListener('click', () => {
    removeBook(book.id);
  });

  return node.firstChild;
}

function addBook(title, author) {
  let books = localStorage.getItem('books');
  books = books ? JSON.parse(books) : [];
  const latestId = Math.max(...[0, ...books.map((book) => book.id)]);

  books.push({
    id: latestId + 1,
    title,
    author,
  });
  localStorage.setItem('books', JSON.stringify(books));
  const bookCard = getBookCard(books.reverse()[0]);
  document.getElementById('books-list').prepend(bookCard);
}

function getBooks() {
  let books = localStorage.getItem('books');
  books = books ? JSON.parse(books) : [];
  books.forEach((book) => {
    const bookCard = getBookCard(book);
    document.getElementById('books-list').prepend(bookCard);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getBooks();
});

document.querySelector('#add-book-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');
  const title = titleInput.value;
  const author = authorInput.value;
  addBook(title, author);

  titleInput.value = '';
  authorInput.value = '';
});
