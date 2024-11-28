// console.log(document);

// Exercice 1
let services1 = document.getElementById("our-services");
let services2 = document.getElementsByTagName("section")[1];
console.log(services1);
console.log(services2);

let service1a = document.querySelector("#our-services");
let service1b = document.querySelectorAll("section")[1];
console.log(service1a);
console.log(service1b);


// Exercice 2
let input1 = document.getElementById("great");
let input2 = document.querySelector("#not-great");

console.log(input1.value, input2.value);

// Exercice 3
let cardsContainer = document.querySelector(".cards-container");
let secondDiv = cardsContainer.lastElementChild;

let title = secondDiv.querySelector("h3");

console.log(title.innerHTML);

// Exercice 4
let elementsWithBtn = document.querySelectorAll(".btn");
console.log(elementsWithBtn);

let elementsWithCtaBtn = document.querySelectorAll(".cta-btn");
console.log(elementsWithCtaBtn);

let elementsWithCtaPrimary = document.querySelectorAll(".cta-primary");
console.log(elementsWithCtaPrimary);

let elementsWithCtaSecondary = document.querySelectorAll(".cta-secondary");
console.log(elementsWithCtaSecondary);

let elementsWithCtaBtnCtaPrimary = document.querySelectorAll(".cta-btn, .cta-primary");
console.log(elementsWithCtaBtnCtaPrimary);

let elementsWithBtnCtaBtnCtaSecondary = document.querySelectorAll(".btn, .cta-btn, .cta-secondary");
console.log(elementsWithBtnCtaBtnCtaSecondary); 


let counterElementsWithBtn = elementsWithBtn.length;
console.log(counterElementsWithBtn);

// Exercice 5

let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => {
    console.log(paragraph.innerHTML);
})

// Exercice 6
let sectionParent = document.querySelectorAll("section")[0];
console.log(sectionParent.parentElement);
console.log(sectionParent.firstElementChild);
console.log(sectionParent.lastElementChild);
console.log(services1.previousElementSibling);
console.log(service1a.nextElementSibling);

// Exercice 7

function numberOfTags(tag){
    let allDocument = document.querySelectorAll(tag);
    allDocument = allDocument.length; 
    return allDocument;
}

numberOfTags('p');
numberOfTags('h2');
numberOfTags('h3');
numberOfTags('p');
numberOfTags('section');
numberOfTags('div');

let sum = numberOfTags('h1') + numberOfTags('h2') + numberOfTags('h3') + numberOfTags('p') + numberOfTags('section') +numberOfTags('div');
console.log(sum);




