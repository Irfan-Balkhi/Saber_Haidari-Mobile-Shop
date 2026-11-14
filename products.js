// Single source of truth for products (used by index.html and shop.html).
// To change a price or name, edit it here only.
const products = [
    { id: 1, title: 'iPhone 15 Pro Max', brand: 'Apple', price: 1199, storage: '256GB', ram: '8GB', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', desc: 'Titanium build with A17 Pro Chip and groundbreaking zoom lens.' },
    { id: 2, title: 'Galaxy S24 Ultra', brand: 'Samsung', price: 1299, storage: '512GB', ram: '12GB', img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80', desc: 'Built-in S Pen, Snapdragon 8 Gen 3, and full Galaxy AI suite.' },
    { id: 3, title: 'Google Pixel 8 Pro', brand: 'Google', price: 899, storage: '128GB', ram: '12GB', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', desc: 'Advanced AI camera features with 7 years of Android updates.' },
    { id: 4, title: 'iPhone 15', brand: 'Apple', price: 799, storage: '128GB', ram: '6GB', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80', desc: 'Dynamic Island, 48MP Main camera, and USB-C connectivity.' },
    { id: 5, title: 'Xiaomi 14 Ultra', brand: 'Xiaomi', price: 999, storage: '512GB', ram: '16GB', img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80', desc: 'Leica Quad Camera optics with 1-inch main sensor.' },
    { id: 6, title: 'Galaxy Z Fold 5', brand: 'Samsung', price: 1799, storage: '512GB', ram: '12GB', img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80', desc: 'Massive 7.6-inch main foldable screen for ultimate productivity.' }
];

// Add a product to the cart by id (requires cart.js).
function addProduct(id) {
    const p = products.find(x => x.id === id);
    if (p) addToCart(p.title, p.price, p.brand);
}

// Fill in displayed prices on pages with static product cards: <p data-price="1">$1,199</p>
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-price]').forEach(el => {
        const p = products.find(x => x.id === +el.dataset.price);
        if (p) el.textContent = '$' + p.price.toLocaleString('en-US');
    });
});
