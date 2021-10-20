const user = {
    firstName: 'Alex',
    age: 30,
    isAdmin: true,
    email: 'test@test.com',
    'user-address': {  // '' нужны для написания специфических символов или написание через дефис имен/свойств 
        city: 'Kharkiv'
    },
    skills: ['html', 'css', 'js']
};
 
// чтобы обратиться к свойствам обьекта есть два способа
// 1й способ: обратиться через точку
let value;
let prop = 'email';

value = user.firstName;
// 2й способ: обратиться через [ ]
value = user['isAdmin']; // используется для специфичных ключей ('user-address'), т.к. через точку их получить не получиться
value = user['user-address'];
// чтобы получить вложеные свойства в обьект мы можем продолжить эту цепочку
value = user['user-address'].city;  // либо через точку
value = user['user-address']['city'];  // либо через квадратные скобки
value = user[prop];

console.log(value);
console.log(user);