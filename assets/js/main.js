/**************************************************
 
TRACCIA ESERCIZIO
Istruzioni
Il programma dovrà chiedere all'utente:
il numero di chilometri che vuole percorrere
e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca, oltre alla ricerca da fare per ricordarsi come calcolare uno sconto (Googlate qulcosa del tipo: come si calcola lo sconto? e cercate una risorsa che vi possa aiutare a capire cosa fare)

***************************************************/
//INFOMRAZIONI DA RICHIEDERE ALL'UTENTE:
// 1°  - chiedere all'utente quanti km deve percorrere
const userAge = Number(prompt('quanti anni hai?'));
console.log(userAge);

// 2°  - chiedere all'utente quanti anni ha
const travelKms = Number(prompt('quanti km devi percorrere?'));
console.log(travelKms);

// CALCOLO DEL COSTO DEL VIAGGIO
// 1° - calcolare il prezzo totale moltiplicando i km per 0.21€/km
const priceKm = 0.21;
console.log(travelKms);

const priceTotalKms = priceKm * travelKms;
console.log(priceTotalKms);

// 2° - calcolare lo sconto del 20%
const priceLess20 = priceTotalKms * 20 / 100;
console.log(priceLess20);

// 3° - calcolare lo sconto del 40%
const priceLess40 = priceTotalKms * 40 / 100;
console.log(priceLess40);

// 4° - se il passeggero ha - di 18 anni applicare sconto del 20%
// 5° - altrimenti se il passeggero ha + di 65 applicare lo sconto del 40%
// 6° - altrimenti pagherà il prezzo pieno
if (userAge < 18) {
    console.log('il prezzo per i minorenni è di €:', priceLess20);
} else if (userAge > 65){
    console.log('il prezzo per gli over 65 è di €:', priceLess40);
} else {
    console.log('il prezzo per te è di €:', priceTotalKms);
}