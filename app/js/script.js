/*let allElements = document.querySelectorAll("*");

let coloredElementList = [];

function getRandElement(elementList) {
    return elementList[Math.floor(Math.random() * elementList.length)];
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandColor(element) {
    let style = window.getComputedStyle(element);

    let lastBackground = style.background;

    element.style.background = getRandomColor();
    coloredElementList.push({element: element, lastBackground: lastBackground});
}

function backLastColor(element) {
    let findColoredElementIndex = coloredElementList.findIndex(item => {
        return item.element === element
    });

    if (findColoredElementIndex !== -1) {
        element.style.background = coloredElementList[findColoredElementIndex].lastBackground;
        coloredElementList.splice(findColoredElementIndex, 1);
    }

}

function changeColorInterval() {

    let randomElement = getRandElement(allElements);

    setRandColor(randomElement);
    randomElement = getRandElement(allElements);
    backLastColor(randomElement);
}

let randomElement = getRandElement(allElements);

setRandColor(randomElement);

let interval = setInterval(changeColorInterval, 200);*/

  //////////
 //task 2//
//////////


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
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-7/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-8/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-9/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-10/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-11/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-12/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-13/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-14/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-15/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-16/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    },
    {
        supp: "Supplier’s Name Here",
        img: "assets/img/home-product-17/image@2x.jpg",
        prod: "Product Name Here",
        price: "$29,354.75",
    }
];

let notDisplayedElementList = marketItem;

function getRandElement(elementList) {
    return elementList[Math.floor(Math.random() * elementList.length)];
}


function createMenuItem(priority, size) {

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

    let svg = document.createElement("svg");

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
    p.innerText = randItem.price;
    div.appendChild(p);

    svg.className = "o-shape-logo c-menu-item__logo";
    svg.innerHTML = '<use xlink:href="#shape" />';

    /*let use = document.createElement("use");
    use.setAttribute('xlink:href','#shape');
    svg.appendChild(use);*/

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

function setContent(menuTopElements, menuBottomLeftElements, menuBottomRightElements) {

    marketItem.filter(item => {
        return item.type === "top"
    }).forEach(item => {
        menuTopElements.appendChild(createMenuItem("top"))
    });

    marketItem.filter(item => {
        return item.type !== "top"
    }).forEach((item, i) => {
        if (i === 0) {
            menuBottomLeftElements.appendChild(createMenuItem("", "large"));
            return;
        }
        if (i === 9) {
            menuBottomRightElements.appendChild(createMenuItem("", "large"));
            return;
        }
        if (i % 2 === 0) {
            menuBottomLeftElements.appendChild(createMenuItem());
        } else {
            menuBottomRightElements.appendChild(createMenuItem());
        }
    });

}

let menuTopElements = document.querySelector(".home-menu-top");

let menuBottomLeftElements = document.querySelectorAll(".home-menu-bottom__wrap")[0];

let menuBottomRightElements = document.querySelectorAll(".home-menu-bottom__wrap")[1];

setContent(menuTopElements, menuBottomLeftElements, menuBottomRightElements);
