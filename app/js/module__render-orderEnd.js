export function renderOrderEnd(){
    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);

    mainElement.className = `l-main main_type_order-step-3`;

    let temp = document.getElementById("temp_type_order-end");

    let orderClon = temp.content.cloneNode(true);

    mainElement.appendChild(orderClon);
}