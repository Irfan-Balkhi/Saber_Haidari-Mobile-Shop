// Shop contact details: the single place to change the phone number or address.
// WhatsApp number: digits only, with country code. Orders, chat links and the contact form go here.
const WHATSAPP_NUMBER = '971557250280';
const SHOP_PHONE_DISPLAY = '+971 55 725 0280';
const SHOP_ADDRESS = 'Deira Frij Al Murar, Shop No. 14, Dubai, UAE';

// Fill elements marked data-shop-phone (text + tel: link) and data-shop-address (text).
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-shop-phone]').forEach(el => {
        el.textContent = SHOP_PHONE_DISPLAY;
        if (el.tagName === 'A') el.href = 'tel:+' + WHATSAPP_NUMBER;
    });
    document.querySelectorAll('[data-shop-address]').forEach(el => { el.textContent = SHOP_ADDRESS; });
});
