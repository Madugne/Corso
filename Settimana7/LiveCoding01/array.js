var mioArray = ["pippo", "pluto", "paperino"];
mioArray.push("topolino");
var arrayMisto = ["Pippo", 5];
console.log(arrayMisto);
arrayMisto.push(18);
arrayMisto.push("Pluto");
console.log(arrayMisto);
// arrayMisto.push(false); non posso farlo perche' posso inserire soltanto valori di tipo string o number
var tupla = ["Pippo", 15, "Pluto"];
console.log(tupla);
//tupla[0] = 25; non posso farlo perche' all'indice 0 e' indicato un tipo string
//tupla[3] = `Nicola`; non posso farlo perche' la tupla ha lunghezza definita
tupla[0] = "Paperino";
console.log(tupla);
//tupla[3]: number = 18; non posso aggiungere un indice alla tupla neanche specificando il tipo
var nuovoArray = [1, 2, 3, 4, 5];
nuovoArray.push(9);
console.log(nuovoArray);
