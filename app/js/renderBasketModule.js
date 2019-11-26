function renderBasketTableContent(table, basket) {
    let {goodsList} = basket;
    if (goodsList !== null && goodsList.length !== 0) {
        goodsList.forEach(item => {
            let temp = document.getElementById("temp_type_basket-item");

            let clon = temp.content.cloneNode(true);

            let productImg = clon.querySelector(".product__img");

            productImg.src = item.img;

            let descriptionProductName = clon.querySelector(".description__product-name");

            descriptionProductName.innerText = item.prod;

            let descriptionSupplierName = clon.querySelector(".description__supplier-name");

            descriptionSupplierName.innerText = item.supp;

            let basketItemPrice = clon.querySelector(".basket-item__price");

            basketItemPrice.innerText = `$${parseFloat(item.price).toFixed(3)}`;

            let basketItemInput = clon.querySelector(".basket-item__input");

            basketItemInput.placeholder = item.count;

            let basketItemTotalPrice = clon.querySelector(".basket-item__total-price");
            basketItemTotalPrice.innerText = "$" + (parseFloat(item.price) * item.count).toFixed(2);

            basketItemInput.addEventListener("keyup", (e) => {
                if (Object.is(parseInt(basketItemInput.value), NaN)) {
                    basketItemInput.value = "";
                } else {
                    if (parseInt(basketItemInput.value) === 0) {
                        let basketItems = document.querySelectorAll(".basket__basket-item");

                        basket.removeGoods(item);
                        basketItems.forEach(item => item.remove());
                        renderBasketTableContent(table, basket);
                    } else {
                        basket.changeItemCount(item, basketItemInput.value);
                        basketItemTotalPrice.innerText = "$" + (item.price * basketItemInput.value).toFixed(3);
                        basketItemInput.placeholder = basketItemInput.value;
                    }
                    renderTotalPrice(basket.sum)
                }
            });

            //Удаление из корзины
            let productLogoCross = clon.querySelector(".product__logo-cross");
            productLogoCross.addEventListener("click", () => {
                basket.removeGoods(item);

                let basketItems = document.querySelectorAll(".basket__basket-item");

                basketItems.forEach(item => item.remove());
                renderBasketTableContent(table, basket);
                renderTotalPrice(basket.sum)
            });
            
            table.appendChild(clon);
        })
    }
    else {
        //Пустая корзина
        let totalPriceBoxPrice = document.querySelector(".total-price-box__price");

        let totalPriceBoxButton = document.querySelector(".total-price-box__button");

        totalPriceBoxPrice.innerText = "$0.00";
        totalPriceBoxButton.disabled = true;

        let h2 = document.createElement("h2");

        h2.innerText = "No Goods in Cart!";
        table.replaceWith(h2);
    }
}
//рендер подтабличных данных
function renderTotalPrice(sum) {
    let mainElement = document.querySelector(".l-main");

    let priceCount = mainElement.querySelector(".price__count");

    let priceItem = priceCount.querySelector(".price__item");

    priceItem.innerText = "$" + Math.round(parseFloat(sum) * 10 * 10) / 100;

    let totalPriceBoxPrice = mainElement.querySelector(".total-price-box__price");

    totalPriceBoxPrice.innerText = "$" + Math.round((parseFloat(sum) + 5) * 10 * 10) / 100;
}

export function renderBasket(basket) {
    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);
    mainElement.className = `l-main main_type_basket`;

    let temp = document.getElementById("temp_type_basket");

    let basketClon = temp.content.cloneNode(true);

    mainElement.appendChild(basketClon);

    let table = mainElement.querySelector(".basket__basket-table");

    renderTotalPrice(basket.sum);
    renderBasketTableContent(table, basket);
}