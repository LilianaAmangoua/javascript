// Première partie

const billyTheCat = {
    name: "billy",
    color: "black",
    favouriteFoods: ["fish", "chicken"],
    isHungry: true,
    meow: function() {
        return "Meeeeeeeow";
    }
}

// Exercice 1
console.log(billyTheCat.name);
console.log(billyTheCat.color);
console.log(billyTheCat.favouriteFoods);
console.log(billyTheCat.isHungry);
console.log(billyTheCat.meow());

// Exercice 2
/*const reponse = prompt(); 
if(reponse === "color"){
    console.log(billyTheCat.color);
}*/


// Deuxième partie
const animals = [
    { name: "kitty", species: "cat", noise: "meow" },
    { name: "skaly", species: "squale", noise: "frrrrrr" },
    { name: "wormy", species: "worm", noise: "????" },
    { name: "Pikatchue", species: "electrick mouse", noise: "pikaaaaa" }
];

// Exercice 3
console.log(animals[animals.length - 1]);

// Exercice 4
delete animals[1].name;
delete animals[2].species;
console.log(animals);

// Exercice 5
animals[0].name = animals[3].name;
console.log(animals[0].name);

// Troisième partie
const apple = {
    isEaten: false,
    eat: function () {
        return this.isEaten ? "le fruit a déjà été mangé" : this.isEaten = true;
    }
}

// Exercice 6
apple.isEaten = true;
console.log(apple.eat());
