import {sendRequest} from "./module_api.js";
import {Basket} from "./Basket.js";


function getRandElement(elementList) {
    return elementList[Math.floor(Math.random() * elementList.length)];
}


function createMenuItem(basket, notDisplayedElementList, priority, size) {

    let randItem = getRandElement(notDisplayedElementList.filter(item => {
        return (priority === "top") ? item.type === "top" : item.type !== "top";
    }));

    notDisplayedElementList.splice(notDisplayedElementList.findIndex(item => {
        return item === randItem
    }), 1);


    let section = document.createElement("section");

    let img = document.createElement("img");

    let cMenuItem__description = document.createElement("div");

    let div = document.createElement("div");

    let svg = document.createElement("img");

    let p = document.createElement("p");

    p.className = "c-menu-item__supp";
    p.innerText = randItem.supp;
    div.appendChild(p);
    p = p.cloneNode();
    p.className = "c-menu-item__prod";
    p.innerText = randItem.prod;
    div.appendChild(p);
    p = p.cloneNode();
    p.className = "c-menu-item__price";
    p.innerText = "$"+randItem.price;
    div.appendChild(p);

    svg.className = "o-shape-logo c-menu-item__logo";
   /* svg.innerHTML = '<use xlink:href="#shape" />';*/

    /*let use = document.createElement("use");
    use.setAttribute('xlink:href','#shape');
    svg.appendChild(use);*/

    svg.addEventListener("click", ()=>{
        basket.addGood(randItem);
    });



    cMenuItem__description.className = "c-menu-item__description";
    cMenuItem__description.appendChild(div);
    div = div.cloneNode();
    div.appendChild(svg);
    cMenuItem__description.appendChild(div);

    img.className = "c-menu-item__img";
    img.src = randItem.img;

    section.className = "c-menu-item";
    section.className += (priority === "top") ? " home-menu-top-item" : " home-menu-bottom-item";
    section.className += (size === "large") ? " t-size-large" : "";

    section.appendChild(img);
    section.appendChild(cMenuItem__description);

    return section;
}



export function setContent(menuTopElements, menuBottomLeftElements, menuBottomRightElements, basket) {
    function callback(response){

    }

    sendRequest('GET',"http://localhost:3000/data/marketItems.json")
        .then(response=>{
            let {marketItem} = response;

            let notDisplayedElementList = marketItem;

            marketItem
                .filter(item => item.type === "top")
                .forEach(item => {
                    menuTopElements.appendChild(createMenuItem(basket, notDisplayedElementList,"top"))
                });

            marketItem
                .filter(item => {
                    return item.type !== "top"
                }).forEach((item, i) => {
                if (i === 0) {
                    menuBottomLeftElements.appendChild(createMenuItem(basket, notDisplayedElementList,"", "large"));
                    return;
                }
                if (i === 9) {
                    menuBottomRightElements.appendChild(createMenuItem(basket, notDisplayedElementList,"", "large"));
                    return;
                }
                if (i % 2 === 0) {
                    menuBottomLeftElements.appendChild(createMenuItem(basket, notDisplayedElementList));
                } else {
                    menuBottomRightElements.appendChild(createMenuItem(basket, notDisplayedElementList));
                }
            });
        });

}