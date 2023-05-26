interface Smartphone {
  carica: number;
  numeroChiamate: number;

  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class userIliad implements Smartphone {
  carica: number;
  numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = 0.2 * minutiDurata;
    if (this.carica >= costoChiamata) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Saldo insufficiente per effettuare la chiamata.");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class userTim implements Smartphone {
  carica: number;
  numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = 0.8 * minutiDurata;
    if (this.carica >= costoChiamata) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Saldo insufficiente per effettuare la chiamata.");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class userWind implements Smartphone {
  carica: number;
  numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    //wind quando si rubava 1 euro dalla ricarica da 10 e 5 euro :) poi li hanno multati
    if (unaRicarica === 10 || unaRicarica === 5) {
      this.carica += --unaRicarica;
    } else {
      this.carica += unaRicarica;
    }
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = 0.5 * minutiDurata;
    if (this.carica >= costoChiamata) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Saldo insufficiente per effettuare la chiamata.");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const firstUser = new userIliad();
const secondUser = new userTim();
const thirdUser = new userWind();

firstUser.ricarica(10);
firstUser.chiamata(5);
console.log(`utente Iliad`);
console.log("Saldo residuo: " + firstUser.numero404());
console.log("Numero di chiamate effettuate: " + firstUser.getNumeroChiamate());

secondUser.ricarica(5);
secondUser.chiamata(3);
console.log(`utente Tim`);
console.log("Saldo residuo: " + secondUser.numero404());
console.log("Numero di chiamate effettuate: " + secondUser.getNumeroChiamate());

thirdUser.ricarica(10);
thirdUser.chiamata(1);
console.log(`utente Wind`);
console.log("Saldo residuo: " + thirdUser.numero404());
console.log("Numero di chiamate effettuate: " + thirdUser.getNumeroChiamate());
