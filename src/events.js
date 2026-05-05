//Intenta separar los eventos en este archivo.
import { filterProducts } from "./searcher.js";

document.addEventListener("click", (e) => {
   if (e.target.classList.contains("filter")) {
      const category = e.target.dataset.category;
      filterProducts(category);
   }
});
