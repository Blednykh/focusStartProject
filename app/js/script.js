import {setHeaderBottomContent} from "./module__subcategories-add.js";
import {sendRequest} from "./module_api.js";
import {Basket} from "./Basket.js";
import {createBasketBox} from "./module__basketBox-add.js";
import {renderHome} from "./module__render-home.js";
import {renderBasket} from "./module__render-basket.js";
import {renderOrderAddress} from "./module__render-orderAddress.js";
import {renderOrderPayment} from "./module__render-orderPayment.js";
import {renderOrderEnd} from "./module__render-orderEnd.js";
import {Address} from "./Address.js";


let sum = localStorage.getItem("sum");

let goodsList = JSON.parse(localStorage.getItem("goodsList"));
/*localStorage.removeItem("sum");
localStorage.removeItem("goodList");*/

//Инициализация корзины
let basket = (sum === null || goodsList === null) ? new Basket() : new Basket(sum, goodsList);
let address = new Address();
//Заполнение мини-корзины в шапке
createBasketBox(basket);

//Событие для рендера страницы корзины
let basket__svg = document.querySelector(".l-header_pos_top__logo-basket");

basket__svg.addEventListener("click", ()=>{
    renderBasket(basket,address);
});






//Рендер домашней страницы
renderHome(basket);


//Создание подкатегорий в шапке
let categoryList__li = document.querySelectorAll(".category-list__li");



sendRequest('GET',"http://localhost:3000/data/good-categories/categories.json")
    .then(response=>{
        let HeaderBottomItems = response;

        categoryList__li.forEach((item, i) => setHeaderBottomContent(item, i, HeaderBottomItems, basket));
    });

function locationHashChanged() {
    switch (location.hash){
        case "#basket":  {
            renderBasket(basket,address);
            break;
        }
        case  "":{
            renderHome(basket);
            break;
        }
        case "#order-address":{
            renderOrderAddress(basket,address);
            break;
        }
        case "#order-payment":{
            renderOrderPayment(basket,address);
            break;
        }
        case "#order-end":{
            renderOrderEnd();
            break;
        }

    }

}

window.onhashchange = locationHashChanged;