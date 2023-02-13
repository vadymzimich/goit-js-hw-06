function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector("button.change-color");
const colorValue = document.querySelector("span.color");

const handleBackgroundColor = () => {
  let randomColor = getRandomHexColor();
  colorValue.textContent = randomColor;
  body.style.backgroundColor = randomColor;
};

btn.addEventListener("click", handleBackgroundColor);
