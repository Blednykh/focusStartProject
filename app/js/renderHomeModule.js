import {setHomeContent} from "./setHomeContentModule.js";


export function renderHome(basket) {
    let mainElement = document.querySelector(".l-main");

    let mainContent = document.querySelector(".l-main-content");

    let temp = document.getElementById("temp_type_home");

    let homeClon = temp.content.cloneNode(true);

    mainElement.className = `l-main main_type_home`;
    mainContent.replaceWith(homeClon);

    let menuTopElements = document.querySelector(".home-menu-top");

    let menuBottomLeftElements = document.querySelectorAll(".home-menu-bottom__wrap")[0];

    let menuBottomRightElements = document.querySelectorAll(".home-menu-bottom__wrap")[1];

    setHomeContent(menuTopElements, menuBottomLeftElements, menuBottomRightElements, basket);
}