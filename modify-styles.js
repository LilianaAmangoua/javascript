/**
 * --------------------------------
 * 1 - Via JS, renseigner la valeur des attributs src et alt des balises <img>
 * Toujours via JS, leur fixer une longueur de 100%.
 * --------------------------------
 */

let images = document.querySelectorAll("img");

images.forEach((image) => {
    image.setAttribute('src', 'google.com');
    image.setAttribute('alt', 'image de quelque chose');
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

titleList.forEach((tag) => {
    let element = document.querySelector(tag);
    tag.classList.add('title');
    if(tag === 'h1'){
        title.classList.add('title1');
    }
    else if (tag === 'h2') {
        title.classList.add('title2');
    }
    else if (tag === 'h3') {
        title.classList.add('title3');
    }
});

