//Intenta separar los eventos en este archivo.
import { filterProducts } from "./searcher.js";
import {
   addToCart,
   removeFromCart,
   cartTotal,
   cartTotalDisplay,
} from "./cart.js";
import { displayReceipt } from "./receipt.js";

document.addEventListener("click", (e) => {
   const filterBtn = e.target.closest(".filter");
   const addBtn = e.target.closest(".add-button");
   const cartBtn = e.target.closest(".cart-menu");
   const quantityContainer = e.target.closest(".quantity-container");
   const deleteBtn = e.target.closest(".close-button");
   const receipt = e.target.closest(".proceedPay-button");

   if (filterBtn) {
      const category = filterBtn.dataset.category;
      filterProducts(category);
   } else if (addBtn) {
      const productName = addBtn.dataset.name;
      addToCart(productName);
      cartTotalDisplay();
   } else if (cartBtn) {
      const cart = document.getElementById("cart-container");
      cart.style.display = cart.style.display === "flex" ? "none" : "flex";
   }

   if (deleteBtn) {
      const productName = deleteBtn
         .closest(".cart-container")
         .querySelector("h3").textContent;
      removeFromCart(productName);
      cartTotalDisplay();
   }

   if (quantityContainer) {
      const quantityElement = quantityContainer.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);

      const plusBtn = quantityContainer.querySelector("button:first-child");
      const minusBtn = quantityContainer.querySelector("button:last-child");

      if (plusBtn.contains(e.target)) {
         quantity++;
      } else if (minusBtn.contains(e.target) && quantity > 1) {
         quantity--;
      } else if (minusBtn.contains(e.target) && quantity === 1) {
         const productName = quantityElement
            .closest(".cart-container")
            .querySelector("h3").textContent;
         removeFromCart(productName);
      }

      quantityElement.textContent = quantity;
      cartTotalDisplay();
   }

   if (receipt) {
      if (cartTotal() > 0) {
         displayReceipt();
      }
   }
});
