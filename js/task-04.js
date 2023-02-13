const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const currentValue = document.querySelector("#value");

let counterValue = 0;
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  currentValue.innerHTML = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  currentValue.innerHTML = counterValue;
});
