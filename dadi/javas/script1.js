/*
    Tirare 2 dadi e valutare il maggiore
    1. Creazione 2 numeri random
    2. Confronto numero più alto
    3. Log del più alto vince
*/

var numero1 = Math.floor(Math.random() * 6) + 1;
console.log(numero1);
var numero2 = Math.floor(Math.random() * 6) + 1;
console.log(numero2);

if (numero1 > numero2) {
    console.log('Vince 1');
} else if (numero1 < numero2) {
    console.log('Vince 2');
} else {
    console.log('Pareggio');
}
