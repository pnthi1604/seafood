let amountElement=document.getElementById('amount')
let amount = amountElement.value

let render=(amount) =>{
   amountElement.value=amount
}
//handel plus
let handelPlus = () =>{
    amount++;
    render(amount);
}
//handel minus
let handelMinus = () =>{
    if(amount>0)
        amount--;
    render(amount);
}
amountElement.addEventListener('input',() => {
    amount=amountElement.value;
    amount=parseInt(amount);
    amount=isNaN(amount)?1:amount;
    render(amount);
});