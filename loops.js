// Exercice 1
for(let i = 1; i <= 50; i++){
    console.log("Tours n°" + i);
}

// Exercice 2
for(let i = 1; i <= 100; i++){
    console.log(`Tour n°${i}`);

    if (i === 1){
    console.log("Zé bartiii, c'est à conducteur 1️⃣ de démarrer");
    }
    else if(i === 25){
    console.log("Il faut changer de conducteur, c'est à conducteur 2️⃣");
    }
    else if(i === 50 ){
    console.log("Il faut changer de conducteur, c'est à conducteur 1️⃣");
    }
    else if(i === 75){
    console.log("Il faut changer de conducteur, c'est à conducteur 2️⃣");
    }
    else if(i === 100){
    console.log("C'est fini, bien joué à tous, HIGH FIVE ! 🙌😎");
    }
    
}

// Exercice 3
let fuel = 74;
let fuelUsedAtEveryTurn = 7;
let totalNumberOfRefuel = 0;

for(let i = 1; i <= 101; i++){

    fuel -= fuelUsedAtEveryTurn;
    console.log(`Tour n°${i}, Fuel restant:${fuel}`);

    if(fuel <= 7){
        console.warn("Attention carburant à recharger au prochain tour⛽️");
        fuel = 74;
        console.warn("Le refuel a été fait 🙌😎");
        totalNumberOfRefuel ++;
    }
}

console.log(`Nombre total de refuel : ${totalNumberOfRefuel}`);