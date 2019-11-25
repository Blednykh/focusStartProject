function renderAddress(address,inputList){
    let addressData = Object.values(address.getAddress());
    inputList.forEach((item, i)=>{
        item.value = addressData[i];
    })
}


export function renderOrderAddress(basket,address){
    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);

    mainElement.className = `l-main main_type_order`;

    let temp = document.getElementById("temp_type_address");

    let orderClon = temp.content.cloneNode(true);

    mainElement.appendChild(orderClon);


    let inputList = mainElement.querySelectorAll(".input-box__input");
    renderAddress(address,inputList);
    inputList[0].addEventListener("keyup",()=>{
        address.setFirstName(inputList[0].value);
    });
    inputList[1].addEventListener("keyup",()=>{
        address.setLastName(inputList[1].value);
    });
    inputList[2].addEventListener("keyup",()=>{
        address.setCompanyName(inputList[2].value);
    });
    inputList[3].addEventListener("keyup",()=>{
        address.setCountry(inputList[3].value);
    });
    inputList[4].addEventListener("keyup",()=>{
        address.setTown(inputList[4].value);
    });
    inputList[5].addEventListener("keyup",()=>{
        address.setPostcode(inputList[5].value);
    });
    inputList[6].addEventListener("keyup",()=>{
        address.setAddress(inputList[6].value);
    });
    inputList[7].addEventListener("keyup",()=>{
        address.setEmail(inputList[7].value);
    });
    inputList[8].addEventListener("keyup",()=>{
        address.setPhone(inputList[8].value)
    });
}