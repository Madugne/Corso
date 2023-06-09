/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log(`ESERCIZIO_A`);

let sum = (10 + 20);
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log(`ESERCIZIO_B`);

let random = Math.floor(Math.random() * 20) + 1;
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log(`ESERCIZIO_C`);

const me = {
  name: `Chun Yin (Fabio)`,
  surname: `Yu`,
  age: 23,
}
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log(`ESERCIZIO_D`);

delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log(`ESERCIZIO_E`);

me.skills = [`html`];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log(`ESERCIZIO_F`);

me.skills.push('css');
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log(`ESERCIZIO_G`);

me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log(`ESERCIZIO_01`);

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log(`ESERCIZIO_02`);

let numero1 = 20;
let numero2 = 30;
function whoIsBigger() {
  if (numero1 > numero2) {
    return (numero1)
  } else return (numero2);
}
console.log(whoIsBigger());
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log(`ESERCIZIO_03`);

function splitMe() {
  let text = "Javascript is hard";
  let splitText = text.split(" ");
  return splitText
}
console.log(splitMe())
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log(`ESERCIZIO_04`);

boolean = true
function deleteOne(stringa) {
  if (boolean === false) {
    let catena = stringa.slice(0, 3);
    return catena
  }
  else if (boolean === true) {
    let catena = stringa.slice(1, 4);
    return catena
  }
}
console.log(deleteOne(`java`));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log(`ESERCIZIO_05`);

function onlyLetters() {
  let lettereNumeri = `I have 4 dogs`;
  let lettere = lettereNumeri.replace(/[0-9]/g, "");
  return lettere
}
console.log(onlyLetters());
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log(`ESERCIZIO_06`);

function isThisAnEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}
console.log(isThisAnEmail('testEmail@mail.com'));
console.log(isThisAnEmail('testEmail@ mail .com'));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log(`ESERCIZIO_07`);

function whatDayIsIt() {
  const settimana = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"];
  const g = new Date();
  let giorno = settimana[g.getDay()];
  return giorno
}
console.log(whatDayIsIt())
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log(`ESERCIZIO_08`);

function rollTheDices(dices) {
  let values = [];
  let sum = 0;
  for (let i = 0; i < dices; i++) {
    let dadi = dice();
    values.push(dadi);
    sum += dadi;
  }
  let totalSum = { values, sum };
  return totalSum;
}

console.log(rollTheDices(5));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log(`ESERCIZIO_09`);

let data1 = new Date(`04/15/2023`);
let data2 = new Date(`04/15/2022`);

const days = (data1, data2) => {
  let giorniTrascorsi = data1.getTime() - data2.getTime();
  let giorniTotali = Math.ceil(giorniTrascorsi / (1000 * 3600 * 24));
  return giorniTotali;
}
console.log(days(data1, data2));
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log(`ESERCIZIO_10`);

function isTodayMyBirthday(day) {
  let today = new Date();
  return (today.getMonth() === day.getMonth() && today.getDate() === day.getDate());
}
console.log(isTodayMyBirthday(new Date(2023, 03, 15)));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log(`ESERCIZIO_11`);

function deleteProp(object, string) {
  delete object[string]
  return object
}
let oggetto = {
  stringa1: `stringa1`,
  stringa2: `stringa2`
}
console.log(deleteProp(oggetto, `stringa1`))
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log(`ESERCIZIO_12`);

function newestMovie() {
  let anno = 0;
  for (let i = 0; i < movies.length; i++) {
    if (Number(movies[i].Year) > anno) {
      anno = Number(movies[i].Year)
    }
  };
  return anno;
}
console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log(`ESERCIZIO_13`);

function countMovies(movies) {
  let movieLenght = 0;
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Type === `movie`) {
      movieLenght++
    }
  }
  return movieLenght;
}
console.log(countMovies(movies));

/*const countMovies = (nMovies) => {
  return nMovies.length;
};
console.log(countMovies(movies));
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log(`ESERCIZIO_14`);

const onlyTheYears = (anno) => {
  return anno.map((aNNo) => aNNo.Year);
};
console.log(onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log(`ESERCIZIO_15`);

const onlyInThisMillennium = (ultimoMillennio) => {
  let result = [];
  for (let i = 0; i < ultimoMillennio.length; i++) {
    if (parseInt(ultimoMillennio[i].Year) > 2000) {
      result.push(ultimoMillennio[i]);
    }
  }
  return result;
};
console.log(onlyInThisMillennium(movies));
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log(`ESERCIZIO_16`);

const sumAllTheYears = (sommaAnni) => {
  let result = 0;
  for (let i = 0; i < sommaAnni.length; i++) {
    result += parseInt(sommaAnni[i].Year);
  }
  return result;
};
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log(`ESERCIZIO_17`);

function searchByTitle(movie) {
  let movieTitle = [];
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(movie)) {
      movieTitle.push(movies[i].Title);
    }
  }
  return movieTitle;
}
console.log(searchByTitle(`Lord`));
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log(`ESERCIZIO_18`);

function searchAndDivide(movie) {
  let matchUnmatch = {
    unmatch: [],
    match: [],
  }
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(movie)) {
      matchUnmatch.match.push(movies[i].Title);
    } else matchUnmatch.unmatch.push(movies[i].Title)
  }
  return matchUnmatch
}
console.log(searchAndDivide(`Lord`));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(`ESERCIZIO_19`);

function removeIndex(numero) {
  movies.splice(numero, 1);
  return movies
}
console.log(removeIndex(1));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log(`ESERCIZIO_20`);

function selezione() {
  let select = document.getElementById(`container`)
  return select
}
console.log(selezione());
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log(`ESERCIZIO_21`);

function selection() {
  let select = document.getElementsByTagName(`td`)
  return select
}
console.log(selection());
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log(`ESERCIZIO_22`);

function cicle() {
  let select = document.getElementsByTagName(`td`);
  for (i = 0; i < select.length; i++) {
    console.log(select[i].innerText)
  }
}
cicle();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log(`ESERCIZIO_23`);

coloreLink("red");
function coloreLink(colore) {
  let link = document.getElementsByTagName("a");
  for (let i = 0; i < link.length; i++) {
    if (link[i].href) {
      link[i].style.backgroundColor = colore;
    }
  }
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log(`ESERCIZIO_24`);

function myList(name) {
  let li = document.createElement('li');
  li.textContent = name;
  return li;
}
let lista = document.querySelector('#myList');
lista.appendChild(myList('Cinque'));

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log(`ESERCIZIO_25_COMMENTATO`);


/*
function rimuovi() {
  let element = document.getElementById("myList");
  element.remove();
}
rimuovi();
*/


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log(`ESERCIZIO_26`);

let classe = document.getElementsByTagName("tr");

function aggiungiClasse() {
  classe.className = "css";
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
