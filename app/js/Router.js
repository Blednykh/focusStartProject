export class Router {
    constructor() {
        this.subcategoryHashList = [];
        this.subcategoryData = [];
    }

    addHash(title, subcategoryItem) {
        let hash = `#${subcategoryItem.replace(/\s+/g, '')}`;

        if (this.findIndexByHash(hash) === -1) {
            this.subcategoryHashList.push(hash);
            this.subcategoryData.push({title, subcategoryItem});
        }
    }

    findIndexByHash(hash) {
        return this.subcategoryHashList.findIndex(item => item === hash);
    }
}