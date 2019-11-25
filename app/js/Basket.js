

export class Basket {
    constructor(sum = 0, goodsList = []){
        this.sum = Number(sum);
        this.goodsList = goodsList;
    }

    addGood(good){
        this.sum += Number(good.price.split(".").join("").split(",").join("."));

        let findIndex = this.goodsList.findIndex(item=> item.id === good.id);

        if(findIndex!==-1){
            this.goodsList[findIndex].count++;
        }
        else{
            good.count = 1;
            this.goodsList.push({...good, price: good.price.split(".").join("").split(",").join(".")});
        }
        localStorage.setItem("sum", this.sum);
        localStorage.setItem("goodsList", JSON.stringify(this.goodsList));
    }
    removeGoods(good){
        this.sum = Number((this.sum - good.price * good.count).toFixed(5));
        this.goodsList = this.goodsList.filter(item=> item.id !== good.id);
        localStorage.setItem("sum", this.sum);
        localStorage.setItem("goodsList", JSON.stringify(this.goodsList));
    }

    getCount(){
        return this.goodsList.reduce((prev, item)=> prev+item.count,0);
    }

    getBasket(){
        return{
            sum: this.sum,
            goodsList: this.goodsList
        }
    }

    changeItemCount(good, newCount){
        let changeItemId = this.goodsList.findIndex(item=> item.id === good.id);

        this.sum = Number((this.sum - good.price * good.count).toFixed(5));
        this.goodsList[changeItemId].count = parseInt(newCount);
        this.sum += Number((good.price * newCount).toFixed(5));

        localStorage.setItem("sum", this.sum);
        localStorage.setItem("goodsList", JSON.stringify(this.goodsList));
    }

}