//PARI O DISPARI

// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// // Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

//----------------------------------------------------//

// Scelta  pari o dispari
const pariDispari = prompt("Pari o Dispari?");

//capisco se l'utente ha scelto pari o dispari
let scelta = "";

//Attribuisco un valore booleano  a "pari" o "dispari"
if(pariDispari === "pari"){
        scelta = true;
}else if(pariDispari === "dispari"){
        scelta = false;
}
    
// l'utente inserisce un numero compreso tra 1 e 5
const numUser = parseInt(prompt("scegli un numero da 1 a 5"));

// genero un numero random 
let ComputerNum = genNumbRandom(1, 5);

// sommo 
let somma = numUser + ComputerNum;  
    
//se la scelta dell'user corrisponde alla funzione Xnum vince
  if(scelta === Xnum(somma)){
    console.log("hai vinto");
    //altrimenti ha perso
} else {
    console.log("hai perso");
}
    
// funzione numeri random
function genNumbRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
   
// funzione per sapere se un numero è pari
function Xnum(numF){
   if(numF % 2 === 0){
       return even = true;
   } else {
        return even = false;
   }
}  
   
//console log in pagina
console.log("l'utente ha scelto: (se è true ha scelto pari se è false ha scelto dispari)", scelta);
console.log("numero utente", numUser);
console.log("numero cpu", ComputerNum);
console.log("la somma è:", somma);