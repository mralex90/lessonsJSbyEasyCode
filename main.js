function sayHello(firstName = "Default", lastName = "Default") {
    console.log(firstName, lastName);
    console.log("Hello World");
    return `Hello ${firstName} ${lastName}`;
}
//  let res = sayHello("Oleks", "Bondarenko");
//  let res2 = sayHello("Aleksandr", "Bondarenko") + "!";
 let res3 = sayHello(null);
 console.log(res3);