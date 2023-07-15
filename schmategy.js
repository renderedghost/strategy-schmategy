const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

let data;

fetch("topsecret.json")
  .then((response) => response.json())
  .then((json) => {
    data = json;
    generateAndDisplayStrategy();
  });

const generateStrategy = () => {
  return `To <span class="highlight">${randomItem(
    data.objectives
  )}</span> and <span class="highlight">${randomItem(
    data.objectives
  )}</span>, we will <span class="highlight">${randomItem(
    data.actions
  )}</span> <span class="highlight">${randomItem(data.when)}</span>.`;
};

const generateAndDisplayStrategy = () => {
  document.getElementById("display").innerHTML = generateStrategy(); // Changed from innerText to innerHTML.
  document.getElementById("message-container").style.display = "block";
};

document
  .getElementById("generate")
  .addEventListener("click", generateAndDisplayStrategy);

document.getElementById("contact").addEventListener("click", function () {
  window.location.href = "mailto:barry.m.prendergast@gmail.com";
});
