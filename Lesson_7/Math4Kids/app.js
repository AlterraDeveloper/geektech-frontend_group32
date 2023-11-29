const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const answers = document.querySelector(".answers");

const [answer1, answer2, answer3] = [...answers.querySelectorAll(".option")];
// const answer1 = answers.querySelectorAll(".option")[0];
// const answer2 = answers.querySelectorAll(".option")[1];
// const answer3 = answers.querySelectorAll(".option")[2];

const getRandomInt = (start, end) => {
  min = Math.ceil(start);
  max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*


<h1 id="num1">5</h1>
<h1 id="sign">+</h1>
<h1 id="num2">5</h1>
            <h1>=</h1>
            <h1>?</h1>
*/

const getSignByOperation = (operation) => {
  switch (operation) {
    case "add":
      return "+";
    case "subtract":
      return "-";
    case "multiply":
      return "*";
    case "divide":
      return "/";
  }
};

const getAnswerByOperation = (num1, num2, operation) => {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
  }
};

function shuffle(array) {
  const shuffledArray = [];
  while (array.length) {
    const randomIndex = getRandomInt(0, array.length - 1);
    const item = array[randomIndex];
    array.splice(randomIndex, 1);
    shuffledArray.push(item);
  }
  return shuffledArray;
}

const generateAnswers = (randomNum1, randomNum2, operation) => {

  const answersSet = new Set();

  const correctAnswer = getAnswerByOperation(randomNum1, randomNum2, operation);
  answersSet.add(correctAnswer);

  while (answersSet.size !== 3) {
    const randomAnswer = getRandomInt(1, 9);
    answersSet.add(randomAnswer);
  }

  return shuffle(Array.from(answersSet));
}

const renderQuestion = (currentMenu) => {
  const randomNum1 = getRandomInt(1, 9);
  const randomNum2 = getRandomInt(1, 9);

  const question = document.querySelector(".question");
  question.innerHTML = `
        <h1 id="num1">${randomNum1}</h1>
        <h1 id="sign">${getSignByOperation(currentMenu)}</h1>
        <h1 id="num2">${randomNum2}</h1>
        <h1>=</h1>
        <h1>?</h1>
    `;


  let answers = generateAnswers(randomNum1, randomNum2, currentMenu);
  renderAnswers(answers);
};

renderQuestion("add");

function renderMenu(currentMenu) {
  const menu = ["add", "subtract", "multiply", "divide"];

  const menuHtml = menu
    .map(
      (menuItem) =>
        `<li id="${menuItem}" class="${
          menuItem === currentMenu ? "current" : ""
        }">${menuItem}</li>`
    )
    .join("");
  const navigation = document.querySelector(".navigation");
  navigation.innerHTML = menuHtml;

  const menuItems = document.querySelectorAll(".header .navigation li");

  menuItems.forEach((menuItem) => {
    menuItem.onclick = () => {
      renderMenu(menuItem.id);
      renderQuestion(menuItem.id);
    };
  });
}

function renderAnswers(answers) {
  const answersContainer = document.querySelector(".answers");
  answersHtml = answers.map((answer) => `<div class="option">${answer}</div>`).join("");
  answersContainer.innerHTML = answersHtml;
}

renderMenu("add");
renderQuestion("add");