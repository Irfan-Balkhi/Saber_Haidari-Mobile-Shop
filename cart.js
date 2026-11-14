// Shared cart logic (used by index.html and shop.html). Cart persists across pages via localStorage.
// Requires config.js (WHATSAPP_NUMBER).
const CART_KEY = 'sh-mobile-cart';
let cart = loadCart();

function loadCart() {
    try {
        const data = JSON.parse(localStorage.getItem(CART_KEY));
        return Array.isArray(data) ? data : [];
    } catch (e) { return []; }
}

function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ }
}

function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('invisible');
}

function addToCart(title, price, brand) {
    const existing = cart.find(i => i.title === title);
    if (existing) existing.qty += 1;
    else cart.push({ title, price, brand, qty: 1 });
    updateCartUI();
    showToast(title + ' added to cart', 'success', { label: 'View cart', onClick: toggleCart });
}

function changeQty(index, delta) {
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    saveCart();
    const count = cart.reduce((n, i) => n + i.qty, 0);
    document.getElementById('cart-badge').innerText = count;
    const container = document.getElementById('cart-items');

    if (cart.length === 0) {
        container.innerHTML = '<p class="text-slate-400 text-sm text-center py-8">Your cart is currently empty.</p>';
        document.getElementById('cart-subtotal').innerText = '$0';
        return;
    }

    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        total += item.price * item.qty;
        return `
            <div class="flex items-center justify-between bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div>
                    <p class="font-bold text-white text-sm">${escapeHTML(item.title)}</p>
                    <p class="text-xs text-blue-400 font-semibold">${escapeHTML(item.brand)}</p>
                    <p class="text-sm font-extrabold text-white mt-1">$${(item.price * item.qty).toLocaleString()}</p>
                    <div class="flex items-center gap-2 mt-2">
                        <button onclick="changeQty(${index}, -1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-sm" aria-label="Decrease quantity">&minus;</button>
                        <span class="text-sm w-5 text-center">${item.qty}</span>
                        <button onclick="changeQty(${index}, 1)" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-sm" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" class="text-slate-500 hover:text-red-400 p-2" aria-label="Remove item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>`;
    }).join('');
    document.getElementById('cart-subtotal').innerText = `$${total.toLocaleString()}`;
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    const lines = cart.map((item, i) =>
        `${i + 1}. ${item.title} (${item.brand})\n    Qty: ${item.qty} x $${item.price.toLocaleString('en-US')} = $${(item.price * item.qty).toLocaleString('en-US')}`);
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const message = 'Hello SH Mobile, I would like to place an order:\n\n' +
        lines.join('\n') +
        `\n\nTotal: $${total.toLocaleString('en-US')}\n\nPlease confirm availability and delivery details.`;
    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);

    // Open WhatsApp in a new tab (falls back to same tab if the popup is blocked).
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;

    cart = [];
    updateCartUI();
    toggleCart();
    showToast('Your order was sent to WhatsApp. Please press Send to confirm it with SH Mobile.', 'success');
}

document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.classList.add('invisible');
    if (typeof closeModal === 'function') closeModal();
});

document.addEventListener('DOMContentLoaded', updateCartUI);
