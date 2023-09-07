// Fetch all books and display them
async function fetchAllBooks() {
  try {
      const response = await fetch('http://localhost:3000/api/books');
      const books = await response.json();
      const bookList = document.getElementById('book-list');
      bookList.innerHTML = '';
      books.forEach(book => {
          bookList.innerHTML += `
              <div class="book-card">
                  <h3>${book.title}</h3>
                  <p>Author: ${book.author}</p>
                  <p>Category ID: ${book.category_id}</p>
              </div>
          `;
      });
  } catch (error) {
      console.error('There was a problem fetching the data:', error);
  }
}

// Add a new book
document.getElementById('add-book-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const category = document.getElementById('category').value;

  try {
      const response = await fetch('http://localhost:3000/api/books', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              title,
              author,
              category_id: category,
          }),
      });
      if (response.ok) {
          alert('Book added successfully.');
          fetchAllBooks();  // refresh the book list
      } else {
          alert('Failed to add book.');
      }
  } catch (error) {
      console.error('There was a problem adding the book:', error);
  }
});

// Initial fetch to populate the book list
fetchAllBooks();
