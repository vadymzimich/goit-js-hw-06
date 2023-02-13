const inputValue = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");

const handleInput = (event) => {
  if (event.target.value === "") {
    return (outputValue.textContent = "Anonymous");
  }
  outputValue.textContent = event.target.value;
};

inputValue.addEventListener("input", handleInput);
