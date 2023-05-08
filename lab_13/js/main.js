    // 1. Створення порожнього масиву
let myArray = [];

// 2. Додавання елементів до масиву
myArray[0] = 10;
myArray[1] = "Some string";
myArray[2] = true;
myArray[3] = null;

// 3. Виведення кількості елементів масиву
console.log("Кількість елементів у масиві: " + myArray.length);

// 4. Запит значення від користувача та додавання до масиву
let userValue = prompt("Введіть будь-яке значення:");
myArray[4] = userValue;

// 5. Виведення п'ятого елемента масиву
console.log("П'ятий елемент масиву: " + myArray[4]);

// 6. Видалення першого елемента масиву та виведення масиву на екран
myArray.shift();
console.log("Масив після видалення першого елемента: " + myArray);

let cities = ["Ternopil", "Lviv", "Warsaw"];
let joinedString = cities.join("*");
console.log(joinedString);

let arr = [2, 3, 4, 5];
let product = 1;

for (let i = 0; i < arr.length; i++) {
  product *= arr[i];
}

console.log("for "+product);

 arr = [2, 3, 4, 5];
 product = 1;
let i = 0;

while (i < arr.length) {
  product *= arr[i];
  i++;
}

console.log("while "+product);

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " - парне число");
    } else {
      console.log(i + " - непарне число");
    }
  }

  
  function randArray(k) {
    var arr = [];
    for (var i = 0; i < k; i++) {
      arr.push(Math.floor(Math.random() * 500) + 1);
    }
    return arr;
  }
  var arr2 = randArray(10);
  console.log(arr2);
    

  function raiseToDegree(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return Math.pow(a, b);
    } else {
      return "Введені числа повинні бути цілими!";
    }
  }
  let a = parseInt(prompt("Введіть ціле число a:"));
  let b = parseInt(prompt("Введіть ціле число b:"));
  
  console.log("a^b= "+raiseToDegree(a, b));


  function findMin() {
    let min = arguments[0]; // ініціалізуємо мінімальне значення першим аргументом
    for (let i = 1; i < arguments.length; i++) { // починаємо з другого аргумента
      if (arguments[i] < min) { // порівнюємо з мінімальним значенням
        min = arguments[i]; // оновлюємо мінімальне значення
      }
    }
    return min;
  }

  console.log("min = "+findMin(2,3,4,0,-1.2));


  function findUnique(arr) {
    // Створюємо об'єкт unique для збереження унікальних значень
    var unique = {};
  
    for (var i = 0; i < arr.length; i++) {
    // Якщо значення елемента вже існує в об'єкті, то воно дублюється

        if (unique[arr[i]]) { // Повертаємо false, якщо знайдений дубль
        return false;
        }
  
      unique[arr[i]] = true;
    }
    // Якщо досягнуто кінця масиву і дублів не було знайдено, то всі елементи унікальні

    return true;
  }
  

  console.log("is unique = "+findUnique(arr2));



  function lastElem(arr, num) {
    // Якщо другий параметр не заданий або більший за довжину масиву, повертаємо весь масив
    if (!num || num > arr.length) {
      return arr;
    }
    // Якщо другий параметр менший або дорівнює довжині масиву, повертаємо num останніх елементів
    return arr.slice(-num);
  }

console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

    