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

let menuItem1 = createMenuItem("Item 1");
let menuItem2 = createMenuItem("Item 2");
let menuItem3 = createMenuItem("Item 3");
let menuItem4 = createMenuItem("Item 4");
let menuItem5 = createMenuItem("Item 5");

// Exercice 3 

let menu2 = document.createElement("ul");
let header = document.querySelector("header");
header.appendChild(menu2);
menu.id = "menu2";

function createAgainMenuItem(text){
    let newElement = document.createElement("li");
    newElement.innerText = text;
    menu2.appendChild(newElement);
    return newElement;
}

let menu2Item1 = createAgainMenuItem("Item 1 du menu 2");
let menu2Item2 = createAgainMenuItem("Item 2 du menu 2");
let menu2Item3 = createAgainMenuItem("Item 3 du menu 2");


// Exercice 4
menuItem1 = menu.removeChild(menuItem1);
menu2.appendChild(menuItem1);

menuItem5 = menu.removeChild(menuItem5);
menu2.appendChild(menuItem5);

// Exercice 5
menu2Item1.innerText = "Changement de texte";
menuItem5.innerText = "Changement de texte encore";

// Exercice 6
let head = document.querySelector("head");
head.removeChild(head.lastElementChild); 

// Exercice 7

/**
   * -------------------------------------------------------
   * 7 - Créer une boucle qui permet de créer et d'injecter dans le body les éléments du tableau un nombre X de fois. 
   * Chaque élément est l'enfant du précédent.
   * Exemple (basé sur le tableau ci-dessus) : il faut créer 3 sections. Chaque section possède 3 div. Chaque div possède 3 paragraphes (avec du texte). Chaque paragraphe possède 3 spans (avec du texte et une classe, la même pour chaque span)
   * -------------------------------------------------------
*/

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
];

function createElementXTimes(tagName, time, parent){
    for(i = 0; i < time; i++){
        let element = document.createElement(tagName);
        console.log(element);
        
        parent.appendChild(element);
    }
}


let bodyElement = document.querySelector("body");

for(let i = 0; i < elementListToCreate.length; i++){
    if(i === 0){
        createElementXTimes(elementListToCreate[i].name, elementListToCreate[i].times, bodyElement); 
    }
    else {
        let parentArray = document.querySelectorAll(elementListToCreate[i -1].name);
        parentArray.forEach((item) => createElementXTimes(elementListToCreate[i].name, elementListToCreate[i].times, item))
        
    }
}




