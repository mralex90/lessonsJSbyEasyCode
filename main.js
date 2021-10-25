function sayHello(firstName, lastName) {
    console.log(firstName, lastName);
    console.log("Hello World");
    return `Hello ${firstName} ${lastName}`;
}
 let res = sayHello("Oleks", "Bondarenko");
 let res2 = sayHello("Aleksandr", "Bondarenko") + "!";
 console.log(res2);