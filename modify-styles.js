/**
 * --------------------------------
 * 1 - Via JS, renseigner la valeur des attributs src et alt des balises <img>
 * Toujours via JS, leur fixer une longueur de 100%.
 * --------------------------------
 */

let images = document.querySelectorAll("img");

images.forEach((image) => {
    image.setAttribute('src', 'https://www.edisaxe.com/310958-large_default/comment-dessiner-100-fleurs.jpg');
    image.setAttribute('alt', 'image de fleur');
    image.setAttribute('width', '100%');
});

/**
 * --------------------------------
 * 2 - Via une boucle (sur le tableau ci-dessus), récupérer toutes les balises titres de la page.
 * → Leur ajouter (à toutes) la classe "title"
 * → Si c'est une balise h1, ajouter en plus la classe "title1"
 * → Si c'est une balise h2, ajouter en plus la classe "title2"
 * → Si c'est une balise h3, ajouter en plus la classe "title3"
 * --------------------------------
 */

const titleList = ["h1", "h2", "h3", "h4", "h5", "h6"];

/*titleList.forEach((tag) => {
    document.querySelector(tag).classList.add('title');
    if(tag.element === 'h1'){
        element.classList.add('title1');
    }
    else if (tag.element === 'h2') {
        element.classList.add('title2');
    }
    else if (tag.element === 'h3') {
        element.classList.add('title3');
    }
});*/


// Exercice 3
let mainPart = document.querySelector("main");
let section2 = mainPart.lastElementChild;

section2 = section2.classList.add('section2');

let cardContainer = document.querySelector('.section2').lastElementChild;
cardContainer.classList.add('card-container');

let cards = document.querySelector('.card-container').querySelectorAll('div');
cards.forEach((card) => {
    card.classList.add('cards');
})

// Exercice 4
mainPart.setAttribute('style', 'background-color: #d3f7d4');

document.querySelector('.section2').setAttribute('style', 'background-color: #abcdac; padding: 20px; margin: 10px; display: flex; flex-direction: column');

cardContainer.setAttribute('style', 'padding: 20px; margin: 10px; border: 1px solid black; display: flex; flex-direction: row');

cards.forEach((card) => {
    card.setAttribute('style', 'border: 1px solid black; padding: 5px; display:flex; flex-direction: column; text-align: center');
})

// Exercice 5
cardContainer.removeChild(cards[1]);
cardContainer.removeChild(cards[2]);

cardContainer.appendChild(cards[1]);
cardContainer.appendChild(cards[2]);

// Exercice 6
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
newDiv.setAttribute('style', 'border: 1px solid black; padding: 5px; display:flex; flex-direction: column; text-align: center');

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://www.edisaxe.com/310958-large_default/comment-dessiner-100-fleurs.jpg');
newImage.setAttribute('alt', 'image de fleur');
newImage.setAttribute('width', '100%');
newDiv.appendChild(newImage);

const newTitle = document.createElement('h3');
newTitle.innerText = "Titre 3";
newDiv.appendChild(newTitle);

const newParagraph = document.createElement('p');
newParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto deserunt, in dicta est commodi eligendi, eaque molestiae, nisi esse repudiandae deleniti nulla quaerat tempore neque. Excepturi nostrum dicta illo debitis?"
newDiv.appendChild(newParagraph);

const newButton = document.createElement('button');
newButton.innerText = "Click pour en savoir + 🤓";
newDiv.appendChild(newButton);

cardContainer.appendChild(newDiv);
