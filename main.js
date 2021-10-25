function sayHello(firstName = "Default", lastName = "Default") {
    console.log(firstName, lastName);
    console.log("Hello World");
    return `Hello ${firstName} ${lastName}`;
}

//  let res = sayHello("Oleks", "Bondarenko");
//  let res2 = sayHello("Aleksandr", "Bondarenko") + "!";
//  let res3 = sayHello(null);
//  console.log(res3);

//области видимости ф-ии

// let x = 10; 

// function foo(x) {
//     x = 20;
//     console.log(x);
//     return x;   
// }

// foo();

// console.log(x);

// const user = {
//     name: 'Oleks',
//     age: 30
// };

// function getObj(obj) {
//     console.log(obj);
//     obj.name = "Aleks";
// }

// getObj(user);

