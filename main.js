let value;

// Number to string
value = String(10);
value = String(10+40);
value = (40).toString();

//Boolean to string
value = String(false);

// Array to string
value = String([1, 2, 3]);

// Object to string
value = String({ name: 'Alex'});

// Concatination
value = 30 + '' + 30;
value = 30 - 'asdsda';
value = 30 - '5';
value = true + 10;

// String to number
value = Number('23');
value = Number(false);
value = Number(true);
value = Number(null);
value = Number('false');
value = Number([1, 2, 3]);

value = parseInt('200px');
value = parseFloat('200.212px');

// Boolean
value = Boolean('hello');
value = Boolean('');
value = Boolean(-100);
value = Boolean(0);
value = Boolean(undefined);
value = Boolean(null);
value = Boolean({});
value = Boolean([]);

console.log(value);
console.log(typeof value);