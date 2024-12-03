// Exercice 1

const buttonToClick = document.getElementById("btn");
const paragraphToHide = document.querySelectorAll('p')[0];
const buttonHideDisplay = document.querySelectorAll('button')[0];

buttonToClick.addEventListener('click', hideParagraph);

function hideParagraph(){
    if(paragraphToHide.style.display === 'block'){
        paragraphToHide.style.display = 'none';
        buttonHideDisplay.innerText = 'Afficher'
    }
    else if(paragraphToHide.style.display = 'none'){
        paragraphToHide.style.display = 'block';
        buttonHideDisplay.innerText = 'Cacher';
    }
}

// Exercice 2

const buttonCalculate = document.querySelectorAll("button")[2];
const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const displayResult = document.querySelector("#display-result")

buttonCalculate.addEventListener('click', calculate);
let result = 0;

function calculate(){
    displayResult.innerText = "Calcul en cours..."

    const operator = document.querySelector("#operator").value; 

    if(operator === '/'){
        result =  Number(firstNumber.value) / Number(secondNumber.value);
        displayResult.innerText = result;
    }
    else if(operator === '*'){
        result = Number(firstNumber.value) * Number(secondNumber.value);
        displayResult.innerText = result;
    }
    else if(operator === '+'){
        result = Number(firstNumber.value) + Number(secondNumber.value);
        displayResult.innerText = result;
    }
    else if(operator === '-'){
        result = Number(firstNumber.value) - Number(secondNumber.value);
        displayResult.innerText = result;
    }
    else{
        displayResult.innerText = "Opérateur non valide :(";
    }
}

// Exercice 3a

const cartContainer = document.querySelector('.cart');

let buyButtons = document.querySelectorAll('.bouquet-button');
const productTitle = document.querySelectorAll(".product-title");
const bouquetsDivs = document.querySelectorAll(".one-bouquet");

const products = [
    {
        productName: productTitle[0].innerText,
        itsButton : buyButtons[0],
        quantity: 0,
        paragraphToCreate: null,
        h3toCreate: null
    },
    {
        productName: productTitle[1].innerText,
        itsButton : buyButtons[1],
        quantity: 0,
        paragraphToCreate: null,
        h3toCreate: null
    },
    {
        productName: productTitle[2].innerText,
        itsButton : buyButtons[2],
        quantity: 0,
        paragraphToCreate: null,
        h3toCreate: null
    }

];

buyButtons.forEach((button) =>{
    buyButtons = Array.from(buyButtons); // Une nodeList n'a pas les méthodes d'un tableau "normal", donc faut le transformer en tableau
    let index = buyButtons.indexOf(button); 
    button.addEventListener('click', function(){
        addProductsToCart(index);
    });
})


function addProductsToCart(index){
    const selectedProductName = products[index].productName; // Nom du produit selectioné
    products[index].quantity ++; // A chaque fois, que le bouton "Acheter" est cliqué, augmenter la quantité

    // Créer le titre du produit selectionné dans le panier si c'est pas fait
    if(products[index].h3toCreate === null){
        products[index].h3toCreate = document.createElement('h3');
        products[index].h3toCreate.innerText = selectedProductName;
        cartContainer.appendChild(products[index].h3toCreate);
    }

    // Créer le paragraphe pour afficher la quantité du produit selectionné dans le panier si c'est pas fait
    if(products[index].paragraphToCreate === null){
        products[index].paragraphToCreate = document.createElement('p');
        cartContainer.appendChild(products[index].paragraphToCreate);
    }

    // Mettre le paragraphe à jour
    products[index].paragraphToCreate.innerText = `Quantité de ${selectedProductName} : ${products[index].quantity}`;
    
}

// Exercice 3b
const user = {
    firstName: 'Liliana',
    mouseoverCounterBouquet1: 0,
    mouseoverCounterBouquet2: 0,
    mouseoverCounterBouquet3: 0
}

bouquetsDivs.forEach((bouquet) => {
    bouquet.addEventListener('mouseover', function(){
        countMouseOver(bouquet);
    });
})

function countMouseOver(bouquet){
    if(bouquet === bouquetsDivs[0]){
        user.mouseoverCounterBouquet1 ++;
    }
    else if(bouquet === bouquetsDivs[1]){
        user.mouseoverCounterBouquet2 ++;
    }
    else if(bouquet === bouquetsDivs[2]){
        user.mouseoverCounterBouquet3 ++;
    }

    console.log(`Counter of bouquet 1 : ${user.mouseoverCounterBouquet1}`);
    console.log(`Counter of bouquet 2 : ${user.mouseoverCounterBouquet2}`);
    console.log(`Counter of bouquet 3 : ${user.mouseoverCounterBouquet3}`);
}

