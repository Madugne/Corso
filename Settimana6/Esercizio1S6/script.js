class utente {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    info(utenteX) {
   
    if (this.age > utenteX.age) {
        return `${this.firstName} e' piu' grande di ${utenteX.firstName}`
    } else if (this.age < utenteX.age) {return `${utenteX.firstName} e' piu' grande`}
    else {
        return `hanno la stessa eta'`
    }
}
    
}
const utente1 = new utente(`Mario`, `Rossi`, `30`, `Roma`);
const utente2 = new utente(`Luca`, `Rossi`, `29`, `Milano`);
console.log(utente1.info(utente2));

//esercizio 2

