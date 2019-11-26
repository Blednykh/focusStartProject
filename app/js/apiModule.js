export function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = function () {
            resolve((JSON.parse(xhr.responseText)));
        };
        xhr.onerror = function (e) {
            console.log("xhr-status", xhr.statusText, this.status);
            reject(this.status);
        };
        xhr.readystatechange = function (e) {
            console.log("target", e.target);
            console.log("readyState", xhr.readyState);
        };
        xhr.send();
    });
}