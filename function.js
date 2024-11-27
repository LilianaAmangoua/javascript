// Exercice 1

function add(a,b){
    return a+b;
}

console.log(add(1,8));

// Exercice 2

function calculation(a, b){
    a = Math.sqrt(a);
    b = Math.pow(b, 7);
    return a + b;
}

console.log(calculation(2, 2));

// Exercice 3
function example(){
    let languages = prompt("Quels sont les languages à apprendre avant JS ?");
    if(languages === "HTML CSS"){
        return true;
    }
    return false; 
}

if(example() === true){
    console.log("Bienvenue en JS jeune éphèbe");
}
else {
    console.log("Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais");
}