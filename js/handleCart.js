function debug(element) {
    console.log(element);
}

let allListSeafood = document.querySelectorAll('.list-seafood');
let allProduct = [];

function pushProduct(product) {
    let src = product.querySelector('img').getAttribute('src');
    let name = product.querySelector('.name-product').textContent;
    let price = product.querySelector('.price').textContent;
    allProduct.push({src, name, price});
}

function pushListSeafood(listProduct) {
    listProduct.forEach((product) => {
        pushProduct(product);
    });
}

allListSeafood.forEach((listSeafood) => {
    let products = listSeafood.querySelectorAll('.seafood');
    pushListSeafood(products);
});

debug({allProduct});