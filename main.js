// //  в Javascript функции расцениваются как обьекты 
// function foo() {
//     console.log('Hello world');
// }
// foo();
// foo.field = 'Aleks';
// console.log(foo.field);
// // помимо этого ф-иям могут быть переданы в качестве параметров другие ф-ии, могут быть присвоены переменные и т.д.
// // поэтому ф-ии в джс называются ф-иями первого класса
// /* ф-ии высшего порядка - ф-ии которые принимают в качестве параметров другие ф-ии или возвращают ф-ии */

// метод MAP - возвращает новый массив состоящий из результатов вызова ф-ии колбэка, кот была передана, в качестве параметра. это нужно для сокращения кода

// const arr = ['Aleks', 'Ivan', 'Maks', 'Olga'];
// // => [5, 4, 4, 4];
// let newArr = [];

// for (let i = 0; i < arr.length; i ++) {
//     newArr.push(arr[i].length);
// }

// console.log(newArr); // получаем новый массив состоящий из длинны каждого элемента массива "arr"

// // пример. чтобы получить массив всех элементов имен, но чтобы каждый элемент был в верхнем регистре:
// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);

//  переписываем это все на функцию высшего порядка
// получение длинны:

const names = ['Aleks', 'Ivan', 'Maks', 'Olga'];

function mapArray(arr, fn) {  // ф-ия будет принимать два параметра (массив и эту функцию)
    const res = [];// внутри себя она будет создавать новый массив
    for (let i = 0; i < arr.length; i++) {// она будет проходиться по этому переданному массиву, но на каждой итерации она будет пушить в результирующий массив результат вызова переданной ф-ии
    res.push(fn(arr[i])); // в эту ф-ию кот передадим в качестве второго параметра(fn) во внутрь mapArray, мы будем передавать один элемнт массива 
    }
    return res;// и возвращать мы будем результирующий массив
}

function nameLength(el) {
    // console.log(el);
    return el.length;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);
// console.log(result2);

// таким образом мы сокращаем кол-во кода, сокращаем его, делаем более гибким для каждой отдельной задачи с массивом, есть ф-ия обработчик и т.д.
 


// ================ CALLBACK FUNCTION ===============

function greeting(firstName) {
    return function(lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
}
//     первый вариант
// const testGreeting = greeting('Aleks');
// const fullName = testGreeting('Bondarenko');

// второй способ
const fullName = greeting('Alex')('Bondarenko');
// console.log(fullName);

// еще один пример
function question(job) {
    const jobDictionary = {
        developer: 'что такое Javascript?',
        teacher: ' какой предмет вы ведете?'
    };

    return function(name) {
        return `${name}, ${jobDictionary[job]}?`;
    };

    // if (job === 'developer') {
    //     return function (name) {
    //         return `${name}, что такое Javascript?`;
    //     }
    // } else if (job === 'teacher') {
    //     return function (name) {
    //         return `${name}, какой предмет вы ведете?`;
    //     }
    // }
}

const developerQuestion = question('developer');
console.log(developerQuestion('Alex'));
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Alex'));