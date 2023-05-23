class sonAccount {
  nomeSon: string;
  cognomeSon: string;

  balanceInit: number = 0;

  constructor(nome: string, cognome: string) {
    this.nomeSon = nome;
    this.cognomeSon = cognome;
  }

  oneDeposit(versamento: number): string {
    console.log(`saldo iniziale: ${this.balanceInit}$`);
    console.log(`versamento: ${versamento}$`);
    this.balanceInit += versamento;
    return `saldo attuale: ${this.balanceInit}$`;
  }

  oneWithDraw(prelievo: number): string {
    console.log(`Saldo iniziale: ${this.balanceInit}$`);
    console.log(`Prelievo: ${prelievo}$`);
    this.balanceInit -= prelievo;
    return `Saldo attuale: ${this.balanceInit}$`;
  }

  twoDeposit(versamento: number): string {
    console.log(`Saldo iniziale: ${this.balanceInit}$`);
    console.log(`Versamento: ${versamento}$`);
    this.balanceInit += versamento;
    return `Saldo attuale: ${this.balanceInit}$`;
  }

  twoWithDraw(prelievo: number): string {
    console.log(`Saldo iniziale: ${this.balanceInit}$`);
    console.log(`Prelievo: ${prelievo}$`);
    this.balanceInit -= prelievo;
    return `Saldo attuale: ${this.balanceInit}$`;
  }
}

class motherAccount extends sonAccount {
  constructor(nome: string, cognome: string) {
    super(nome, cognome);
  }
  oneDeposit(versamento: number): string {
    console.log(`saldo iniziale: ${this.balanceInit}$`);
    console.log(`versamento: ${versamento}$`);
    this.balanceInit += versamento;
    this.balanceInit += this.balanceInit * 0.1;
    return `Saldo attuale con interessi (10%): ${this.balanceInit}$`;
  }
  twoDeposit(versamento: number): string {
    console.log(`saldo iniziale: ${this.balanceInit}$`);
    console.log(`versamento: ${versamento}$`);
    this.balanceInit += versamento;
    this.balanceInit += this.balanceInit * 0.1;
    return `Saldo attuale con interessi (10%): ${this.balanceInit}$`;
  }
}

const utente1 = new sonAccount(`Mario`, `Rossi`);
console.log(utente1.oneDeposit(500));
console.log(utente1.oneWithDraw(400));
console.log(utente1.twoDeposit(1000));
console.log(utente1.twoWithDraw(800));

const utente2 = new motherAccount(`Giulia`, `Rossi`);
console.log(utente2.oneDeposit(500));
console.log(utente2.oneWithDraw(400));
console.log(utente2.twoDeposit(1000));
console.log(utente2.twoWithDraw(800));
