// Тема 1

// Задание 1
let boss;
const name = 'Elena';

boss = name;

// alert(`Добрый день ${boss}`);

// Задание 2

let result1 = "" + 2 + 0;
let result2 = "" - 2 + 0;
let result3 = "4" > "22";
let result4 = 4 + 7 + "px";
let result5 = "3px" - 5;
let result6 = "30px" + "50px";
let result7 = "50px" - "30px";

console.log(result1); // 20, т.к. один из операндов является строкой, то результат будет строкой, числа сконкатенируются.
console.log(result2); // -2, т.к. бинарный минус преобразует операнды в числа, результат - сложение чисел.
console.log(result3); // true, первый символ первой строки больше первого символа второй строки.
console.log(result4); // 11px,  результат сложения чисел и конкатенации со строкой.
console.log(result5); // NaN, не число, т.к. '30px' не преобразуется в число.
console.log(result6); // 30px50px, получили конкатенацию строк.
console.log(result7); // NaN, т.к для бинарного вычитания операнды не преобразовались в числа.


console.log("____________________________________________");
// Тема 2

// Задание 1

function showMessage() {
    const firstName = prompt('Напишите ваше имя?');
    const age = prompt('Напишите ваш возраст?');

    if (age < 20) {
        alert(`Привет, ${firstName}!`);
    } else if (age >= 20 && age < 45) {
        alert(`Здравствуй, ${firstName}!`);
    } else {
        alert(`Здравствуйте, ${firstName}!`);
    }
}

// showMessage();

// Задание 2

let students = [];

for (let i = 0; i <= students.length; i++) {
    const studentName = prompt('Имя студента');

    if (studentName === null) {
        alert(students.join(', ') + '.');
        break;
    } else {
        students.push(studentName);
    }
}

// Задание 3 

function checkCart(products, price, promo) {
    let finalAmount = price;

    if (products > 10 && products <= 20) {
        finalAmount = price - price * 0.05;
    } else if (products > 20) {
        finalAmount = price - price * 0.1;
    } 

    if (products > 10000) {
        finalAmount = price - 1000;
    } 
    
    if (promo.toLowerCase() === 'methed') {
        finalAmount = finalAmount - finalAmount* 0.15;
    }

    return finalAmount;
}

console.log(checkCart(25, 2000, 'MeThEd'));





