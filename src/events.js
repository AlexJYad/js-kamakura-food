//Intenta separar los eventos en este archivo.
import { filterProducts } from "./searcher.js";
import { addToCart } from "./cart.js";

document.addEventListener("click", (e) => {
   if (e.target.classList.contains("filter")) {
      const category = e.target.dataset.category;
      filterProducts(category);
   } else if (e.target.classList.contains("add-button")) {
      const productName = e.target.dataset.name;
      addToCart(productName);
   } else if (e.target.classList.contains("cart-menu")) {
      const cart = document.getElementById("cart-container");
      cart.style.display = cart.style.display === "flex" ? "none" : "flex";
   }
   if (e.target.classList.contains("quantity-container")) {
      console.log("Quantity container clicked");
      const quantityElement = e.target.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      console.log("Quantity increased:", quantity);
      if (e.target.querySelector("button:first-child").contains(e.target)) {
         quantity++;
         quantityElement.textContent = quantity;
         console.log("Quantity increased:", quantity);
      } else if (
         e.target.querySelector("button:last-child").contains(e.target) &&
         quantity > 1
      ) {
         quantity--;
         quantityElement.textContent = quantity;
         console.log("Quantity increased:", quantity);
      }
   }
});
