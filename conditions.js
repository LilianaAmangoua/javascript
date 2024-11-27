// Exercice 1
const guessName = "Sphinx";
if(guessName === "Sphinx"){
    console.log("Vive l'Egypte");
}
else{
    console.log("De toute façon je ne comprends rien aux cartes");
}

// Exercice 2
const comparedString = "secret"
let mdp = prompt("Saisissez un mot de passe");

mdp === comparedString ? console.log("Bienvenue BG"): console.log("C'est NON 🦄");

//Exercice 3
let age3 = prompt("Quel est ton âge ?");
switch(age3){
    case age3 < 3 :
        console.log("Hello baby");
    case age3 < 18 :
        console.log("Hi");
    case age3 > 100 :
        console.log ("Greetings");
    default :
        console.log("Wow... 😲");
}

//Exercice 4
let age2 = prompt("Quel est ton âge ?");
let prenom = prompt("Quel est votre prénom ?");

if (age2 = 30 && prenom === "Bob"){
    console.log("Welcome");
}
else{
    console.log("Go away");
}

//Exercice 5
let date = new Date().getDay();
switch(date){
    case 0 :
        console.log("Dimanche");
    case 1 :
        console.log("Lundi")
    case 2 :
        console.log("Mardi");
    case 3 :
        console.log("Mercredi");
    case 4 :
        console.log("Jeudi");
    case 5 :
        console.log("Vendredi");
    case 6 :
        console.log("Samedi");
    default :
        console.log("Not valid");
}

// Exercice 6
const animal = {
    name: "Lucky",
    specie: "Cat",
    color: "Black"
}

animal.name === "Lucky" ? console.log("Voici un Pôtichat mignon") : console.log("Argh ! Ce n'est pas mon chat...");

// Exercice 7
const n1 =  1;
const n2 =  13;
const n3 =  20;
const n4 =  41;
const n5 =  70;
const n6 =  100;

if(n1 %2){
    console.log(n1 + ' est paire ✅');
}
else {
    console.log(n1 + ' Impaire ❌');
}

if(n2 %2){
    console.log(n1 + ' est paire ✅');
}
else {
    console.log(n1 + ' Impaire ❌');
}

if(n3 %2){
    console.log(n1 + ' est paire ✅');
}
else {
    console.log(n1 + ' Impaire ❌');
}

if(n4 %2){
    console.log(n1 + ' est paire ✅');
}
else {
    console.log(n1 + ' Impaire ❌');
}

if(n5 %2){
    console.log(n1 + ' est paire ✅');
}
else {
    console.log(n1 + ' Impaire ❌');
}

if(n6 %2){
    console.log(n1 + ' est paire ✅');
}
else {
    console.log(n1 + ' Impaire ❌');
}