// Exercice 1

let sectionHero = document.getElementById("hero-section");

let newDiv = document.createElement('div');
newDiv = sectionHero.appendChild(newDiv);

let newH3 = document.createElement('h3');
newH3 = newDiv.appendChild(newH3);
newH3.id = "myNewH3";
newH3.innerText = "Voici le h3";

let newParagraph = document.createElement("p");
newParagraph = newDiv.appendChild(newParagraph);
newParagraph.innerText = "Ceci est un paragraphe";

let newButton = document.createElement("button");
newButton = newDiv.appendChild(newButton);
newButton.className = "myButton";
newButton.innerText = "Bouton";

// Exercice 2

function createMenuItem(text){
    let newLi = document.createElement("li");
    newLi.innerText = text;
    return newLi.innerHTML;
}

let menu = document.getElementById("menu");
menu = menu.appendChild(createMenuItem("hello"));