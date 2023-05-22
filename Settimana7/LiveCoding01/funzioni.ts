function persona(nome: string, cognome: string, eta?: number): string {
    if(eta) {
        return `signor ${nome} ${cognome} di anni ${eta}`;
    } else {
        return `signor ${nome} ${cognome}`
    }
}

console.log(persona(`Dario`, `Del Giudice`, 56));
console.log(persona(`Mario`, `Rossi`));

// console.log(persona(`Nicola`)); non posso passare un solo parametro perche' la funzione chiede DUE parametri obbligatori

const mioCorso = (nomeCorso: string, annoCorso: number): string => {
    return `Corso ${nomeCorso} dell'anno ${annoCorso}`;
};

console.log(mioCorso(`FS0223`, 2023));

const Stati: {
    nome: string,
    capitale: string,
    descrizione: any
} = {
    nome: `Italia`,
    capitale: `Roma`,
    descrizione() {
        return `la capitale di ${this.nome} e' ${this.capitale}`;
    }
}
console.log(Stati.descrizione());