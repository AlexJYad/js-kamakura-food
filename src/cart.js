//DEBE contener las funcionalidades del carrito de compras.

import { products } from "../assets/data/data.js";

function createCart(product) {
   const cartItem = document.createElement("div");
   cartItem.classList.add("cart-container");

   cartItem.innerHTML = `
   <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
   <div class="text-container">
      <h3>${product.name}</h3>
      <h5>${product.price} €</h5>
   </div>
   <div class="quantity-container" id="quantity">
      <button>+</button>
      <p class="quantity">1</p>
      <button>-</button>
   </div>
`;
   return cartItem;
}

function addToCart(productName) {
   const product = products.find((p) => p.name === productName);
   if (product) {
      const cartProducts = document.getElementById("cart-products");
      const placeholderItem = cartProducts.querySelector(".cart-container");
      const placeholderText = cartProducts.querySelectorAll("h3");
      placeholderText.forEach((text) => {
         if (text.textContent === "Añade un plato a tu menú") {
            text.remove();
         }
      });
      // 2. Проверяем, есть ли уже этот продукт в корзине
      const productExists = cartProducts.querySelectorAll(".cart-container");
      let exist = false;

      if (productExists.length > 0) {
         productExists.forEach((item) => {
            const itemName = item.querySelector("h3").textContent;
            if (itemName === product.name) {
               const quantityElement = item.querySelector(".quantity");
               let quantity = parseInt(quantityElement.textContent);
               quantity++;
               quantityElement.textContent = quantity;
               exist = true;
            }
         });
      }

      // 3. Если продукта нет, добавляем его в корзину
      if (!exist) {
         cartProducts.appendChild(createCart(product));
      }
   } else {
      console.log(`Producto no encontrado: ${productName}`);
   }
}

function removeFromCart(productName) {
   const cartProducts = document.querySelector("#cart-products");
   const cartItems = cartProducts.querySelectorAll(".cart-container");
   cartItems.forEach((item) => {
      const itemName = item.querySelector("h3").textContent;
      if (itemName === productName) {
         const quantityElement = item.querySelector(".quantity");
         let quantity = parseInt(quantityElement.textContent);
         if (quantity > 1) {
            quantity = 0;
            quantityElement.textContent = quantity;
         }
         item.remove();
      }
   });
}

function cartTotal() {
   const cartProducts = document.querySelector("#cart-products");
   const cartItems = cartProducts.querySelectorAll(".cart-container");
   let total = 0;

   cartItems.forEach((item) => {
      const priceElement = item.querySelector("h5");
      const quantityElement = item.querySelector(".quantity");
      const price = parseFloat(priceElement.textContent);
      const quantity = parseInt(quantityElement.textContent);
      total += price * quantity;
   });

   return total;
}

function cartTotalDisplay() {
   const totalElement = document.getElementById("cart-total");
   totalElement.textContent = `Total: ${cartTotal()} €`;
}

export { addToCart, removeFromCart, cartTotal, cartTotalDisplay };
