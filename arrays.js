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

// Exercice 5
characterNames.forEach((element) => {
    console.log(element);
});

// Exercice 6
characterNames.forEach((element) => {
    console.log(element + "(" + element.length + ")");
});

// Exercice 7
characterNames.forEach((element) => {
    console.log(element.toLowerCase());
});

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

// Exercice Signes Astrologiques
const aries = `♈`;
const taurus = `♉`;
const gemini = `♊`;
const cancer = `♋`;
const leo = `♌`;
const virgo = `♍`;
const libra = `♎`;
const scorpio = `♏`;
const sagittarius = `♐`;
const capricorn = `♑`;
const aquarius = `♒`;
const pisces = `♓︎`;

const fireSigns = [aries, leo];
const earthSigns = [taurus, virgo, capricorn, sagittarius];
const airSigns = [gemini, libra, aquarius];
const waterSigns = [cancer, scorpio, pisces];

// Etape 1
fireSigns.push(sagittarius);

// test (à ne pas toucher) : 
console.log(
    fireSigns[fireSigns.length - 1] === "♐"
      ? "Good Answer ✅"
      : "Wrong Answer ❌"
);

// Etape 2
earthSigns.pop();

console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

// Etape 3
let zodiacSigns = [];

// Etape 4
zodiacSigns = zodiacSigns.concat(fireSigns, earthSigns, waterSigns, airSigns);

console.log(
    (zodiacSigns !== null && zodiacSigns.toString() === "♈,♌,♐,♉,♍,♑,♋,♏,♓︎,♊,♎,♒")
      ? "Good Answer ✅"
      : "Wrong Answer ❌"
);

// Etape 5
console.log(zodiacSigns.length);