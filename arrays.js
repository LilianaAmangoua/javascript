const characterNames = [
    "63AIS",
    "A'misandra",
    "Amimari",
    "Alika",
    "54B2",
    "A'merpact",
    "Amazora",
];

// Exercice 1
console.log(characterNames.length);

// Exercice 2
console.log(characterNames[0]);

// Exercice 3
console.log(characterNames[6]);

// Exercice 4
console.log(characterNames[characterNames.length - 1]);

/*characterNames.forEach((element) => {
    console.log(element);
});

characterNames.forEach((element) => {
    console.log(element + "(" + element.length + ")");
});

characterNames.forEach((element) => {
    console.log(element.toLowerCase());
});*/

// Exercice 8
let counter = 0;
characterNames.forEach((element) => {
    if(element.includes("a")){
        counter ++;
    }
});

console.log(counter);

// Exercice 9

function search(needle){
    characterNames.forEach((element) => {
        if(element.includes(needle)){
            console.log(element);
        }
    });
}

search("Al");