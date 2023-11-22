


const a = 5;

const PI = 3.14;
// PI = 10;

let b = 5; 

console.log(a + b);
console.log(a + b);


// var let const 

// динамическая нестрогая типизация


// data types - типы данных
// 1) string - текстовый
// operators: + (concatenation - конкатенация)

var clientName = "Eugene";
var clientSurname = 'Kiselev';
var clientPatronimyc = `Dmitrievich`;

console.log(typeof clientName);

console.log(clientSurname + " " + clientName + " " + clientPatronimyc);

var clientJob = "OJSC \"Cash2u\"";

var singer = "Paul aka \"Lion\" Mac'Cartney"

console.log(clientJob);

var bookPrice = "9";
console.log(bookPrice + bookPrice);

// escaping - экранирование
var clientSelfiePhotoPath = "C:\\Storage\\Clients\\Photos\\521632187\\123.jpeg";

console.log(clientSelfiePhotoPath);

// 2) number - числовой
// operators: + - * / ** %

var clientId = 10;

var clientMontlyIncome = 500_000;

var clientCardBalance = -4500.78;

console.log(typeof clientMontlyIncome);

// Infinity
console.log(clientMontlyIncome / 0);

// NaN - Not a Number

// var amount = prompt("Enter amount to card")

// amount = +amount
// debugger;
// amount = Number(amount)
// amount = Number.parseInt(amount)

// if(isNaN(amount)){
//     console.error("Invalid amount. Check data...");
// }else{
//     console.log("Previous balance: " + clientCardBalance);
//     clientCardBalance = clientCardBalance + amount;
//     console.log("Current balance: " + clientCardBalance);
// }

// debugging - отладка

// var else = 5;
// var 2clients = "Petr i Tolik";
var _else = 5;
var else2 = 5;
var $clients = "Petr i Tolik";

// clientCardBalance - camel case

// 3) boolean - логический
// operators: logical-логические (&&, ||, !) comparison-сравнения (> < >= <= == === != !==)

var isJobless = false; // 0
var isIndividualEntrepreneur = true; // 1


var depositPeriod = 100; // in monthes

if(depositPeriod > 0 && depositPeriod < 24){
    console.log("Short-term deposit");
}else if(depositPeriod >= 24 && depositPeriod < 60){
    console.log("Middle-term deposit");
}else if(depositPeriod >= 60){
    console.log("Long-term deposit");
}

// var amount = Number(prompt("Enter amount"));
// var currency = prompt("Enter currency")

var convertedAmount = 0;

if(currency === "USD"){
    convertedAmount = amount / 89;
}else if(currency === "EUR"){
    convertedAmount = amount / 102;
}else if(currency === "RUB"){
    convertedAmount = amount / 0.9;
}else{
    console.warn("INVALID CURRENCY")
}

switch(currency){
    case "USD":
        convertedAmount = amount / 89;
    case "EUR":
        convertedAmount = amount / 102;
    case "RUB":
        convertedAmount = amount / 0.9;
    default:
        console.warn("INVALID CURRENCY");
}

console.log(convertedAmount + " " + currency);











