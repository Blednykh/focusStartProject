import {sendRequest} from "./apiModule.js";

const HOME_ITEMS_URL_LIST = [
    "http://localhost:3000/data/home-items/homeItemsA.json",
    "http://localhost:3000/data/home-items/homeItemsB.json"
];

function createMenuItem(basket, marketItem, priority, size) {
    let temp = document.getElementById("temp_type_home-item");

    let clone = temp.content.cloneNode(true);

    let section = clone.querySelector(".c-menu-item");

    let img = clone.querySelector(".c-menu-item__img");

    let supp = clone.querySelector(".c-menu-item__supp");

    let prod = clone.querySelector(".c-menu-item__prod");

    let price = clone.querySelector(".c-menu-item__price");

    let svg = clone.querySelector(".c-menu-item__logo");

    section.className = "c-menu-item";
    section.className += (priority === "top") ? " home-menu-top-item" : " home-menu-bottom-item";
    section.className += (size === "large") ? " t-size-large" : "";

    img.className = "c-menu-item__img";
    img.src = marketItem.img;

    supp.innerText = marketItem.supp;
    prod.innerText = marketItem.prod;
    price.innerText = "$" + marketItem.price;

    svg.addEventListener("click", () => {
        basket.addGood(marketItem);
    });

    return clone;
}


export function setHomeContent(menuTopElements, menuBottomLeftElements, menuBottomRightElements, basket) {

    let url = HOME_ITEMS_URL_LIST[Math.floor(Math.random() * HOME_ITEMS_URL_LIST.length)];

    sendRequest('GET', url)
        .then(response => {
            let marketItems = response;

            marketItems
                .filter(item => item.type === "top")
                .forEach(item => {
                    menuTopElements.appendChild(createMenuItem(basket, item, "top"))
                });

            marketItems
                .filter(item => {
                    return item.type !== "top"
                }).forEach((item, i) => {
                if (i === 0) {
                    menuBottomLeftElements.appendChild(createMenuItem(basket, item, "", "large"));
                    return;
                }
                if (i === 9) {
                    menuBottomRightElements.appendChild(createMenuItem(basket, item, "", "large"));
                    return;
                }
                if (i % 2 === 0) {
                    menuBottomLeftElements.appendChild(createMenuItem(basket, item));
                } else {
                    menuBottomRightElements.appendChild(createMenuItem(basket, item));
                }
            });
        });

}