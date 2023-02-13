const validInput = document.querySelector("#validation-input");
const validLength = validInput.getAttribute("data-length");

const handleValidation = (element) => {
  if (validLength > element.target.value.length) {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  } else {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  }
};

// console.log(validInput.classList);

validInput.addEventListener("blur", handleValidation);
