// Get all the product images
const productImages = document.querySelectorAll('.product-grid img');

// Get the selected products list
const selectedProductsList = document.getElementById('selected-products-list');

// Get the total price button
const totalPriceBtn = document.getElementById('total-price-btn');

// Get the total price element
const totalPriceEl = document.getElementById('total-price');

// Add a click event listener to each product image
productImages.forEach(image => {
	image.addEventListener('click', () => {
		// Get the name and price of the product
		const name = image.dataset.name;
		const price = Number(image.dataset.price);

		// Create a new list item with the product name and price
		const listItem = document.createElement('li');
		listItem.innerHTML = `${name} - $${price}`;

		// Add the list item to the selected products list
		selectedProductsList.appendChild(listItem);
	});
});

// Add a click event listener to the total price button
totalPriceBtn.addEventListener('click', () => {
	// Get all the selected product prices
	const productPrices = Array.from(selectedProductsList.children).map(item => {
		const priceString = item.innerHTML.split(' - $')[1];
		return Number(priceString);
	});

	// Calculate the total price
	const totalPrice = productPrices.reduce((total, price) => total + price);

	// Display the total price
	totalPriceEl.innerHTML = `Total Price: $${totalPrice}`;
});
