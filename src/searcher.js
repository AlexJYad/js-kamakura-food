//DEBE buscar los productos por los filtros
import { products } from "../assets/data/data.js";
import { renderProducts } from "./menu.js";
function filterProducts(category) {
   if (category === "todos") {
      renderProducts(products);
      return;
   }

   const filtered = products.filter((product) => product.category === category);
   renderProducts(filtered);
}

export { filterProducts };
