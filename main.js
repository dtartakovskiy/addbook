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

// Delete book
UI.prototype.deleteBookFromList = function (target) {
	if (target.classList.contains('delete')) {
		target.parentElement.parentElement.remove();
	}
}

// Show alert
UI.prototype.showAlert = function (message, className) {
	// Create a div
	const div = document.createElement('div');
	// Add classes
	div.className = `alert ${className}`;
	// Add a text node
	div.appendChild(document.createTextNode(message));
	// Get parent
	const container = document.querySelector('.container');
	const form = document.querySelector('#book-form');
	// Insert alert
	container.insertBefore(div, form);

	// Timeout after 3 sec
	setTimeout(() => {
		div.remove();
	}, 3000);
}

// Clear fields
UI.prototype.clearFields = function () {
	document.querySelector('#title').value = '';
	document.querySelector('#author').value = '';
	document.querySelector('#isbn').value = '';
}

// Event listener for add book
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

	// Validate 
	if (title === '' || author === '' || isbn === '') {
		//
		ui.showAlert('Please, fill in all fields', 'error');
	} else {
		// Add a book to the list
		ui.addBookToList(book);
		// Show alert if the book is added
		ui.showAlert('The book is successully added', 'success');
		// Clear fields
		ui.clearFields();
	}
	console.log(ui); 
});

// Event listener for delete
const bookList = document.querySelector('#book-list');
bookList.addEventListener('click', function (e) {
	e.preventDefault();
	// Instantiate UI
	const ui = new UI();
	ui.deleteBookFromList(e.target);
	ui.showAlert('The book was successufully removed from the list', 'success');
});
