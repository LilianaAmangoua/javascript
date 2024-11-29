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

let menuItem1 = createMenuItem("Item 1 of menu 1");
let menuItem2 = createMenuItem("Item 2 of menu 1");
let menuItem3 = createMenuItem("Item 3 of menu 1");
let menuItem4 = createMenuItem("Item 4 of menu 1");
let menuItem5 = createMenuItem("Item 5 of menu 1");

// Exercice 3

let header = document.querySelector("header");

let menu2 = document.createElement("ul");
menu2.id = "menu2";
header.appendChild(menu2);

function createAgainMenuItem(text){
    let newElement = document.createElement("li");
    newElement.innerText = text;
    menu2.appendChild(newElement);
    return newElement;
}

let menu2Item1 = createAgainMenuItem("Item 1 of menu 2");
let menu2Item2 = createAgainMenuItem("Item 2 of menu 2");
let menu2Item3 = createAgainMenuItem("Item 3 of menu 2");

// Exercice 4

menuItem1 = menu.removeChild(menuItem1);
menu2.appendChild(menuItem1);

menuItem5 = menu.removeChild(menuItem5);
menu2.appendChild(menuItem5);

// Exercice 5

menuItem1.innerText = "Changement de texte";
menuItem5.innerText = "Changement de texte encore";

// Exercice 6
let head = document.querySelector("head");
head.removeChild(head.lastElementChild);

// Exercice 7
const elementListToCreate = [
    {
       name: "section",
       times: 3
    },
    {
       name: "div",
       times: 3
    },
    {
       name: "p",
       times: 1
    },
    {
       name: "span",
       times: 3
    },
]