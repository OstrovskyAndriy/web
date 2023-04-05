let x = 1;
let y = 2;
let res1 = "" + x + y; // Допишіть код (використовувати змінні x і y)
console.log(res1); // "12"
console.log(typeof res1); // "string"
let res2 = true + "" + x + y; // Допишіть код (використовувати змінні x і y)
console.log(res2); // "true2"
console.log(typeof res2); // "string"
let res3 = x < y// Допишіть код (використовувати змінні x і y)
console.log(res3); // true
console.log(typeof res3); // "boolean"
let res4 = x - y / "a"// Допишіть код (використовувати змінні x і y)
console.log(res4); // NaN
console.log(typeof res4); // "number"



if(prompt("Введіть ваш вік")>18){
console.log("Ви досягли повнолітнього віку");
}
else{
    console.log("“Ви ще надто молоді");
}

let a = prompt("a = ");
let b = prompt("c = ");
let c = prompt("b = ");

if (a <=0 || b <=0 | c <=0) {
    console.log("incorrect data");
}

else {
    console.log("S abc = ", (a * b * c).toFixed(3));

    if (c * c === a * a + b * b) {
        console.log("Прямокутний");
    }
    else {
        console.log("Не прямокутний");
    }
}

let time = new Date().getHours();
let greeting = "";

switch (true) {
  case time >= 23 || time < 5:
    greeting = "Доброї ночі";
    break;
  case time >= 5 && time < 11:
    greeting = "Доброго ранку";
    break;
  case time >= 11 && time < 17:
    greeting = "Доброго дня";
    break;
  default:
    greeting = "Доброго вечора";
}

console.log(greeting);
