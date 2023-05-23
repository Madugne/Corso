var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sonAccount = /** @class */ (function () {
    function sonAccount(nome, cognome) {
        this.balanceInit = 0;
        this.nomeSon = nome;
        this.cognomeSon = cognome;
    }
    sonAccount.prototype.oneDeposit = function (versamento) {
        console.log("saldo iniziale: ".concat(this.balanceInit, "$"));
        console.log("versamento: ".concat(versamento, "$"));
        this.balanceInit += versamento;
        return "saldo attuale: ".concat(this.balanceInit, "$");
    };
    sonAccount.prototype.oneWithDraw = function (prelievo) {
        console.log("Saldo iniziale: ".concat(this.balanceInit, "$"));
        console.log("Prelievo: ".concat(prelievo, "$"));
        this.balanceInit -= prelievo;
        return "Saldo attuale: ".concat(this.balanceInit, "$");
    };
    sonAccount.prototype.twoDeposit = function (versamento) {
        console.log("Saldo iniziale: ".concat(this.balanceInit, "$"));
        console.log("Versamento: ".concat(versamento, "$"));
        this.balanceInit += versamento;
        return "Saldo attuale: ".concat(this.balanceInit, "$");
    };
    sonAccount.prototype.twoWithDraw = function (prelievo) {
        console.log("Saldo iniziale: ".concat(this.balanceInit, "$"));
        console.log("Prelievo: ".concat(prelievo, "$"));
        this.balanceInit -= prelievo;
        return "Saldo attuale: ".concat(this.balanceInit, "$");
    };
    return sonAccount;
}());
var motherAccount = /** @class */ (function (_super) {
    __extends(motherAccount, _super);
    function motherAccount(nome, cognome) {
        return _super.call(this, nome, cognome) || this;
    }
    motherAccount.prototype.oneDeposit = function (versamento) {
        console.log("saldo iniziale: ".concat(this.balanceInit, "$"));
        console.log("versamento: ".concat(versamento, "$"));
        this.balanceInit += versamento;
        this.balanceInit += this.balanceInit * 0.1;
        return "Saldo attuale con interessi (10%): ".concat(this.balanceInit, "$");
    };
    motherAccount.prototype.twoDeposit = function (versamento) {
        console.log("saldo iniziale: ".concat(this.balanceInit, "$"));
        console.log("versamento: ".concat(versamento, "$"));
        this.balanceInit += versamento;
        this.balanceInit += this.balanceInit * 0.1;
        return "Saldo attuale con interessi (10%): ".concat(this.balanceInit, "$");
    };
    return motherAccount;
}(sonAccount));
var utente1 = new sonAccount("Mario", "Rossi");
console.log(utente1.oneDeposit(500));
console.log(utente1.oneWithDraw(400));
console.log(utente1.twoDeposit(1000));
console.log(utente1.twoWithDraw(800));
var utente2 = new motherAccount("Giulia", "Rossi");
console.log(utente2.oneDeposit(500));
console.log(utente2.oneWithDraw(400));
console.log(utente2.twoDeposit(1000));
console.log(utente2.twoWithDraw(800));
