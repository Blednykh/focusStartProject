export class Basket {
    constructor() {
        let localStorageSum = localStorage.getItem("sum");

        let localStorageGoodsList = JSON.parse(localStorage.getItem("goodsList"));

        this.sum = localStorageSum === null ? 0 : parseFloat(localStorageSum);
        this.goodsList = localStorageGoodsList === null ? [] : localStorageGoodsList;
    }

    addGood(goods) {
        this.sum += parseFloat(goods.price);

        let findIndex = this.goodsList.findIndex(item => item.id === goods.id);

        if (findIndex !== -1) {
            this.goodsList[findIndex].count++;
        } else {
            this.goodsList.push({...goods, count: 1});
        }
        this.writeToLocalStorage()
    }

    removeGoods(goods) {
        this.sum = parseFloat((this.sum - goods.price * goods.count).toFixed(2));
        this.goodsList = this.goodsList.filter(item => item.id !== goods.id);
        this.writeToLocalStorage()
    }

    getCount() {
        return this.goodsList.reduce((prev, item) => prev + item.count, 0);
    }

    getBasket() {
        return {
            sum: this.sum,
            goodsList: this.goodsList
        }
    }

    changeItemCount(goods, newCount) {
        if(!isNaN(newCount)){
            let changeItemId = this.goodsList.findIndex(item => item.id === goods.id);

            this.sum = Number((this.sum - goods.price * goods.count).toFixed(2));
            this.goodsList[changeItemId].count = parseInt(newCount);
            this.sum += Number((goods.price * newCount).toFixed(5));

            this.writeToLocalStorage()
        }
    }

    clear() {
        this.sum = 0;
        this.goodsList = [];
        this.writeToLocalStorage()
    }

    writeToLocalStorage() {
        localStorage.setItem("sum", this.sum);
        localStorage.setItem("goodsList", JSON.stringify(this.goodsList));
    }

 /*   equal(goodsList){
        return goodsList.length === this.goodsList.length && goodsList.every((item,i)=>{
            return item === this.goodsList[i] && item.count === this.goodsList[i].count;
        });
    }*/
}