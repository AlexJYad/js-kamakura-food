<div align="center">

# 🍴 Kamakura Food
### Dynamic menu & shopping cart for a Japanese restaurant landing page

*Frontend training exercise — vanilla JS DOM manipulation, no frameworks*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![No Frameworks](https://img.shields.io/badge/Frameworks-none-2ea44f?style=for-the-badge)](#)

[**📋 Original task brief**](https://github.com/AlexJYad/js-kamakura-food/blob/main/README-task.md)

</div>

---

## 📖 About the project

A menu page for a fictional Japanese restaurant, **Kamakura Food** — built to practice pure DOM manipulation without any framework.

The menu and category data already existed as ready-made arrays that couldn't be touched, so the whole point of the exercise was to render everything on screen *dynamically*: filters, dishes, and a working shopping cart, all driven purely by JavaScript logic reacting to that data.

> This project started as a guided training exercise (forked from a course template) and was completed by me as part of my frontend development practice. The original assignment brief is kept in [`readme-task.md`](https://github.com/AlexJYad/js-kamakura-food/blob/main/README-task.md) for reference.

---

## ✨ Features

| | Implemented |
|---|---|
| 🍱 | Category filters rendered dynamically from a data array — clicking one shows only matching dishes |
| 📋 | Full menu rendered dynamically from an array of dish objects, no hardcoded markup |
| 🛒 | Toggleable shopping cart — opens on click, closes on a second click |
| ➕ | "Añadir" button adds a dish to the cart (no duplicates); "x" removes it |
| 🔢 | Per-item quantity counter with live subtotal + running cart total; item disappears when count hits 0 |
| 🧾 | Checkout receipt generated on "Proceder al pago" with dishes, quantities and prices |
| 🎯 | **Bonus:** payment modal matching the target design, resets cart & receipt on close |

---

## 🛠️ Tech stack

- **Vanilla JavaScript (ES Modules)** — no frameworks, no libraries
- **HTML5 / CSS3**
- **Vite** — dev server & bundler
- **Vitest + jsdom** — unit tests for DOM-driven logic

---

## 📂 Repository structure

```
js-kamakura-food/
├── assets/        # data (menu + categories), images
├── src/           # JS modules: rendering, cart logic, events
├── styles/        # CSS
├── tests/         # unit tests (Vitest + jsdom)
├── index.html
├── package.json
├── readme-task.md # original assignment brief
└── vite.config.js
```

---

## 🚀 Running locally

```bash
git clone https://github.com/AlexJYad/js-kamakura-food.git
cd js-kamakura-food
npm install
npm run dev
```

Run the tests:

```bash
npm test
```

---

## ✅ Checklist

### Done

- [x] Dynamic rendering of category filters
- [x] Dynamic rendering of the menu
- [x] Toggleable shopping cart
- [x] Add / remove dish from cart (no duplicates)
- [x] Quantity counter with subtotal + total calculation
- [x] Auto-remove item at 0 quantity
- [x] Checkout receipt
- [x] Bonus: payment modal with reset on close
- [x] Code split into separate modules (rendering / cart / events)
- [x] Unit tests with Vitest + jsdom

---

## 🎓 What I practiced

- DOM manipulation without a framework
- Rendering UI dynamically from arrays of objects
- Event delegation and small-scale state management in plain JS
- ES6+ features (`map`, `filter`, `reduce`, `forEach`, template strings) instead of string concatenation
- Writing unit tests for DOM logic with Vitest/jsdom
