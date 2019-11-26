function renderPayment(basket){
    let {goodsList} = basket;

    renderTotalPrice(basket.sum);

    if(goodsList !== null && goodsList.length !== 0){
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
                        basket.removeGoods(item);
                    }
                    else{
                        basket.changeItemCount(item, orderTableItem__input.value);
                        orderTableItem__input.placeholder = orderTableItem__input.value;
                        orderTableItem__price.innerText = "$" + item.price * orderTableItem__input.value;
                    }
                    renderTotalPrice(basket.sum);
                }
            });


            let table = document.querySelector(".order-box__table");
            table.appendChild(clon);

        })
    }
    else {
        let paymentTotalPriceBox = document.querySelector(".payment-total-price-box");

        paymentTotalPriceBox.innerText = "$0";
        paymentTotalPriceBox.disabled = true;
        let table = document.querySelector(".order-box__table");
        let h2 = document.createElement("h2");

        h2.innerText = "No Goods in Cart!";
        table.replaceWith(h2);
    }

    let totalPriceBox = document.querySelector(".payment-total-price-box");

    totalPriceBox.addEventListener("click", ()=>{
        basket.clear();
    })
}

function renderTotalPrice(sum){
    let mainElement = document.querySelector(".l-main");

    let totalPriceBox = mainElement.querySelector(".payment-total-price-box");

    totalPriceBox.innerText = "Pay $" + Math.round((+sum + 5) * 10 * 10) / 100;
}

export function renderOrderPayment(basket, address){

    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);
    mainElement.className = `l-main main_type_order`;

    let temp = document.getElementById("temp_type_loader");

    let clone = temp.content.cloneNode(true);

    mainElement.appendChild(clone);
    setTimeout(()=>{
        let loader = document.querySelector(".loader-box");

        if(loader!==null){
            let temp = document.getElementById("temp_type_payment");

            let orderClon = temp.content.cloneNode(true);

            loader.replaceWith(orderClon);

            renderPayment(basket);
        }

    },2000);
}