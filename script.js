const userName = "Andrew "; // взять в скобки "" будет означать тип данных строк
let age = 29; // просто ввести число тип данный числовой 
let boo = true; // ти данный правда или ложь

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav_link");

console.log(typeof userName, typeof age, typeof boo); //вывести в консоль тип данных ( строки, число, правда или ложь )
// проверка для гитхаба
// еще одна проверка на изменения строки 
// доп проверка 

console.log(typeof header);
console.log(navLinks);

function sayHello() { //создаем функцию 
    let message = "Hello JS"; //создаем переменную с текстом (тип строки)
    console.log(message); //выводим в конслоль переменную 
}
/* если вывести в консоль переменную message то вылетит ошибка так как функция у нас локальная и log должен быть 
внутри этой функции  */

sayHello();

function plusUserName() { 
    let message = "Hello " + userName; 
    console.log(message); 
}

plusUserName();

function simpleMath() {
    let result = 1 + 2;
    console.log(result);
}

simpleMath();