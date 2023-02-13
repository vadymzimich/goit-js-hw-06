const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemEl = [];
const listEl = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");

  itemEl.push(element);
  listEl.append(element);
});

// const createList = function (arr) {
//   const list = [];
//   arr.forEach((ingredient) => {
//     const ingredientItem = document.createElement("li");
//     ingredientItem.classList.add("item");
//     ingredientItem.textContent = [ingredient];
//     list.push(ingredientItem);
//   });
//   return ingredientItem;
// };

// const listEl = document.querySelector("#ingredients");
// listEl.append(createList(ingredients));
