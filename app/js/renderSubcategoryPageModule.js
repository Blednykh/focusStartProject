import {sendRequest} from "./module_api.js";

function renderPage(basket, title, item) {
    let path__item = document.querySelectorAll(".o-path__item");
    path__item[0].innerText = title;
    path__item[1].innerText = item;
    let h2 = document.querySelector(".main_type_menu__h2");
    h2.innerText = item;


    let pathPart = item.split(" ").join("-").toLowerCase();

    let HOME_SUB_URL_LIST = [
        `http://localhost:3000/data/subcategory-items/${pathPart}/${pathPart}ItemsA.json`,
        `http://localhost:3000/data/subcategory-items/${pathPart}/${pathPart}ItemsB.json`
    ];

    let url = HOME_SUB_URL_LIST[Math.floor(Math.random() * HOME_SUB_URL_LIST.length)];

    sendRequest('GET',url)
        .then(response=>{
            let marketItem = response;

            let menuBox = document.querySelector(".menu-box");
            marketItem
                .forEach(item => {
                    let temp = document.getElementById("temp_type_subcategory-list");

                    let clon = temp.content.cloneNode(true);

                    let productImg = clon.querySelector(".c-menu-item__img");
                    productImg.src = item.img;

                    let productName = clon.querySelector(".c-menu-item__prod");

                    productName.innerText = item.prod;

                    let supplierName = clon.querySelector(".c-menu-item__supp");

                    supplierName.innerText = item.supp;

                    let productPice = clon.querySelector(".c-menu-item__price");

                    productPice.innerText = `$${item.price}`;

                    let svg = clon.querySelector(".o-shape-logo");
                    svg.addEventListener("click", ()=>{
                        basket.addGood(item);
                    });
                    menuBox.appendChild(clon);

                });
        })
}

export function renderSubcategoryPage(basket, title, item){
    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);

    mainElement.className = `l-main main_type_menu`;

    let temp = document.getElementById("temp_type_subcategory");

    let pageClon = temp.content.cloneNode(true);

    mainElement.appendChild(pageClon);

    renderPage(basket, title, item);
}