import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
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
    private client: string,
    readonly details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} has ${this.amount}€ for ${this.details}`;
  }
}
