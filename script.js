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

function simpleMath(a, b) {
    let result = a + b;
    console.log(result);
}

simpleMath(111, 242);


function simpleMath1(a, b) {
    let result = a + b;
    return(result); //
}

let sum = simpleMath1(111, 242); //создаем переменную для функции 

console.log(sum); //выводим переменнуб в которой находиться наша функция 



window.addEventListener("scroll", function() {
    console.log("scroll"); //выводим сообщение чтобы убедиться что функция работает
    let scrollPos = window.scrollY;   //or pageYOffset

    if(scrollPos > 0) {
        header.classList.add('red');
    } else {
        header.classList.remove('red');
    }

    console.log(scrollPos); //выводим позицию в консоле для проверки 
    //header.classList.add('red'); //к классу хедер добавляем класс ред при скролле (скорее всего заменяет класс)
    //взяд в комментарий чтобы остался пример но не выполнялася часть функции 
    
});