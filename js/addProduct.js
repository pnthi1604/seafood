function debug(element) {
    console.log({element});
}

let allListSeafood = document.querySelectorAll('.list-seafood');
let allProduct = [];

function pushProduct(product) {
    let src = product.querySelector('img').getAttribute('src');
    let name = product.querySelector('.name-product').textContent;
    let price = product.querySelector('.price').textContent;
    debug({src, name, price});
    allProduct
}

function pushListSeafood(listProduct) {
    listProduct.forEach((product) => {

    });
}

allListSeafood.forEach((listSeafood) => {
    let products = document.querySelectorAll('.seafood');
    products.forEach
});