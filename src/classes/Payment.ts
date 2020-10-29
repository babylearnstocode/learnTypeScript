import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  constructor(
    readonly bill: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.bill} is owed ${this.amount}€ for ${this.details}`;
  }
}
