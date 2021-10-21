// >, <, >=, <=, ==, ===, !=, !==   -  операторы сравнения

let value;

value = 1 > 2;
value = 2 <= 2;
value = 1 == 1;
value = 1 == '1';  // не строгое равенство(==) не проверяет на тип данных и автоматически преобразует значение в число
value = 1 === '1';  // другая ситуация, т.к. типы данных у них разные
value = 1 != '1';  // оператор неравенства не обращ внимание на типы
value = 1 !== '1';  // строгое неравенство, учитывает типы
value = 'a' > 'a';
value = 'a' > 'ab';
// чтобы посмотреть к какому юникоду относится какой символ:
value = 'a'.charCodeAt();
value = 'A'.charCodeAt();

// console.log(value);

// /* if (условие) {
//     пишется код, котор выполнится если условие будет правдивым
    
//     action

// } else {
//     если это условие не выполнится, то сработает конструкция else ( не обязательна)

//     else action
// }
// */
// if (условие/выражение/переменная/вычисления) {
//     //action   если здесь будет "true" то действие выполнится, если нет - выполнится "else"
// } else {
//     // else action
// }

value = 10;

/*if (value !== 10) {  // старайся делать строгое сравнение
    console.log('value === 10');
} else {
    console.log('else');
}*/

// Логические операторы:
// || (или), && (и), ! (логическое не)

// value = null;  // null в булевом значении это 'false'

// console.log(!value);  // а '!' преобразует в противоположное будлево значение от текущего

// if (value === null) {
//     console.log(value);
// }

// value = [1]; // даже пустой массив == 'true'
 
// if (value.length) {
//     console.log(value);
// } else {
//     console.log('array is empty');
// }
 // проверка что массив является массивом
//  value = null;
//  if (Array.isArray(value)) {
//      console.log(value);
//  } else {
//      console.log('array is empty');
//  }

let user = {
    name: 'Alex'
};

if (user.hasOwnProperty('name')) { // hasOwnProperty этот метод возвращает true/false, принимает имя ключа обьекта и говорит есть или нет. Но он не проверяет  значение этого свойства
    console.log(user.name);
} else {
    console.log('else');
}