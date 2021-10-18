const firstName = 'Alex';
const lastName = 'Bond';
const age = 30;
const str = 'Hello my name is Alex';

let value;
value = firstName + lastName;  // конкатенация - сложение строк
value = firstName + ' ' + lastName;
// value = value + ' I am ' + age;
value += ' I am ' + age;

value = firstName.length;
value = firstName[2];
value = firstName[4];
value = lastName[lastName.length - 1];

console.log(value);