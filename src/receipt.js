//Aquí intenta poner las funcionalidades del recibo
import { cartTotal } from "./cart.js";

function displayReceipt() {
   const receiptContainer = document.getElementById("receipt-container");
   const receiptContainerItemes = document.querySelector(".receipt-product");
   const receiptTotal = document.getElementById("receipt-total");
   const cartItems = document.querySelectorAll(".cart-container");
   receiptContainerItemes.innerHTML = "";
   cartItems.forEach((item) => {
      const productName = item.querySelector("h3").textContent;
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      const price = parseFloat(item.querySelector("h5").textContent);

      const receiptItem = document.createElement("div");
      receiptItem.className = "receipt-product";
      receiptItem.innerHTML = `
         <h3>${productName}</h3>
         <div class="receipt-price">
            <p>Cantidad: ${quantity}</p>
            <h5>Subtotal €${(price * quantity).toFixed(2)}</h5>
         </div>
      `;
      receiptContainerItemes.appendChild(receiptItem);
   });

   receiptTotal.textContent = `Total a pagar: ${cartTotal()} €`;
   receiptContainer.style.display = "block";
}

export { displayReceipt };
