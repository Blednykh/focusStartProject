/*
let allElements = document.querySelectorAll("*");

let coloredElementList = [];

function getRandElement(elementList){
    return elementList[Math.floor(Math.random()*elementList.length)];
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandColor(element){
    let style = window.getComputedStyle(element);

    let lastBackground = style.background;

    element.style.background = getRandomColor();
    coloredElementList.push({element: element,lastBackground: lastBackground});
}

function setLastBackground(listElement){
    listElement.element.style.background = listElement.lastBackground;
    coloredElementList.splice(coloredElementList.findIndex(item=>{
        return item===listElement
    }),1);
}

function changeColorInterval(){
    console.log(coloredElementList);
    let randomElement = getRandElement(allElements);

    setRandColor(randomElement);

    let randomColoredElementListItem = getRandElement(coloredElementList);

    setLastBackground(randomColoredElementListItem);
}

let randomElement = getRandElement(allElements);

setRandColor(randomElement);

let interval = setInterval(changeColorInterval,200);*/
let marketItem = [
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-1/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
        type: "top"
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-2/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
        type: "top"
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-3/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
        type: "top"
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-4/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-5/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-6/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    }
];

let notDisplayedElementList = marketItem;

function getRandElement(elementList){
    return elementList[Math.floor(Math.random()*elementList.length)];
}


function createMenuTopItem(){
    let randItem = getRandElement( notDisplayedElementList.filter(item=>{
        return item.type==="top"
    }));
    console.log(randItem);
    return `<section class=\"c-menu-item home-menu-top-item\">
                 <img src="${randItem.img}" class="c-menu-item__img">
                  <div class="c-menu-item__description">
                        <div>
                            <p class="c-menu-item__supp">${randItem.supp}</p>
                            <p class="c-menu-item__prod">${randItem.prod}</p>
                            <p class="c-menu-item__price">${randItem.price}</p>
                        </div>
                        <div>
                            <svg class="o-shape-logo c-menu-item__logo"><use xlink:href="#shape" /></svg>
                        </div>
                    </div>
    </section>`;
}
function createMenuBottomItem(){
    let randItem = getRandElement( notDisplayedElementList.filter(item=>{
        return item.type!=="top"
    }));
    return ` <section class="c-menu-item home-menu-bottom-item">
                        <img src="${randItem.img}" class="c-menu-item__img">
                         <div class="c-menu-item__description">
                             <div>
                                 <p class="c-menu-item__supp">${randItem.supp}</p>
                                 <p class="c-menu-item__prod">${randItem.prod}</p>
                                    <p class="c-menu-item__price">${randItem.price}</p>
                             </div>
                             <div>
                                 <svg class="o-shape-logo c-menu-item__logo"><use xlink:href="#shape" /></svg>
                             </div>
                        </div>
                    </section>`;
}

function createMenuBottomItemLarge() {
    let randItem = getRandElement( notDisplayedElementList.filter(item=>{
        return item.type!=="top"
    }));
    return ` <section class="c-menu-item home-menu-bottom-item t-size-large">
                        <img src="${randItem.img}" class="c-menu-item__img">
                         <div class="c-menu-item__description">
                             <div>
                                 <p class="c-menu-item__supp">${randItem.supp}</p>
                                 <p class="c-menu-item__prod">${randItem.prod}</p>
                                    <p class="c-menu-item__price">${randItem.price}</p>
                             </div>
                             <div>
                                 <svg class="o-shape-logo c-menu-item__logo"><use xlink:href="#shape" /></svg>
                             </div>
                        </div>
                    </section>`;
}

function setContent(menuTopElements,menuBottomLeftElements,menuBottomRightElements){

/*    let img = document.createElement("img");
    img.className="c-menu-item__img";
    img.src ="assets/img/home-product-1/image@2x.jpg";*/
    for(let i=0;i<3;i++){
        menuTopElements.innerHTML += createMenuTopItem();
    }

    for(let i=0;i<marketItem.map(item=>{
        return item.type!=="top"
    }).length;i++){
        if(i===0){
            menuBottomLeftElements.innerHTML += createMenuBottomItemLarge();
            continue;
        }
        if(i===9){
            menuBottomRightElements.innerHTML += createMenuBottomItemLarge();
            continue;
        }
        if(i % 2 === 0){
            menuBottomLeftElements.innerHTML += createMenuBottomItem();
        }
        else{
            menuBottomRightElements.innerHTML += createMenuBottomItem();
        }
    }


  /*  element.innerHTML = img;*/
}

let menuTopElements = document.querySelector(".home-menu-top");
let menuBottomLeftElements = document.querySelectorAll(".home-menu-bottom__wrap")[0];
let menuBottomRightElements = document.querySelectorAll(".home-menu-bottom__wrap")[1];
setContent(menuTopElements,menuBottomLeftElements,menuBottomRightElements);
