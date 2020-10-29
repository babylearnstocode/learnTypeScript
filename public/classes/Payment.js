export class Payment {
    constructor(bill, details, amount) {
        this.bill = bill;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.bill} is owed ${this.amount}€ for ${this.details}`;
    }
}
