import {sendRequest} from "./apiModule.js";

export function setHeaderSubcategoriesContent(element, number, HeaderBottomItems, basket, router) {

    let title, losung, count, subcategoriesList;

    let temp = document.getElementById("temp_type_nav-item-container");

    let clon = temp.content.cloneNode(true);

    element.appendChild(clon);

    let h1__title = element.querySelector(".nav-item-container__title");

    h1__title.innerText = "Loading...";

    let categoriesListItem = element.querySelector(".categories-list__item");

    element.addEventListener("mouseover", (e) => {
        if (e.target === element || e.target === categoriesListItem) {
            let pathPart = HeaderBottomItems[number].split(" ").join("-").toLowerCase();

            sendRequest('GET', `http://localhost:3000/data/goods-categories/${pathPart}.json`)
                .then(response => {
                    title = response.title;
                    losung = response.losung;
                    count = response.count;
                    subcategoriesList = response.subcategoriesList;

                    let navItemContainerContent = element.querySelector(".nav-item-container__content");

                    navItemContainerContent.remove();
                    navItemContainerContent = document.createElement("div");
                    navItemContainerContent.className = "nav-item-container__content subcategories-list";

                    let el = element.querySelector(".nav-item-container");

                    let h1__title = element.querySelector(".nav-item-container__title");

                    h1__title.innerText = title;

                    let h1__losung = element.querySelector(".nav-item-container__losung");

                    h1__losung.innerText = losung;

                    let p = element.querySelector(".nav-item-container__count");

                    p.innerText = count + " items";

                    subcategoriesList.forEach(column => {
                        let ul = document.createElement("ul");

                        ul.className = "subcategories-list__column";
                        column.forEach(item => {

                            let li = document.createElement("li");

                            let a = document.createElement("a");

                            li.className = "subcategories-list__li";
                            a.innerText = item;
                            a.href = `#${item.replace(/\s+/g, '')}`;
                            li.appendChild(a);
                            ul.appendChild(li);

                            li.addEventListener("click", () => {
                                router.addHash(title, item);
                            })
                        });
                        navItemContainerContent.appendChild(ul);
                    });

                    el.appendChild(navItemContainerContent);
                });
        }
    });

}