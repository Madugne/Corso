var userIliad = /** @class */ (function () {
    function userIliad() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    userIliad.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    userIliad.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = 0.2 * minutiDurata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Saldo insufficiente per effettuare la chiamata.");
        }
    };
    userIliad.prototype.numero404 = function () {
        return this.carica;
    };
    userIliad.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    userIliad.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return userIliad;
}());
var userTim = /** @class */ (function () {
    function userTim() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    userTim.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    userTim.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = 0.8 * minutiDurata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Saldo insufficiente per effettuare la chiamata.");
        }
    };
    userTim.prototype.numero404 = function () {
        return this.carica;
    };
    userTim.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    userTim.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return userTim;
}());
var userWind = /** @class */ (function () {
    function userWind() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    userWind.prototype.ricarica = function (unaRicarica) {
        //wind quando si rubava 1 euro dalla ricarica da 10 e 5 euro :) poi li hanno multati
        if (unaRicarica === 10 || unaRicarica === 5) {
            this.carica += --unaRicarica;
        }
        else {
            this.carica += unaRicarica;
        }
    };
    userWind.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = 0.5 * minutiDurata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Saldo insufficiente per effettuare la chiamata.");
        }
    };
    userWind.prototype.numero404 = function () {
        return this.carica;
    };
    userWind.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    userWind.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return userWind;
}());
var firstUser = new userIliad();
var secondUser = new userTim();
var thirdUser = new userWind();
firstUser.ricarica(10);
firstUser.chiamata(5);
console.log("utente Iliad");
console.log("Saldo residuo: " + firstUser.numero404());
console.log("Numero di chiamate effettuate: " + firstUser.getNumeroChiamate());
secondUser.ricarica(5);
secondUser.chiamata(3);
console.log("utente Tim");
console.log("Saldo residuo: " + secondUser.numero404());
console.log("Numero di chiamate effettuate: " + secondUser.getNumeroChiamate());
thirdUser.ricarica(10);
thirdUser.chiamata(1);
console.log("utente Wind");
console.log("Saldo residuo: " + thirdUser.numero404());
console.log("Numero di chiamate effettuate: " + thirdUser.getNumeroChiamate());
