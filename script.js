console.log("Hello World");

// Exercice 1
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

// Exercice 2

let menu = document.getElementById("menu");

function createMenuItem(text){
    let newElement = document.createElement("li");
    newElement.innerText = text;
    menu.appendChild(newElement);
    return newElement;
}

const menuItem1 = createMenuItem("Item 1");
const menuItem2 = createMenuItem("Item 2");
const menuItem3 = createMenuItem("Item 3");
const menuItem4 = createMenuItem("Item 4");
const menuItem5 = createMenuItem("Item 5");