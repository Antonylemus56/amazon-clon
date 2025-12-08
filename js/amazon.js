let productosHTML ='';

products.forEach((producto) => {
    productosHTML  += `

            
        <div class="product-container ">
            <div class="product-image-container">
                <img class="product-image"
                src="${producto.imagen}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${producto.nombre}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${producto.calificacion.estrellas*10}.png">
                <div class="product-rating-count link-primary">
                ${producto .calificacion.cantidad}
                </div>
            </div>

           <div class="product-price">
               L. ${((producto.price$dolar/100)*25.17).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
                </select>
            </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button 
          button-primary js-add-to-cart" data-product-id="${producto.id}">
            Add to Cart
          </button>
        </div>
    `;
});

console.log(productosHTML);
document.querySelector('.js-product-grid').innerHTML = productosHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      let matchingItem;

      carro.forEach((item) => {
        if (item.productId === productId) {
          
          matchingItem = item;
          
        }
      });

      if (matchingItem) {
        matchingItem.quantity++;
      }else{
        carro.push({
          productId: productId,
          quantity: 1
        });
      }
      let cantidadcarro = 0;

      carro.forEach((item) => {
        cantidadcarro += item.quantity;
      });

     

      document.querySelector('.js-cart-quantity').innerHTML = cantidadcarro;
  });
});