export function renderOrderEnd(){
    let mainElement = document.querySelector(".l-main");

    let mainContent = mainElement.querySelector(".l-main-content");

    mainElement.removeChild(mainContent);

    mainElement.className = `l-main main_type_order-step-3`;

    let temp = document.getElementById("temp_type_loader");

    let clone = temp.content.cloneNode(true);

    mainElement.appendChild(clone);
    setTimeout(()=>{
        let loader = document.querySelector(".loader-box");

        if(loader!==null){
            let temp = document.getElementById("temp_type_order-end");

            let orderClon = temp.content.cloneNode(true);

            loader.replaceWith(orderClon);

        }

    },2000);


}