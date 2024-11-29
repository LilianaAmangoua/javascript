console.log("Hello World");

let section = document.getElementById("hero-section");
let newDiv = document.createElement("div");
section.appendChild(newDiv); 

let newTitle = document.createElement("h3");
newDiv.appendChild(newTitle);
newTitle.id = "myTitle";
newTitle.innerText = "Voici le titre";

let newParagraph = document.createElement("p");
newDiv.appendChild(newParagraph);
newParagraph.innerText = "Ceci est un paragraphe";

let newButton = document.createElement("button");
newDiv.appendChild(newButton);
newButton.classList = "myButton";
newButton.innerText = "Button";