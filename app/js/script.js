import {setHeaderBottomContent} from "./module__subcategories-add.js";
import {sendRequest} from "./module_api.js";
import {Basket} from "./Basket.js";
import {createBasketBox} from "./module__basketBox-add.js";
import {renderHome} from "./renderHomeModule.js";
import {renderBasket} from "./renderBasketModule.js";
import {renderOrderAddress} from "./module__render-orderAddress.js";
import {renderOrderPayment} from "./module__render-orderPayment.js";
import {renderOrderEnd} from "./module__render-orderEnd.js";
import {Address} from "./Address.js";
import {Router} from "./Router.js";
import {renderSubcategoryPage} from "./renderSubcategoryPageModule.js";


let router = new Router();

//Инициализация корзины
let basket = new Basket();

//Инициализация объекта с данными об адресе покупателя
let address = new Address();

//Заполнение мини-корзины в шапке
createBasketBox(basket);

//Создание подкатегорий в шапке
let categoryList__li = document.querySelectorAll(".category-list__li");

sendRequest('GET',"http://localhost:3000/data/goods-categories/categories.json")
    .then(response=>{
        let HeaderBottomItems = response;

        categoryList__li.forEach((item, i) => setHeaderBottomContent(item, i, HeaderBottomItems, basket, router));
    });


//Рендер необходимой страницы
locationHashChanged();

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
       default:{
           let findOpenedSubcategoryIndex = router.findIndexByHash(location.hash);

           if(findOpenedSubcategoryIndex !== -1){
               renderSubcategoryPage(
                   basket,
                   router.subcategoryData[findOpenedSubcategoryIndex].title,
                   router.subcategoryData[findOpenedSubcategoryIndex].subcategoryItem
               );
           }
           else{
               location.href = "";
           }

        }

    }

}

window.onhashchange = locationHashChanged;