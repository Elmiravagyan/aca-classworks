// http://openlibrary.org/search.json?q=the+lord+​.​of+the+rings TODO Books
// https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fd5a87abe TODO Films
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMTAwMCk7Cn0pOwoKLy8gc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewovLyAgICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Ci8vIH0sIDMwMDApOwoKLy8gc2V0VGltZW91dChmdW5jdGlvbiB0aW1lZXIoKSB7Ci8vICAgICBjb25zb2xlLmxvZygiQ2xpY2sgdGhlIGJ1dHRvbiEiKTsKLy8gfSwgNDAwMCk7CgovLyBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQzKCkgewovLyAgICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Ci8vIH0sIDMwMDApOwoKCgpzZXRJbnRlcnZhbChmdW5jdGlvbiBpbnRlcnZhbCgpIHsKICAgIGNvbnNvbGUubG9nKEhlbGxvKTsKfSwgMTAwMCk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

const BASE_URL = "http://openlibrary.org/search.json";

const searchInput = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');
const booksData = document.querySelector('.booksData');

const searchBooks = (searchString) => {
	// let replacedValue = searchString.replaceAll(' ', '+');
	fetch(`${BASE_URL}?q=${searchString}`).then((res) => res.json()).then(data => uiForBooks(data.docs));
};

const singleCardCreator = (cardTitle, year) => {
	console.log(cardTitle, year);
	let container = document.createElement('div');
	// let title = document.createElement('h3');
	let yearOfPublish = document.createElement('h6');
	// title.textContent = cardTitle;
	yearOfPublish.textContent = year[0];
	container.append(yearOfPublish);
}

const uiForBooks = (books) => {
	console.log(books);
	let elements = books.map((books) => {
		console.log(books.publish_year, 'Author');
		return singleCardCreator(books.author_name, books.publish_year);
	});
	booksData.append(elements);
}

searchButton.addEventListener('click', () => searchBooks(searchInput.value));
