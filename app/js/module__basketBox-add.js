let basketSum = -1;

let basketBox = document.querySelector(".l-header_pos_top__basket-box");

let basketBoxGoodsList = document.querySelector(".basket-box__info-bottom");

export function createBasketBox(basket) {
    basketBox.addEventListener("mouseover", ()=>{
        let {sum, goodsList} = basket.getBasket();

        if(basketSum!==sum){
            let span = document.querySelector(".basket-box__count-span");

            span.innerText = `${basket.getCount()} item(s)`;
            span = document.querySelector(".basket-box__sum");
            span.innerText = `${sum} $`;
            basketSum = sum;

            let basketItemsList = document.querySelectorAll(".basket-item");

            basketItemsList.forEach(item=>{
                item.remove();
            });

            goodsList.forEach(item=>{
                let div = document.createElement("div");

                let span = document.createElement("span");

                div.className = "basket-item";
                span.innerText = (item.count > 1) ? `${item.prod} (${item.count})`: item.prod;
                div.appendChild(span);
                span = span.cloneNode();
                span.innerText = item.price * item.count + " $";
                div.appendChild(span);
                basketBoxGoodsList.appendChild(div);
            });
        }
    });

    let basketBoxCount = document.querySelector(".basket-box__count-bottom");

    let basketArrowLogo = document.querySelector(".basket-box__arrow-logo");

    let basketBoxGoodsListIsDisplayed = false;

    basketBoxCount.addEventListener("click", ()=>{
        basketArrowLogo.style = basketBoxGoodsListIsDisplayed? "transform: none": "transform: rotate(-90deg)";
        basketBoxGoodsList.style = basketBoxGoodsListIsDisplayed? "display: none":"display: block";
        basketBoxGoodsListIsDisplayed = !basketBoxGoodsListIsDisplayed;
    });

}