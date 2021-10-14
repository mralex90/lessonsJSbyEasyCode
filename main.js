/*типы данных:
* 1. Примитивные
* - Number: 2021, 1.5, NaN, Infinity
* - String: 'Hello', "hello", `hello`
* - Boolean: true, false
* - Null: null
* - Undefined: undefined,
* - Symbol()
*/

// NUMBER
console.log(2021, 1.5);
console.log(20 * 'asdfdsss');
console.log(1 / 0);

// STRING
console.log('Hello', "Hello", `Hello`);

// BOOLEAN
console.log(true, false);

// NULL
console.log(null);

// UNDEFINED
console.log(undefined);

//SYMBOL
console.log(Symbol());

/**
 * Типы данных:
 * 2. Обьекты. (reference type) Передаются по ссылке.
 * - Object: { name: 'Alex', age: 30 }
 *   * Array: [1, 2, 3]
 *   * Function: function foo() {}
 *   * Date: new Date()
 *  ....
 */
console.table({ name: 'Alex', age: 30 });
console.log([1, 2, 3, 4]);

/**
 * Особенности:
 * 1. JS динамически типизированный язык
 * 2. Одна и та же переменная может храниить в себе любой тип данных
 * 3. Нам не нужно определять тип данных при создании переменных
 * 4. Если мы хотим использовать статическую типизацию мы можем использовать Typescript или Flow
 */