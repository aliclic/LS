import { products } from './data/products.json';

function createAd({ image, name, actual_price, installments }) {
  return `<li class="product-item">
  <div class="product-box-image">
    <img src="${image}" class="product-image">
  </div>
  <p class="product-name">${name}</p>
  <div class="product-price">
    <p class="product-cost">
      <span class="actual-price">${actual_price}</span>
      <span class="installments">${installments}</span>
    </p>
  </div>
</li>`
}

const listProduct = products.map((product) => createAd(product)).join('');
  
const product = document.querySelector('.catalog');

product.innerHTML = listProduct;