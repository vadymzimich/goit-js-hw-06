const sizeInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handleSize = (element) => {
  text.style.fontSize = `${element.target.value}px`;
};

sizeInput.addEventListener("input", handleSize);
