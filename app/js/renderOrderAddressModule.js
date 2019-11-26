function renderAddress(address, inputList) {
    let addressData = Object.values(address.getAddress());

    inputList.forEach((item, i) => {
        item.value = addressData[i];
    })
}


export function renderOrderAddress(basket, address) {
    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);

    mainElement.className = `l-main main_type_order`;

    let temp = document.getElementById("temp_type_address");

    let orderClon = temp.content.cloneNode(true);

    mainElement.appendChild(orderClon);


    let inputList = mainElement.querySelectorAll(".input-box__input");

    renderAddress(address, inputList);

    inputList[0].addEventListener("keyup", () => {
        address.firstName = inputList[0].value;
    });
    inputList[1].addEventListener("keyup", () => {
        address.lastName = inputList[1].value;
    });
    inputList[2].addEventListener("keyup", () => {
        address.companyName = inputList[2].value;
    });
    inputList[3].addEventListener("keyup", () => {
        address.country = inputList[3].value;
    });
    inputList[4].addEventListener("keyup", () => {
        address.town = inputList[4].value;
    });
    inputList[5].addEventListener("keyup", () => {
        address.postcode = inputList[5].value;
    });
    inputList[6].addEventListener("keyup", () => {
        address.address = inputList[6].value;
    });
    inputList[7].addEventListener("keyup", () => {
        address.email = inputList[7].value;
    });
    inputList[8].addEventListener("keyup", () => {
        address.phone = inputList[8].value;
    });

    //выделение обязательных полей при отправке формы с незаполненными обязательными полями
    let requiredInputList = mainElement.querySelectorAll(".required__input");

    let requiredBoxList = mainElement.querySelectorAll(".required__box");

    let nextButton = document.querySelectorAll(".order-box__button")[1];
    nextButton.addEventListener("click", () => {
        requiredInputList.forEach((item, i) => {
            item.required = true;
            requiredBoxList[i].style = "display: block";

            //переход на Payment в случае валидности всех форм
            item.checkValidity() && (location.href = "#order-payment");
        })
    })
}