function persona(nome, cognome, eta) {
    if (eta) {
        return "signor ".concat(nome, " ").concat(cognome, " di anni ").concat(eta);
    }
    else {
        return "signor ".concat(nome, " ").concat(cognome);
    }
}
console.log(persona("Dario", "Del Giudice", 56));
console.log(persona("Mario", "Rossi"));
// console.log(persona(`Nicola`)); non posso passare un solo parametro perche' la funzione chiede DUE parametri obbligatori
var mioCorso = function (nomeCorso, annoCorso) {
    return "Corso ".concat(nomeCorso, " dell'anno ").concat(annoCorso);
};
console.log(mioCorso("FS0223", 2023));
var Stati = {
    nome: "Italia",
    capitale: "Roma",
    descrizione: function () {
        return "la capitale di ".concat(this.nome, " e' ").concat(this.capitale);
    }
};
console.log(Stati.descrizione());
