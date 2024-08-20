// Initialize the Telegram WebApp
window.Telegram.WebApp.ready();

// Sample Products
const products = [
    { id: 1, name: 'AirPods', price: '1000 Br', description: 'Wireless Bluetooth Earbuds', image: 'assets/product1.png' },
    { id: 2, name: 'Smart Watch', price: '1500 Br', description: 'Fitness Tracker', image: 'assets/product2.png' },
    { id: 3, name: 'Headphones', price: '2000 Br', description: 'Noise Cancelling Headphones', image: 'assets/product3.png' },
    { id: 4, name: 'Laptop', price: '25000 Br', description: 'Gaming Laptop', image: 'assets/product4.png' }
];

// Load Products Dynamically
function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
    });
}

loadProducts();

// Cart Logic
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        document.getElementById('cart-items').innerHTML = cart.map(item => `<p>${item.name} - ${item.price}</p>`).join('');
    }
}

// Handle Section Switching
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Handle Account Registration
document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('user-name-input').value;
    const phone = document.getElementById('user-phone-input').value;
    const address = document.getElementById('user-address-input').value;

    if (name && phone && address) {
        document.getElementById('display-name').textContent = name;
        document.getElementById('display-phone').textContent = phone;
        document.getElementById('display-address').textContent = address;

        document.getElementById('user-form').classList.add('hidden');
        document.getElementById('user-info').classList.remove('hidden');
    }
});
