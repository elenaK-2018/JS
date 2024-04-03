// Тема 1

// Задание 1
let boss;
const name = "Elena";

boss = "Elena";

alert(`Добрый день ${boss}`);

// Задание 2

let result1 = "" + 2 + 0;
let result2 = "" - 2 + 0;
let result3 = "4" > "22";
let result4 = 4 + 7 + "px";
let result5 = "3px" - 5;
let result6 = "30px" + "50px";
let result7 = "50px" - "30px";

console.log(result1);  // 20, т.к. один из операндов является строкой, то результат будет строкой, числа сконкатенируются.
console.log(result2);  // -2, т.к. бинарный минус преобразует операнды в числа, результат - сложение чисел.
console.log(result3);  // true, первый символ первой строки больше первого символа второй строки.
console.log(result4);  // 11px,  результат сложения чисел и конкатенации со строкой.
console.log(result5);  // NaN, не число, т.к. '30px' не преобразуется в число.
console.log(result6);  // 30px50px, получили конкатенацию строк.
console.log(result7);  // NaN, т.к для бинарного вычитания операнды не преобразовались в числа.
