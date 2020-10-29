export class Invoice {
    // only class can access property
    // private client: string;
    // can read but can't write
    // readonly details: string;
    // public amount: number;
    // constructor(client: string, details: string, amount: number) {
    //   this.client = client;
    //   this.details = details;
    //   this.amount = amount;
    // }
    constructor(
    // must have modifier
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} has ${this.amount}€ for ${this.details}`;
    }
}
