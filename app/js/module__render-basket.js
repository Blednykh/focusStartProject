import {Basket} from "./Basket.js";
import {renderHome} from "./module__render-home.js";
import {renderOrderAddress} from "./module__render-orderAddress.js";

function renderBasketTableContent(table, basket){
    let {goodsList} = basket;
    if(goodsList !== null){
        goodsList.forEach(item=>{
            let temp = document.getElementById("temp_type_basket-item");

            let clon = temp.content.cloneNode(true);

            let product__img = clon.querySelector(".product__img");

            product__img.src = item.img;

            let description__productName = clon.querySelector(".description__product-name");

            description__productName.innerText = item.prod;

            let description__supplierName = clon.querySelector(".description__supplier-name");

            description__supplierName.innerText = item.supp;

            let basketItem__price = clon.querySelector(".basket-item__price");

            basketItem__price.innerText = `$${item.price}`;

            let basketItem__input = clon.querySelector(".basket-item__input");

            basketItem__input.placeholder = item.count;

            let basketItem__totalPrice = clon.querySelector(".basket-item__total-price");
            basketItem__totalPrice.innerText = "$" + item.price * item.count;

            basketItem__input.addEventListener("keyup",(e)=>{
                if(Object.is(parseInt(basketItem__input.value),NaN)){
                    basketItem__input.value = "";
                }
                else{
                    if(parseInt(basketItem__input.value) === 0){
                        basket.removeGoods(item);
                        let basketItems = document.querySelectorAll(".basket__basket-item");
                        basketItems.forEach(item=>item.remove());
                        renderBasketTableContent(table, basket);
                    }
                    else{
                        basket.changeItemCount(item, basketItem__input.value);
                        basketItem__totalPrice.innerText = "$" + item.price * basketItem__input.value;
                    }
                    renderTotalPrice(basket.sum)
                }
            });

            //Удаление из корзины
            let product__logoCross = clon.querySelector(".product__logo-cross");
            product__logoCross.addEventListener("click",()=>{
                basket.removeGoods(item);
                let basketItems = document.querySelectorAll(".basket__basket-item");
                basketItems.forEach(item=>item.remove());
                renderBasketTableContent(table, basket);
                renderTotalPrice(basket.sum)
            });


            table.appendChild(clon);

        })
    }
}

function renderTotalPrice(sum){
    let mainElement = document.querySelector(".l-main");

    let price__count = mainElement.querySelector(".price__count");

    let price__item = price__count.querySelector(".price__item");

    price__item.innerText = "$" + Math.round(sum * 10 * 10) / 100;

    let totalPriceBox__price = mainElement.querySelector(".total-price-box__price");
    totalPriceBox__price.innerText = "$" + Math.round((+sum + 5) * 10 * 10) / 100;
}

export function renderBasket(basket){
    let {sum, goodsList} = basket;

    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);
    mainElement.className = `l-main main_type_basket`;

    let temp = document.getElementById("temp_type_basket");

    let BasketClon = temp.content.cloneNode(true);

    mainElement.appendChild(BasketClon);

    let path__item = mainElement.querySelector(".o-path__item");

    path__item.addEventListener("click",()=>{
        renderHome(basket);
    });

    let table = mainElement.querySelector(".basket__basket-table");

    renderBasketTableContent(table, basket);

    renderTotalPrice(sum)

    let totalPriceBoxButton = mainElement.querySelector(".total-price-box__button");
    totalPriceBoxButton.addEventListener("click",()=>{
        renderOrderAddress(basket);
    })

}