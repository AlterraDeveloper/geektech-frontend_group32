// DOM - Document Object Model

const textArea = document.querySelector("#textArea");
const limits = document.querySelector(".limits");
const textAreaLabel = document.getElementById("textAreaLabel");

const [current, , limit] = [...limits.querySelectorAll("span")];

textArea.addEventListener("input", () => {
  current.innerText = textArea.value.length;
  const limitValue = Number(limit.innerText);

  // 1 вариант
  // textArea.value = textArea.value.slice(0, limitValue);

  // 2 вариант
  if (textArea.value.length > limitValue) {
    textAreaLabel.style.color = "red";
    current.style.color = "red";
    limit.style.color = "red";
  } else {
    textAreaLabel.style.color = "#1400FF";
    current.style.color = "#1400FF";
    limit.style.color = "#1400FF";
  }
});
