let a = 1;
let b = 0;

// if (a > 0) {
//     b = a;
// } else {
//     b += 1;
// }

// синтаксис: выражение ? если true : если false;

b = a > 0 ? b = a : b += 1;

console.log(`b: ${b}`);