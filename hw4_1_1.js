//функция Констуктор в стиле ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

//создаем прототип в стиле es5 у которого есть свойство конструктора ("поведение объекта") в виде метода(функции) подсчитывающей скидку
Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price * 25 / 100);
};

//создаем 2 объекта
const prod1 = new Product('T-shirt', 10);
const prod2 = new Product('Shorts', 15);

prod1.make25PercentDiscount();
prod2.make25PercentDiscount();

console.log(prod1);
console.log(prod2);

//функция-конструктор и ее прототип в стиле ES6
class Product2 {
    constructor(name2, price2) {
        this.name2 = name2;
        this.price2 = price2;
    }

    make25PercentDiscount() {
        this.price2 = this.price2 - (this.price2 * 25 / 100);
    }
}

//создаем конкретные объекты с помощью функции-конструктор и передаем ей параметры
let prod3 = new Product2('Jacket', '100');
let prod4 = new Product2('Pants', '130');

//вызываем метод для подсчета скидки у объектов
prod3.make25PercentDiscount();
prod4.make25PercentDiscount();

console.log(prod3);
console.log(prod4);

/*
//объявляем массив в котором создаются 3 объекта
const products = [
    new Product('Jacket', 100),
    new Product('Pants', 130),
    new Product('Hat', 50)
];

for (let i = 0; i < products.length; i++) {
    products.make25PercentDiscount();
}

console.log(products);
*/
