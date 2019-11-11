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
    let randomElement = getRandElement(allElements);

    setRandColor(randomElement);

    let randomColoredElementListItem = getRandElement(coloredElementList);

    setLastBackground(randomColoredElementListItem);
}

let randomElement = getRandElement(allElements);

setRandColor(randomElement);

let interval = setInterval(changeColorInterval,200);