/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];
let pairNumbers = 0;
function sumOfEvenNumbers(numbers){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            pairNumbers = pairNumbers + numbers[i];
        }
    }
    return pairNumbers;
}
console.log(sumOfEvenNumbers(numbers))
// your code here




/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];
const numbers3 = [12, 21, 67, 36, 49, 51,68];
let b = 0;

// your code here
function maxNumber(numbers){
    for(i = 0; i<numbers.length;i++){
        if(numbers[i] > b){
            b = numbers[i];
        }
    }
    return b;
}
console.log(maxNumber(numbers3));