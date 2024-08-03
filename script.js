




//declareing the variables
let num1 = 50; 
let num2 = 20;

//performing the arithmetic operations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

//displaying the results
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);















//Additional Code or irrelevant to assignment

const plus = document.querySelector("#sum");
const minus = document.querySelector("#difference");
const multiply = document.querySelector("#product");
const divide = document.querySelector("#quotient");
const show1 = document.querySelector("#num1");
const show2 = document.querySelector("#num2");

show1.innerHTML = `num1 : ${num1}`;
show2.innerHTML = `num2 : ${num2}`;


const content = {
    sum : plus.innerText,
    diff : minus.innerText,
    pro : multiply.innerText,
    quo : divide.innerText
}

let isSum = false;
let isDif = false;
let isPro = false;
let isQuo = false;


update();

function update(){
    plus.addEventListener(("click"), ()=> {
        if(isSum){
            plus.innerText = content.sum;
        }else{
            plus.innerText = `Sum : ${sum}`
        }
        isSum = !isSum;
    });
    minus.addEventListener(("click"), ()=> {
        if(isDif){
            minus.innerText = content.diff;
        }else{
            minus.innerText = `Difference : ${difference}`
        }
        isDif = !isDif;
    });
    multiply.addEventListener(("click"), ()=> {
        if(isPro){
            multiply.innerText = content.pro;
        }else{
            multiply.innerText = `Product : ${product}`
        }
        isPro = !isPro;
    });
    divide.addEventListener(("click"), ()=> {
        if(isQuo){
            divide.innerText = content.quo;
        }else{
            divide.innerText = `Quotient : ${quotient}`
        }
        isQuo = !isQuo;
    });
}
