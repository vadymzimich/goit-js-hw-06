const lenCategory = document.querySelector("ul#categories").children.length;
console.log(`Number of categories: ${lenCategory}`);

const elements = document.querySelector("#categories").children;
for (let elem of elements) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${quantityElem}`);
}
