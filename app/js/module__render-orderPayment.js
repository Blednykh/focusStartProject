function renderPayment(basket){
    let {goodsList} = basket;

    if(goodsList !== null){
        goodsList.forEach(item=>{
            let temp = document.getElementById("temp_type_payment-item");

            let clon = temp.content.cloneNode(true);
            console.log(clon);
            let orderTableItem__img = clon.querySelector(".order-table-item__img");

            orderTableItem__img.src = item.img;

            let orderTableItem__name = clon.querySelector(".order-table-item__name");

            orderTableItem__name.innerText = item.prod;

            let orderTableItem__price = clon.querySelector(".order-table-item__price");

            orderTableItem__price.innerText = "$" + item.price * item.count;

            let orderTableItem__input = clon.querySelector(".order-table-item__input");

            orderTableItem__input.placeholder = item.count;


            orderTableItem__input.addEventListener("keyup",(e)=>{
                if(Object.is(parseInt(orderTableItem__input.value),NaN)){
                    orderTableItem__input.value = "";
                }
                else{
                    if(parseInt(orderTableItem__input.value) === 0){
                      /*  basket.removeGoods(item);
                        let basketItems = document.querySelectorAll(".basket__basket-item");
                        basketItems.forEach(item=>item.remove());
                        renderBasketTableContent(table, basket);*/
                    }
                    else{
                        basket.changeItemCount(item, orderTableItem__input.value);
                        orderTableItem__price.innerText = "$" + item.price * orderTableItem__input.value;
                    }
                }
            });


            let table = document.querySelector(".order-box__table");
            table.appendChild(clon);

        })
    }


}


export function renderOrderPayment(basket, address){
    console.log(address.getAddress());
    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);

    mainElement.className = `l-main main_type_order`;

    let temp = document.getElementById("temp_type_payment");

    let orderClon = temp.content.cloneNode(true);

    mainElement.appendChild(orderClon);

    renderPayment(basket);
}