let queryObject = Object.fromEntries(new URLSearchParams(window.location.search)) ;
// console.log(queryObject)
const VND = new Intl.NumberFormat('vi-VN',{
        style: 'currency',
        currency: 'VND'
    });
var priceArr = [];
function renderPay (){
    for (var key in queryObject){
        // console.log(queryObject[key])
        let detail = document.getElementById('pay-detail');
        if (queryObject[key] == 'true'){
            var price = Number(allProduct[key].price) * Number(window.localStorage.getItem(key));
            priceArr.push(price);
            detail.innerHTML = detail.innerHTML +
            `
            <div class="pay-product">
                <div class="pay-product-name">${allProduct[key].name}</div>
                <div class="pay-product-amount">${window.localStorage.getItem(key)}</div>
                <div class="pay-product-price">${VND.format(price)}</div>
            </div>
            `
        }
    }
}
document.getElementById('thanhtoan').onload = renderPay()
function getTotal (arr){
    return arr.reduce((total, price) => {
        return total += price;
    },0)
}
var total = document.getElementById('pay-total');
total.innerHTML += 
`
<div>${VND.format(getTotal(priceArr))}</div>
`
