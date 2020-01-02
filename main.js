// Book constructor
function Book (title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}
 
// UI constructor
function UI () {}

// Add book to list
UI.prototype.addBookToList = function (book) {
	const list = document.querySelector('#book-list');

	// Create a tr
	const row = document.createElement('tr');
	// Insert cols
	row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete ">X</a></td>
	`;

	list.appendChild(row);
}

// Clear fields
UI.prototype.clearFields = function () {
	document.querySelector('#title').value = '';
	document.querySelector('#author').value = '';
	document.querySelector('#isbn').value = '';
}

// Event listeners
const bookForm = document.querySelector('#book-form');
bookForm.addEventListener('submit', function (e) {
	e.preventDefault();

	// Get form values
	const title = document.querySelector('#title').value,
				author = document.querySelector('#author').value;
				isbn = document.querySelector('#isbn').value;

	// Instantiate a book
	const book = new Book (title, author, isbn);

	// Instantiate UI
	const ui = new UI();

	// Add a book to the list
	ui.addBookToList(book);

	// Clear fields
	ui.clearFields();
});
