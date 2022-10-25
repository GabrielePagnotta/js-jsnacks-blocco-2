// snack 1

// let numero = parseInt(prompt("inserisci numero"))
// console.log(numero)
// if(numero % 2 == 0){
//     console.log(numero)
// }

// else{
//     let successivo = numero + 1;
//     console.log(successivo)
// }

// --------------------------------------------------------------------------

// snack 2

// let nomi = ['peppino', 'luigi', 'sandro'];
// let cognomi = ['sfriso','martinez','vannucci']
// let listavuota = []

    

// for (let i = 0; i < 100; i++) {
//     let numero = Math.floor(Math.random() * 3) + 0;
//     let numero2 = Math.floor(Math.random() * 3) + 0;
//     let nome = nomi[numero]
//     let cognome = cognomi[numero2]
//     let nome_completo = `${nome} ${cognome}`
//     console.log(nome_completo)
    
//     listavuota.push(nome_completo)
// }

// console.log(listavuota)
// --------------------------------------------------------------------------

// snack 3

// let num = [1,2,3,4,5,6,7,8];

// let lunghezza = num.length;
// let somma = num[0];

// for (let i = 2; i < lunghezza; i = i+2) {
    
//     somma = somma + num[i]
    
// }
// console.log(somma)

// *Snack4 (Bonus)*

// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// creo array 1

let array_1 = [0,1,2];
let lunghezza_1 = array_1.length;

// creo array 2

let array_2 =[0,1,2,3];
let lunghezza_2 = array_2.length;

if (lunghezza_1 > lunghezza_2) {
    for (let i = lunghezza_2; i < lunghezza_1; i++) {
        array_2.push(lunghezza_2)
        lunghezza_2++
    }
    
}else if(lunghezza_1 < lunghezza_2){
    for (let i = lunghezza_1; i < lunghezza_2; i++) {
        array_2.push(lunghezza_1)
        lunghezza_1++
    }
    
}

console.log(lunghezza_1, lunghezza_2)





    


















