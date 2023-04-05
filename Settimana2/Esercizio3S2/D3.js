/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 1;
const b = 2;
(console.log(a < b) ? b : a);

if (a < b) {console.log (b)}
else {console.log (a)};

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const c = 4;
console.log((c != 5) ? 'not equal' : 'equal');

if (c != 5) { console.log ('not equal')};
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero = 10;
divisione(numero) 
function divisione(num){
if(numero % 5 ===0) {console.log ('divisibile')}
else {console.log ('non divisibile');}
};

if ((numero % 5) ===0) {console.log('divisibile per 5')};
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 10;
const numero2 = 8;
if (numero1 === 8 || numero2 === 8) {
  console.log('uguale a 8')
}
if ((numero1 + numero2) === 8) {
  console.log('uaddizione a 8')
}else if((numero1 - numero2) === 8)console.log('uguale a 8');

if((numero1 - numero2) === 8 || (numero1 - numero2) === 8) console.log('Addizione/sottraione uguale a 8')
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 100;
if(totalShoppingCart > 50) {
  console.log(totalShoppingCart)
}else{
  console.log(totalShoppingCart + 10)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if(totalShoppingCart > 50) {
  console.log(totalShoppingCart * 0.8)
}else{
  console.log((totalShoppingCart * 0.8) + 10)
};
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let n7 = 10;
let n8 = 20;
let n9 = 30;

if(n7 > n8){
  if(n7 > n9){
    if(n8 > n9){
      console.log(n7 + ' ' + n8 + ' ' + n9)
    }else{
      console.log(n7 + ' ' + n9 + ' ' + n8)
    }
  }else{
    console.log(n9 + ' ' + n7 + ' ' + n8)
  }
}else if(n8 > n9){
        if(n9 > n7){
          console.log(n8 + ' ' + n9 + ' ' + n7)
        }else{
          console.log(n8 + ' ' + n7 + ' ' + n8)
        }
}else{
  console.log(n9 + ' ' + n8 + ' ' + n7)
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const valore = '5'
if (typeof valore === 'number') {console.log ('è un numero')}
else {console.log ('non è un numero')};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
