
// console.log(sum2(5,7));

// function declaration

function sum(a, b){
    return a + b
}


// ECMAScript 5 
// Babel 
// ECMAScript 6+ 
// JS

// function expression

const sum2 = function (a, b){
    return a + b;
}

const sum3 = (a,b) => a + b;
const sum4 = (a,b) => {
    return a + b
};

const getRandomInt = (start, end) => {
    min = Math.ceil(start);
    max = Math.floor(end);
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

const fetchByINN = (inn, errorCallback) => {

    const response = getRandomInt(1, 25);

    if(response % 2 === 0){
        errorCallback();
    }

    return {
        name: "Eugene",
        surname: "Kiselev",
        INN: inn,
        passport: {
            series: "ID",
            number: "123456"
        }
    }
}

fetchByINN("12345", () => {
    console.error("fetching error. try later...".toUpperCase());
})

// fetchByINN("98765", () => {
//     document.write("fetching error. try later...".toUpperCase());
//     document.body.style.color = "red";
// })

fetchByINN("000", () => {});


// Callback - функция обратного вызова


const array = [1,2,3];

array.filter(x => x % 2 === 0)

