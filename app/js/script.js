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
let HeaderBottomItems = [
    {
        title: "Home Decor",
        losung: "Create & live your unique style",
        count: 25478,
        subcategoriesList: [
            [
                "Pots & Pans",
                "Pressure Cookers",
                " Kitchen Tools",
                 "Gas Stoves",
                " Dining & Serving",
                " Coffee Mugs",
                " Dinnerware & Crockery ",
                "Bar & Glassware",
            ],
            [
                "Kitchen Storage",
                " Lunch Boxes",
                " Flasks & Casseroles ",
                "Kitchen Containers",
                 "Furniture ",
                "Beds",
                " Sofas",
                 "Dining tables & Sets",
            ],
            [
                "Mattresses",
                 "Tables" ,
                "Chairs",
                 "Bean Bags",
                 "Shoe Racks",
                 "TV Units & Cabinets ",
                "Wardrobes",
            ]
        ]
    },
    {
        title: "Furniture",
        losung: "Create & live your unique style",
        count: 12643,
        subcategoriesList: [
            [
                "Furniture 1",
                "Furniture 2",
                " Furniture 3",
                "Furniture 4",
                " Furniture 5",
                "Furniture 6",
                " Furniture 7",
                "Furniture 8",
            ],
            [
                "Furniture 9",
                "Furniture 10",
                " Furniture 11",
                "Furniture 12",
                " Furniture 13",
                "Furniture 14",
                " Furniture 15",
                "Furniture 16",
            ],
            [
                "Furniture 17",
                "Furniture 18",
                " Furniture 19",
                "Furniture 20",
                " Furniture 21",
                "Furniture 22",
                " Furniture 23",
            ]
        ]
    },
    {
        title: "Lighting",
        losung: "Create & live your unique style",
        count: 25100,
        subcategoriesList: [
            [
                "Lighting 1",
                "Lighting 2",
                " Lighting 3",
                "Lighting 4",
                " Lighting 5",
                "Lighting 6",
                " Lighting 7",
                "Lighting 8",
            ],
            [
                "Lighting 9",
                "Lighting 10",
                " Lighting 11",
                "Lighting 12",
                " Lighting 13",
                "Lighting 14",
                " Lighting 15",
                "Lighting 16",
            ],
            [
                "Lighting 17",
                "Lighting 18",
                " Lighting 19",
                "Lighting 20",
                " Lighting 21",
                "Lighting 22",
                " Lighting 23",
            ]
        ]
    },
    {
        title: "Home Accents",
        losung: "Create & live your unique style",
        count: 12120,
        subcategoriesList: [
            [
                "Home Accents 1",
                "Home Accents 2",
                " Home Accents 3",
                "Home Accents 4",
                " Home Accents 5",
                "Home Accents 6",
            ],
            [
                "Home Accents 7",
                "Home Accents 8",
                " Home Accents 9",
                "Home Accents 10",
                " Home Accents 11",
                "Home Accents 12",
            ],
            [
                " Home Accents 13",
                "Home Accents 14",
                " Home Accents 15",
                "Home Accents 16",
                " Home Accents 17",
                "Home Accents 18",
            ]
        ]
    },
    {
        title: "Rugs",
        losung: "Create & live your unique style",
        count: 25100,
        subcategoriesList: [
            [
                "Rugs 1",
                "Rugs 2",
                " Rugs 3",
                "Rugs 4",
                " Rugs 5",
                "Rugs 6",
                " Rugs 7",
                "Rugs 8",
            ],
            [
                "Rugs 9",
                "Rugs 10",
                " Rugs 11",
                "Rugs 12",
                " Rugs 13",
                "Rugs 14",
                " Rugs 15",
                "Rugs 16",
            ],
            [
                "Rugs 17",
                "Rugs 18",
                " Rugs 19",
                "Rugs 20",
                " Rugs 21",
                "Rugs 22",
                " Rugs 23",
            ]
        ]
    },
    {
        title: "Outdoors",
        losung: "Create & live your unique style",
        count: 25100,
        subcategoriesList: [
            [
                "Outdoors 1",
                "Outdoors 2",
                " Outdoors 3",
                "Outdoors 4",
                " Outdoors 5",
                "Outdoors 6",
                " Outdoors 7",
                "Outdoors 8",
            ],
            [
                "Outdoors 9",
                "Outdoors 10",
                " Outdoors 11",
                "Outdoors 12",
                " Outdoors 13",
                "Outdoors 14",
                " Outdoors 15",
                "Outdoors 16",
            ],
            [
                "Outdoors 17",
                "Outdoors 18",
                " Outdoors 19",
                "Outdoors 20",
                " Outdoors 21",
                "Outdoors 22",
                " Outdoors 23",
                " Outdoors 24",
            ]
        ]
    },
    {
        title: "Holidays",
        losung: "Create & live your unique style",
        count: 18999,
        subcategoriesList: [
            [
                "Holidays 1",
                "Holidays 2",
                " Holidays 3",
                "Holidays 4",
                " Holidays 5",
                "Holidays 6",
                " Holidays 7",
                "Holidays 8",
            ],
            [
                "Holidays 9",
                "Holidays 10",
                " Holidays 11",
                "Holidays 12",
                " Holidays 13",
                "Holidays 14",
                " Holidays 15",
                "Holidays 16",
            ],
            [
                "Holidays 17",
                "Holidays 18",
                " Holidays 19",
                "Holidays 20",
                " Holidays 21",
                "Holidays 22",
                " Holidays 23",
                " Holidays 24",
                " Holidays 25",
                " Holidays 26",
            ]
        ]
    },
    {
        title: "Gifts",
        losung: "Create & live your unique style",
        count: 25301,
        subcategoriesList: [
            [
                "Gifts 1",
                "Gifts 2",
                " Gifts 3",
                "Gifts 4",
                " Gifts 5",
                "Gifts 6",
                " Gifts 7",
                "Gifts 8",
            ],
            [
                "Gifts 9",
                "Gifts 10",
                " Gifts 11",
                "Gifts 12",
                " Gifts 13",
                "Gifts 14",
                " Gifts 15",
                "Gifts 16",
            ],
            [
                "Gifts 17",
                "Gifts 18",
                " Gifts 19",
                "Gifts 20",
                " Gifts 21",
                "Gifts 22",
                " Gifts 23",
                " Gifts 24",
            ]
        ]
    },
    {
        title: "Events",
        losung: "Create & live your unique style",
        count: 25301,
        subcategoriesList: [
            [
                "Events 1",
                "Events 2",
                " Events 3",
                "Events 4",
                " Events 5",
                "Events 6",
                " Events 7",
                "Events 8",
            ],
            [
                "Events 9",
                "Events 10",
                " Events 11",
                "Events 12",
                " Events 13",
                "Events 14",
                " Events 15",
                "Events 16",
            ],
            [
                "Events 17",
                "Events 18",
                " Events 19",
                "Events 20",
                " Events 21",
                "Events 22",
                " Events 23",
                " Events 24",
            ]
        ]
    },
];

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

    marketItem
        .filter(item => item.type === "top")
        .forEach(item => {
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




function setHeaderBottomContent(element, number){

    let {title, losung, count, subcategoriesList} = HeaderBottomItems[number];

    let navItemContainer = document.createElement("section");

    navItemContainer.className="nav-item-container";

    let navItemContainerHeader = document.createElement("div");

    let h1 = document.createElement("h1");

    let p = document.createElement("p");

    let div = document.createElement("div");

    let navItemContainerContent = document.createElement("div");

    navItemContainerHeader.className = "nav-item-container__header";

    h1.className = "nav-item-container__title";
    h1.innerText = title;
    div.appendChild(h1);
    h1 = h1.cloneNode();
    h1.className = "nav-item-container__losung";
    h1.innerText = losung;
    div.appendChild(h1);
    navItemContainerHeader.appendChild(div);

    p.className = "nav-item-container__count";
    p.innerText = count + " items";
    navItemContainerHeader.appendChild(p);

    navItemContainerContent.className = "nav-item-container__content subcategories-list";

    subcategoriesList.forEach(column=>{

        let ul = document.createElement("ul");

        ul.className = "subcategories-list__column";
        column.forEach(item=>{

            let li = document.createElement("li");

            let a = document.createElement("a");

            li.className = "subcategories-list__li";
            a.href = "";
            a.innerText = item;
            li.appendChild(a);
            ul.appendChild(li);
        });
        navItemContainerContent.appendChild(ul);
    });

    navItemContainer.appendChild(navItemContainerHeader);
    navItemContainer.appendChild(navItemContainerContent);

    element.appendChild(navItemContainer);
}


let categoryList__li = document.querySelectorAll(".category-list__li");

categoryList__li.forEach((item, i) => setHeaderBottomContent(item, i));

