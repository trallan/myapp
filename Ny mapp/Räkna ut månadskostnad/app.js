
let lånebelopp = document.querySelector('#lånebelopp');
let ränta = document.getElementById('ränta');
let månader = document.querySelector('#återbetalning');
let summa = document.querySelector('#summa');
let btn = document.querySelector('.submit-btn');
let testbtn = document.querySelector('.test-btn');
let firstContent = document.querySelector('.main-container');
let secondContent = document.querySelector('.second-mc');
let secondMcBtn = document.querySelector('.second-mc-btn');
let secondAmount = document.querySelector('#second-amount');
let secondInterest = document.querySelector('#second-interest');
let secondSum = document.querySelector('#second-sum');
let endInterest = document.querySelector('#end-interest');
let endTax = document.querySelector('#tax');
let clearBtn = document.querySelector('.clear-btn');

btn.addEventListener('click', myFunc);
testbtn.addEventListener('click', testBtnFunc);
secondMcBtn.addEventListener('click', intBtn);
clearBtn.addEventListener('click', clearInputs);


function calc(){
    lånebelopp = document.querySelector('#lånebelopp').value;
    ränta = document.getElementById('ränta').value;
    månader = document.querySelector('#återbetalning').value;
    let myArray = [];
    for(let i = 0; i < månader/12; i++){
        let amo = lånebelopp / månader;
        let int = lånebelopp / 100 * ränta / 12;
        let sum = amo + int;
        let total = lånebelopp - sum;
        lånebelopp = total;
        myArray.push(parseInt(sum));
        }
        return myArray[myArray.length - 1];
    }


function intSaveCalc(){
    let amount = document.querySelector('#second-amount').value;
    let int = document.getElementById('second-interest').value;
    let sum = amount / 100 * int
    return sum
}

function intBtn(event){
    event.preventDefault();
    let s = document.querySelector('#second-sum').value = intSaveCalc();
    secondSum.value = s;
    document.querySelector('#end-interest').value = calcTax();
    document.querySelector('#tax').value = calcInterest();
}
    

function myFunc(event){   
    event.preventDefault();
    document.querySelector('#summa').value = calc();
}

function testBtnFunc(event){
    event.preventDefault();
    if (firstContent.style.display === "none") {
        firstContent.style.display = "flex";
        secondContent.style.display = "none"
      } else {
        firstContent.style.display = "none";
        secondContent.style.display = "flex"
      }
    }

function calcInterest(){
    let val1 = intSaveCalc() / 100 * 30
    return val1;
}

function calcTax(){
    let val1 = intSaveCalc() - calcInterest()
    return val1
}

function clearInputs(){
    document.querySelector('#second-amount').value = "";
    document.getElementById('second-interest').value = "";
    document.querySelector('#end-interest').value = "";
    document.querySelector('#tax').value = "";
    document.querySelector('#lånebelopp').value = "";
    document.getElementById('ränta').value = "";
    document.querySelector('#återbetalning').value = "";
    document.querySelector('#summa').value = "";
    document.querySelector('#second-sum').value = "";
}