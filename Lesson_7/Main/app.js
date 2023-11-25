const colors = ["red", "blue", "yellow", "cyan", "pink", "purple"];


const button = document.querySelector("button");

const getRandomInt = (start, end) => {
    min = Math.ceil(start);
    max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.onclick = () => {
    const randomIndex = getRandomInt(0, colors.length - 1);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
}