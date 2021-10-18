const firstName = 'Alex';
const lastName = 'Bond';
const age = 30;
const str = 'Hello my name is Alex';

let value;
value = firstName + lastName;  // конкатенация - сложение строк
value = firstName + ' ' + lastName;
// value = value + ' I am ' + age;
value += ' I am ' + age;

// properties
value = firstName.length;
value = firstName[2];
value = firstName[4];
value = lastName[lastName.length - 1];

// methods
value = firstName.toUpperCase();  // lowerCase - понижает регистр
value = firstName.concat(' ', lastName);  // concat - конкатенация
value = firstName.indexOf('e');  // возвращает индекс первого вхождения данной строки 
value = str.indexOf('my');
// lastIndexOf - тоже самое, только с конца строки
value = str.includes('Alex'); // возвращает булево значение на предмет наличия выражения в строке

value = str.slice(0, 8);  //метод взятия подстроки из строки (вырезать что-то)
value = str.slice(0, -4);  // меняет
value = str.replace('Alex', 'Oleks');

console.log(value);