// 1. дан массив ["name", "John", "lastname", "Black", "age", "23"].
//  Из этого массива нужно получить объект,
// где ключом будет name, а значение John и так с остальными данными.
// Все нужно сделать через цикл конечно же)

const array = ["name", "John", "lastname", "Black", "age", "23"];
const object = {};

for (let i = 0; i < array.length; i += 2) {
  const key = array[i];
  const value = array[i + 1];
  object[key] = value;
  // object["name"] = "John"
  // object["lastname"] = "Black"
  // object["age"] = "23"
}

console.log("HW 4 task 1:", object);

//  2. Напишите функцию, которая принимает
//  неограниченное количество чисел
//  и выводит их среднюю арифметическую

// ES5
function getMean() {
  let sum = 0;
  const count = arguments.length;
  for (const arg of arguments) {
    sum += arg;
  }
  return sum / count;
}

// ES6
const getMeanEs6 = (...args) => {
  const count = args.length;
  const sum = args.reduce((total, arg) => (total += arg));
  return sum / count;
};
console.log("HW 4 task 2:", getMean(2, 5));
console.log("HW 4 task 2:", getMeanEs6(2, 5));

//  3. Написать функцию (любой из видов пройденных на уроке) ,
//  которая принимает значение параметра и
//  возвращает его тип данных в консоли.
//  Пример:    getDataType(false) => boolean ,
//  getDataType('hello world!') => string,
//  getDataType(42) => number

const getDataType = (value) => {
  if (value === null) return "null";

  if (typeof value === "function") return "object";

  return typeof value;
};

console.log("HW 4 task 3:", getDataType(false));
console.log("HW 4 task 3:", getDataType("hello world!"));
console.log("HW 4 task 3:", getDataType(42));
console.log("HW 4 task 3:", getDataType(null));
console.log("HW 4 task 3:", getDataType(undefined));
console.log("HW 4 task 3:", getDataType({}));
console.log("HW 4 task 3:", getDataType(alert));

//  4. Напишите функцию, которая принимает
// один параметр в виде строки.
// Функция должна перевернуть строку, например hello -> olleh.
// Не используйте готовые методы, реализуйте через цикл

const _reverseString = (text) => text.split("").reverse().join("");
console.log("HW 4 task 4:", _reverseString("hello"));

function reverseString(text) {
  let reversedString = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedString += text[i];
  }
  return reversedString;
}
console.log("HW 4 task 4:", reverseString("hello"));

function __reverseString(text) {
  let reversedString = text.split("");

  for (let i = 0, j = text.length - 1; i < text.length / 2; i++, j--) {
    const temp = reversedString[i];
    reversedString[i] = reversedString[j];
    reversedString[j] = temp;
  }

  return reversedString.join("");
}

console.log("HW 4 task 4:", __reverseString("hello"));



// for..of
// for..in
const required = ["name", "surname", "age", "education", "job", "subject"];
const geeksStudent = {
    name: "Evgeniy",
    surname: "",
    fatherName: "Dmitrievich",
    age: 100,
    education: null,
    job: null,
    subject: "frontend",
    group: "32F",
    eduTime: "18:00-20:00",
    isOnline: true
}

const subjects = ["frontend", "backend", "android", "ios", "uxui"];

for(const key in geeksStudent){
    if(required.includes(key) && !geeksStudent[key]){
        console.error(`${key} is required`);
    }

    if(key === "age" && (geeksStudent[key] < 8 || geeksStudent[key] > 65 )){
        console.error(`Invalid ${key}. Age must be in 8-65`);
    }

    if(key === "subject" && !subjects.includes(geeksStudent[key])){
        console.error(`Invalid ${key}. Available subjects: ${subjects}`);
    }

}
