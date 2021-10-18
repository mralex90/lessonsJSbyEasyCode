const firstName = 'Alex';
const lastName = 'Bond';
const age = 30;

let str;

str = 'Hello my name is ' + firstName + ' ' + lastName;

str = '<ul>' +
    '<li>First name: ' + firstName + '</li>' +
    '<li>Last name: ' + lastName + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '</ul>';

// console.log(str);

document.body.innerHTML = str;