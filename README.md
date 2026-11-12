# Saber Haidari Mobile Shop

Welcome to the **Saber Haidari Mobile Shop** official website project! This is a modern, static, 3-page web application featuring high-end 2D/3D animations, crisp responsive UI/UX, product filtering, interactive quick-view modal, and a persistent cart drawer.

---

## 📁 Project & Folder Structure

```
Saber_Haidari_Mobile_Shop/
├── index.html        # Page 1: Home & Featured Showcase
├── shop.html         # Page 2: Full Product Catalog & Interactive Filters
├── contact.html      # Page 3: Contact Us & Store Locator
├── cart.js           # Shared cart logic (localStorage-persisted)
├── README.md         # Documentation & Setup Instructions
```

---

## 📄 Page Overview & Features

### 1. `index.html` (Home Page)
- **3D Hero Banner:** Interactive 3D phone showcase powered by Three.js with floating/rotating animations.
- **Brand Quick Selector:** Filter featured smartphones by Apple, Samsung, Xiaomi, and Google (links open the catalog pre-filtered).
- **Top Deals & Featured Showcase:** Dynamic product cards with hover micro-interactions, spec tags, and quick-add actions.
- **Interactive Cart Drawer:** Dynamic item counters and drawer overlays.

### 2. `shop.html` (Full Catalog Page)
- **Live Search & Category Filters:** Live search by model/brand and a brand filter.
- **Product Quick View Modal:** Click any phone to see the photo, storage, RAM, and price.
- **Full Shopping Cart Integration:** Instant price calculations and item counter updates.

### 3. `contact.html` (Contact & Store Info Page)
- **Interactive Contact Form:** Inquiry form with confirmation (front-end only; no backend).
- **Store Info:** Physical address and support contact details.

---

## ⚡ How to Run

Because this project uses standard web standards (HTML5, CSS3, JavaScript, Tailwind CSS CDN, FontAwesome, and Three.js), **no server installation or `npm install` is required**!

### Option 1: Direct Browser Launch (Easiest)
1. Extract the `Saber_Haidari_Mobile_Shop.zip` file.
2. Double-click **`index.html`** (or right-click and choose **Open with** -> **Google Chrome**, **Firefox**, **Edge**, or **Safari**).

### Option 2: Live Server (Recommended for Developers)
1. Open the extracted `Saber_Haidari_Mobile_Shop` folder in **VS Code**.
2. Install the **Live Server** extension in VS Code.
3. Click **"Go Live"** at the bottom right of VS Code to launch with hot-reload.

---

## 🎨 Tech Stack & Libraries Used
- **Tailwind CSS (v3 CDN):** Utility-first responsive styling.
- **Three.js:** Real-time 3D rendering for interactive smartphone models.
- **FontAwesome:** Vector iconography.
- **Google Fonts (Inter):** Clean modern typography.

© 2026 Saber Haidari Mobile Shop. All rights reserved.
