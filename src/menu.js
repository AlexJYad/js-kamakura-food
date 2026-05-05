import { filters, products } from "../assets/data/data.js";

//DEBE imprimir en pantalla la información de filtros.

const filtersContainer = document.querySelector("#filters");

function renderFilters(filters) {
   filtersContainer.innerHTML = filters
      .map(
         (filter) => `
         <button class="filter" data-category="${filter}">${filter}</button>
      `,
      )
      .join("");
}

renderFilters(filters);

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

const container = document.querySelector("#products");
console.log(container);

function renderProducts(products) {
   container.innerHTML = products
      .map(
         (product) => `
         <div class="product-container">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price-container">
               <h5>${product.price} €</h5>
               <button class="add-button" data-name="${product.name}">
                  Añadir
               </button>
            </div>
         </div>
      `,
      )
      .join("");
}

renderProducts(products);

export { renderProducts };
