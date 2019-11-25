import {setContent} from "./module__home-content-add.js";


export function renderHome(basket){
    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);

    mainElement.className = `l-main main_type_home`;

    let temp = document.getElementsByTagName("template")[1];

    let homeClon = temp.content.cloneNode(true);

    mainElement.appendChild(homeClon);

    let menuTopElements = document.querySelector(".home-menu-top");

    let menuBottomLeftElements = document.querySelectorAll(".home-menu-bottom__wrap")[0];

    let menuBottomRightElements = document.querySelectorAll(".home-menu-bottom__wrap")[1];

    setContent(menuTopElements, menuBottomLeftElements, menuBottomRightElements, basket);
}