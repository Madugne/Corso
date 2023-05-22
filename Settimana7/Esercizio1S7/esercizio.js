function getClosestNumber(num1, num2) {
    var randomNum = Math.random() * 100; // Genera un numero casuale compreso tra 0 e 100
    console.log(randomNum);
    var diff1 = Math.abs(randomNum - num1);
    var diff2 = Math.abs(randomNum - num2);
    if (diff1 < diff2) {
        return num1;
    }
    else {
        return num2;
    }
}
// Esempio di utilizzo
var value1 = 90;
var value2 = 20;
var closestNumber = getClosestNumber(value1, value2);
console.log("Il numero pi\u00F9 vicino al numero casuale generato \u00E8: ".concat(closestNumber));
