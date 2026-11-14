// Single source of truth for products (used by index.html and shop.html).
// To change a price or name, edit it here only.
// category: Smartphones | Tablets | Watches | Audio | Accessories. Local images live in images/.
const products = [
    { id: 1, title: 'iPhone 15 Pro Max', brand: 'Apple', category: 'Smartphones', price: 1199, specs: ['256GB', '8GB RAM'], img: 'images/iphone-15-pro-max.png', desc: 'Titanium build with A17 Pro Chip and groundbreaking zoom lens.' },
    { id: 2, title: 'Galaxy S24 Ultra', brand: 'Samsung', category: 'Smartphones', price: 1299, specs: ['512GB', '12GB RAM'], img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80', desc: 'Built-in S Pen, Snapdragon 8 Gen 3, and full Galaxy AI suite.' },
    { id: 3, title: 'Google Pixel 8 Pro', brand: 'Google', category: 'Smartphones', price: 899, specs: ['128GB', '12GB RAM'], img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', desc: 'Advanced AI camera features with 7 years of Android updates.' },
    { id: 4, title: 'iPhone 15', brand: 'Apple', category: 'Smartphones', price: 799, specs: ['128GB', '6GB RAM'], img: 'images/iphone-15.png', desc: 'Dynamic Island, 48MP Main camera, and USB-C connectivity.' },
    { id: 5, title: 'Xiaomi 14 Ultra', brand: 'Xiaomi', category: 'Smartphones', price: 999, specs: ['512GB', '16GB RAM'], img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80', desc: 'Leica Quad Camera optics with 1-inch main sensor.' },
    { id: 6, title: 'Galaxy Z Fold 5', brand: 'Samsung', category: 'Smartphones', price: 1799, specs: ['512GB', '12GB RAM'], img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80', desc: 'Massive 7.6-inch main foldable screen for ultimate productivity.' },
    { id: 7, title: 'iPad Pro 13-inch (M4)', brand: 'Apple', category: 'Tablets', price: 1299, specs: ['256GB', '8GB RAM', 'Wi-Fi'], img: 'images/ipad-pro-13.png', desc: 'Ultra Retina XDR tandem OLED display and the M4 chip in an impossibly thin design.' },
    { id: 8, title: 'AirPods Pro (2nd generation)', brand: 'Apple', category: 'Audio', price: 249, specs: ['Noise Cancelling', 'USB-C'], img: 'images/airpods-pro-2.png', desc: 'Up to 2x more Active Noise Cancellation with Adaptive Audio and a MagSafe charging case.' },
    { id: 9, title: 'AirPods Max', brand: 'Apple', category: 'Audio', price: 549, specs: ['Over-ear', 'Spatial Audio'], img: 'images/airpods-max.png', desc: 'High-fidelity over-ear headphones with Active Noise Cancellation and Spatial Audio.' },
    { id: 10, title: 'MagSafe Charger', brand: 'Apple', category: 'Accessories', price: 39, specs: ['15W', 'Wireless'], img: 'images/magsafe.png', desc: 'Magnetically snaps onto iPhone for fast, effortless wireless charging.' }
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
