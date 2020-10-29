import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Flux', 'web design', 250);
// docTwo = new Payment('Futur', 'front end implemented', 400);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('The Meow', 'do the chores', 1000000);
// const invTwo = new Invoice('The Doge', 'bark', 999999);
// let invoices: Invoice[] = [];
// invoices.push(new Invoice('The Dogo', 'best friend', 1111));
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((el) => {
//   console.log(el.details, el.amount, el.format());
// });
const form = document.querySelector('.new-item-form');
//console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template intance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber
    ];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
