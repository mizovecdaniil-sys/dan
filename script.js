let title = document.getElementById("main-title");
title.style.color = "blue";
title.style.fontSize = "32px";
title.style.textAlign = "center";

let container = document.getElementById("container");
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "20px";
container.style.borderRadius = "10px";
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created dynamically!";
newParagraph.style.color = "green";

let button = document.createElement("button");
button.textContent = "Click Me";
button.style.backgroundColor = "lightblue";

button.addEventListener("click", function() {
  alert("Button clicked!");
});

let dynamicContent = document.getElementById("dynamic-content");
dynamicContent.appendChild(newParagraph);
dynamicContent.appendChild(button);
let descriptions = document.getElementsByClassName("description");

for (let el of descriptions) {
  el.style.fontStyle = "italic";
  el.style.color = "darkgreen";
  el.style.backgroundColor = "#eee";
}

document.querySelector(".description").textContent = "Text changed!";



document.getElementById("generateButton").addEventListener("click", function() {
  
  let text = document.getElementById("elementInput").value;
  let type = document.getElementById("elementType").value;

  if (text === "") {
    alert("Enter text!");
    return;
  }

  let element = document.createElement(type);
  element.textContent = text;

  element.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  element.style.padding = "10px";
  element.style.margin = "5px";

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  removeBtn.onclick = function() {
    element.remove();
  };

  element.appendChild(removeBtn);
