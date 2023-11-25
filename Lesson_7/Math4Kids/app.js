

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const answers = document.querySelector(".answers");
const question = document.querySelector(".question");

const [answer1, answer2, answer3] = [...answers.querySelectorAll(".option")];
// const answer1 = answers.querySelectorAll(".option")[0];
// const answer2 = answers.querySelectorAll(".option")[1];
// const answer3 = answers.querySelectorAll(".option")[2];

const getRandomInt = (start, end) => {
    min = Math.ceil(start);
    max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*


            <h1 id="num1">5</h1>
            <h1 id="sign">+</h1>
            <h1 id="num2">5</h1>
            <h1>=</h1>
            <h1>?</h1>
*/

const generateQuestion = () => {

    const h1_1 = document.createElement("h1");
    const h1_2 = document.createElement("h1");
    const h1_3 = document.createElement("h1");
    const h1_4 = document.createElement("h1");
    const h1_5 = document.createElement("h1");

    
    const randomNum1 = getRandomInt(1,9);
    const randomNum2 = getRandomInt(1,9);
    
    h1_1.innerText = randomNum1;
    h1_2.innerText = "+";
    h1_3.innerText = randomNum2;
    h1_4.innerText = "=";
    h1_5.innerText = "?";

    // question.innerHTML = "";
    // question.append(h1_1, h1_2, h1_3, h1_4, h1_5);

    question.innerHTML = 
    `
        <h1 id="num1">${randomNum1}</h1>
        <h1 id="sign">+</h1>
        <h1 id="num2">${randomNum2}</h1>
        <h1>=</h1>
        <h1>?</h1>
    `

    // num1.innerText = randomNum1
    // num2.innerText = randomNum2

    answer1.innerText = randomNum1 + randomNum2;
    answer2.innerText = getRandomInt(1,9);
    answer3.innerText = getRandomInt(1,9);
}

generateQuestion();
