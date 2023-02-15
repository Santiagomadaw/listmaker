const DOM = function () {
    this.id = e => document.getElementById(e);
    this.query = selector => Document.querySelector(selector);
    this.queryAll = selector => document.querySelectorAll(selector);
    console.log("hola ");

}
const D = new DOM();