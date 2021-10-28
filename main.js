function getThis() {
    console.log(this);
}
// this и контект вызова определяются непоссредственно  при вызове функции
// getThis();
// window.getThis();
// console.log(window.getThis);
// также можно использовать ф-ии в качестве методов
// метод - когда ф-ия передана в качестве свойства в обьекте

// создаем обьект prod1, у него будет несколько полей, и мы можем обьявить ф-ию в качестве метода (getPrice)
// ее можно обьявить несколькими способами: 1 = написав ключ getPrice, дальше передав сюда ф-ию, кот внутри себя может получить доступ к this 

function getPrice() {
    console.log(this.price);
    return this;
}

function getName(){
    console.log(this.name);
    return this;
}

const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice,
    getName() {
        console.log(this.name);
    },
    info: {
        information: ['2.3ghz'],
        getInfo: function() {
            console.log(this);
        },
    },
};
// prod1.getPrice(); 
// такую ф-ию можем вызвать записью, и т.к. ф-ия была вызвана в контексте обьекта, то и в консоле увидим наш обьект
// в итоге вызвав ф-ию в качестве метода обьекта, внутри этой ф-ии this  будет указываать на этот обьект
// чтобы запомнить === this  будет равен тому что находится перед самой правой точкой, в данном случае "prod1"
// если сделаем вложенный обьект (info), в нем еще свойство (information) и можем сделать (getInfo) в кот записать ф-ию, то вызват ее увидим, что 'this' в нутриэтой ф-ии будет указывать на обьект 'info' 

//  

// таким образом мы видим зависимость от тго где была обьявлена ф-ия, будет менятся наш 'this' и непосредственно контекст вызова

// контекст вызова опрееделяется непосредственно при вызове ф-ии и при этом не важно где и как была определена ф-ия


const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice,
};

prod2.getName = prod1.getName;
// prod2.getPrice();
 // вызывается та же ф-ия, но за счет разных контекстов мы имеем доступ к разным обьектам тем самым делая эту ф-ию универсальной с ненадобностью ее повторять

// prod2.getName();


// =========== вызовов методов цепочки  ==========

let str = 'Hello world';
const reversStr = str
    .split('')  // ['H', 'e' ...]
    .reverse() // ['d', 'l', 'r', 'o' ...]
    .join(''); // 'dlrow olleH'
// console.log(reversStr); // получаем перевертыш
// строка была разбита на массив (.split), была перевернута (.reverse) и была обратно склеена в строку (.join)
 

const prod3 = {
    name: 'ARM',
    price: 200,
    getPrice,
    getName,
};

prod3
    .getName() // undefined /// prod3 
    .getPrice(); // undefined.getPrice() /// prod3.getPrice
// чтобы вызов произошел - каждая ф-ия(getPrice, getName) должна вернуть this
// тогда результат вызова getName будет обьект 'prod3' и у этого обьекта есть метод getPrice

// но это будет работать в том случае если у обьекта кот возвращает предидущий метод есть следующий метод который мы вызываем
// таким образом мы можем построить цепочки методов 




// ========= потеря контекста / возм-ть вызывать ф-ию с определенным контекстом 