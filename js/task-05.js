const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

const handleInput = (event) => {
  outputValue.textContent = event.target.value || "Anonymous";
};

inputValue.addEventListener("input", handleInput);
