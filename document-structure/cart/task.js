const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
    const quantityValue = product.querySelector('.product__quantity-value');
    const decButton = product.querySelector('.product__quantity-control_dec');
    const incButton = product.querySelector('.product__quantity-control_inc');
    const addButton = product.querySelector('.product__add');

    // 1. Управление количеством товара
    decButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityValue.textContent);
        if (currentValue > 1) {
            quantityValue.textContent = currentValue - 1;
        }
    });

    incButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityValue.textContent);
        quantityValue.textContent = currentValue + 1;
    });

    // 2. Добавление товара в корзину
    addButton.addEventListener('click', () => {
        const productId = product.dataset.id;
        const productImageSrc = product.querySelector('.product__image').src;
        const quantity = parseInt(quantityValue.textContent);

        // Ищем товар с таким же id в корзине
        const productInCart = Array.from(cartProducts.children).find(
            item => item.dataset.id === productId
        );

        if (productInCart) {
            // Если товар уже есть, увеличиваем его количество
            const countElement = productInCart.querySelector('.cart__product-count');
            countElement.textContent = parseInt(countElement.textContent) + quantity;
        } else {
            // Если товара нет, создаем новый элемент
            const cartProductHTML = `
                <div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${productImageSrc}">
                    <div class="cart__product-count">${quantity}</div>
                </div>
            `;
            cartProducts.insertAdjacentHTML('beforeend', cartProductHTML);
        }
    });
});