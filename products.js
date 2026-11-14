// Single source of truth for products (used by index.html and shop.html).
// To change a price or name, edit it here only.
// zoom: true = image has a small product on a wide light-grey canvas (Apple iPhone shots); shown enlarged.
// category: Smartphones | Tablets | Watches | Audio | Accessories. Local images live in images/.
const products = [
    { id: 1, title: 'iPhone 15 Pro Max', brand: 'Apple', category: 'Smartphones', price: 1199, specs: ['256GB', '8GB RAM'], img: 'images/iphone-15-pro-max.png', zoom: true, desc: 'Titanium build with A17 Pro Chip and groundbreaking zoom lens.' },
    { id: 2, title: 'Galaxy S24 Ultra', brand: 'Samsung', category: 'Smartphones', price: 1299, specs: ['512GB', '12GB RAM'], img: 'images/galaxy-s24-ultra.jpg', desc: 'Built-in S Pen, Snapdragon 8 Gen 3, and full Galaxy AI suite.' },
    { id: 3, title: 'Google Pixel 10 Pro', brand: 'Google', category: 'Smartphones', price: 999, specs: ['128GB', '16GB RAM'], img: 'images/pixel-10-pro.png', desc: 'Google Tensor G5, a pro-level camera system and 7 years of Android updates.' },
    { id: 4, title: 'iPhone 15', brand: 'Apple', category: 'Smartphones', price: 799, specs: ['128GB', '6GB RAM'], img: 'images/iphone-15.png', zoom: true, desc: 'Dynamic Island, 48MP Main camera, and USB-C connectivity.' },
    { id: 5, title: 'Xiaomi 14 Ultra', brand: 'Xiaomi', category: 'Smartphones', price: 999, specs: ['512GB', '16GB RAM'], img: 'images/xiaomi-14-ultra.png', desc: 'Leica Quad Camera optics with 1-inch main sensor.' },
    { id: 6, title: 'Galaxy Z Fold 5', brand: 'Samsung', category: 'Smartphones', price: 1799, specs: ['512GB', '12GB RAM'], img: 'images/galaxy-z-fold5.png', desc: 'Massive 7.6-inch main foldable screen for ultimate productivity.' },
    { id: 7, title: 'iPad Pro 13-inch (M4)', brand: 'Apple', category: 'Tablets', price: 1299, specs: ['256GB', '8GB RAM', 'Wi-Fi'], img: 'images/ipad-pro-13.png', desc: 'Ultra Retina XDR tandem OLED display and the M4 chip in an impossibly thin design.' },
    { id: 8, title: 'AirPods Pro (2nd generation)', brand: 'Apple', category: 'Audio', price: 249, specs: ['Noise Cancelling', 'USB-C'], img: 'images/airpods-pro-2.png', desc: 'Up to 2x more Active Noise Cancellation with Adaptive Audio and a MagSafe charging case.' },
    { id: 9, title: 'AirPods Max', brand: 'Apple', category: 'Audio', price: 549, specs: ['Over-ear', 'Spatial Audio'], img: 'images/airpods-max.png', desc: 'High-fidelity over-ear headphones with Active Noise Cancellation and Spatial Audio.' },
    { id: 10, title: 'MagSafe Charger', brand: 'Apple', category: 'Accessories', price: 39, specs: ['15W', 'Wireless'], img: 'images/magsafe.png', desc: 'Magnetically snaps onto iPhone for fast, effortless wireless charging.' },
    { id: 11, title: 'Galaxy Tab S10+', brand: 'Samsung', category: 'Tablets', price: 999, specs: ['12.4-inch AMOLED', '256GB', '12GB RAM'], img: 'images/galaxy-tab-s10-plus.png', desc: 'Large Dynamic AMOLED 2X display with S Pen included, built for work and play.' },
    { id: 12, title: 'Galaxy Watch7', brand: 'Samsung', category: 'Watches', price: 299, specs: ['40mm', 'Bluetooth', 'Galaxy AI'], img: 'images/galaxy-watch7.png', desc: 'Smarter health tracking and a bright always-on display on your wrist.' },
    { id: 13, title: 'Pixel Watch 5', brand: 'Google', category: 'Watches', price: 349, specs: ['Wear OS', 'Fitbit'], img: 'images/pixel-watch-5.png', desc: 'The Google smartwatch with Fitbit health tracking and Gemini built in.' },
    { id: 14, title: 'Galaxy Buds4', brand: 'Samsung', category: 'Audio', price: 179, specs: ['Bluetooth', 'Noise Cancelling'], img: 'images/galaxy-buds4.png', desc: 'Compact true wireless earbuds with a metal-finish stem and Galaxy AI features.' },
    { id: 15, title: 'Bose QuietComfort Ultra Headphones', brand: 'Bose', category: 'Audio', price: 429, specs: ['Noise Cancelling', 'Spatial Audio', 'Over-ear'], img: 'images/bose-qc-ultra.png', desc: 'World-class noise cancellation and immersive audio in a premium over-ear design.' },
    { id: 16, title: 'Anker Nano Charger (20W)', brand: 'Anker', category: 'Accessories', price: 19, specs: ['20W', 'USB-C', 'Fast Charging'], img: 'images/anker-nano-20w.png', desc: 'Ultra-compact USB-C fast charger for phones and tablets.' },
    { id: 17, title: 'Anker Zolo Power Bank (20K)', brand: 'Anker', category: 'Accessories', price: 49, specs: ['20,000mAh', 'Built-in USB-C Cable'], img: 'images/anker-zolo-20k.png', desc: '20,000mAh power bank with a built-in USB-C cable and a clear digital display.' }
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
