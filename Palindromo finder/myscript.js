// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma

// -------------------------------//

// chiedo all'utente di inserire una parola 
let parola = prompt("Inserisci una parola");

// Vado a controllare se la parola è palindroma
let palWord = palinndromFinder(parola);

console.log(palWord);

function palinndromFinder (string){
    // trovo la lunghezza di una stringa
    const len = string.length;
        // passo attraverso meta della stringa
        for (let i = 0; i < len / 2; i++) {

            // controllo se la prima metà della stringa è uguale alla seconda metà
            if (string[i] !== string[len - 1 - i]) {
                return 'La parola non è palindroma';
            }
        }
        return 'La parola è palindroma';
}