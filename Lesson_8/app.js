const getRandomIntInRange = (min, max) => {
  // 3.2 - 9.5,  1..100
  min = Math.ceil(min); // 3.2 -> 4
  max = Math.floor(max); // 9.5 -> 9
  return Math.round(Math.random() * (max - min)) + min; // -> 0.5
};

console.log(getRandomIntInRange(3.2, 9.5));

const hoverBoard = document.querySelector(".hover-board");

const CELLS_COUNT = 504;

// <div class="cell"></div>
const createCell = () => {
  const div = document.createElement("div");
  div.className = "cell";
  // div.classList.add("cell");
  return div;
};

// fill board
for (let i = 0; i < CELLS_COUNT; i++) {
  // const cell = createCell();
  // hoverBoard.appendChild(cell);
  hoverBoard.appendChild(createCell());
}

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const cellsList = hoverBoard.querySelectorAll(".cell");

let index = 0;
for (const cell of cellsList) {
  cell.addEventListener("mouseover", () => {
    const randomIndex = getRandomIntInRange(0, colors.length - 1);
    const randomColor = colors[randomIndex];
    cell.style.backgroundColor = randomColor;
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.backgroundColor = "#1d1d1d";
  });

  if (index > CELLS_COUNT / 4) break;

  index++;
}

// cellsList.forEach(cell => {
//     cell.addEventListener("mouseover", () => {
//         const randomIndex = getRandomIntInRange(0, colors.length - 1);
//         const randomColor = colors[randomIndex];
//         cell.style.backgroundColor = randomColor;
//     });

//     cell.addEventListener("mouseleave", () => {
//         cell.style.backgroundColor = "#1d1d1d";
//     });
// })
