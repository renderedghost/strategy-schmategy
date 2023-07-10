const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

let data;

fetch("topsecret.json")
  .then((response) => response.json())
  .then((json) => (data = json));

const generateStrategy = () => {
  return `To ${randomItem(data.objectives)}, we will ${randomItem(
    data.actions
  )} ${randomItem(data.when)}. This will ${randomItem(data.impacts)}.`;
};

document.getElementById("generate").addEventListener("click", function () {
  document.getElementById("display").innerText = generateStrategy();
});