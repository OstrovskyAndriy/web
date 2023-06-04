// Спосіб 1: За допомогою методу getElementById()
var element = document.getElementById('test');
element.innerHTML = 'Last';

// Спосіб 2: За допомогою методу querySelector()
var element = document.querySelector('#test');
element.innerHTML = 'Last';


// Знаходимо елемент img за допомогою методу querySelector()
var imageElement = document.querySelector('.image');

// Змінюємо атрибут src зображення
imageElement.src = 'dog.jpg';

// Виводимо вміст тегу img у модальному вікні
alert(imageElement.outerHTML);



// Знаходимо всі елементи <p> всередині елемента з id "text"
var paragraphs = document.querySelectorAll('#text p');

// Проходимося по кожному елементу і виводимо його вміст
paragraphs.forEach(function(paragraph, index) {
  var selectorText = 'Selector text ' + index + ':';
  var paragraphText = paragraph.textContent;
  console.log(selectorText, paragraphText);
});



var list = document.getElementById('list');

// Виведення вмісту елементів списку в певній послідовності
var output = list.children[0].textContent + ', '; // Перший елемент списку
output += list.children[list.children.length - 1].textContent + ', '; // Останній елемент списку
output += list.children[1].textContent + ', '; // Другий елемент списку
output += list.children[3].textContent + ', '; // Четвертий елемент списку
output += list.children[2].textContent; // Третій елемент списку

// Виведення результату у модальному вікні
alert(output);


var listItems = document.querySelectorAll('#list li');

// Виведення вмісту елементів списку в певній послідовності
var output = listItems[0].textContent + ', '; // Перший елемент списку
output += listItems[listItems.length - 1].textContent + ', '; // Останній елемент списку
output += listItems[1].textContent + ', '; // Другий елемент списку
output += listItems[3].textContent + ', '; // Четвертий елемент списку
output += listItems[2].textContent; // Третій елемент списку

// Виведення результату у модальному вікні
alert(output);



// Знаходимо елементи за допомогою методу getElementById() або querySelector()
var firstParagraph = document.querySelector('#myDiv p:first-of-type');
var secondParagraph = document.querySelector('#myDiv p:nth-of-type(2)');
var thirdParagraph = document.querySelector('#myDiv p:nth-of-type(3)');
var fourthParagraph = document.querySelector('#myDiv p:nth-of-type(4)');
var listItems = document.querySelectorAll('#myList li');
var spanElement = document.querySelector('span');

// Стилізація першого параграфа
firstParagraph.style.fontWeight = 'bold';
firstParagraph.style.backgroundColor = 'green';

// Стилізація другого параграфа
secondParagraph.style.fontWeight = 'bold';

// Стилізація третього параграфа
thirdParagraph.style.textDecoration = 'underline';

// Стилізація четвертого параграфа
fourthParagraph.style.fontStyle = 'italic';

// Стилізація елементів списку
listItems.forEach(function(item) {
  item.style.display = 'inline';
});

// Стилізація елементу span
spanElement.style.display = 'none';

// Запитати в користувача 2 повідомлення і зберегти їх у змінних
var message1 = prompt("Введіть перше повідомлення:");
var message2 = prompt("Введіть друге повідомлення:");

// Знайти елементи вводу за допомогою методу getElementById()
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

// Змінити значення полів вводу
input1.value = message1;
input2.value = message2;

// Поміняти значення 1-го і 2-го полів вводу місцями
var temp = input1.value;
input1.value = input2.value;
input2.value = temp;


// Створення основних елементів і їх атрибутів
var mainElement = document.createElement('main');
mainElement.className = 'mainClass check item';

var divElement = document.createElement('div');
divElement.id = 'myDiv';

var paragraphElement = document.createElement('p');
paragraphElement.textContent = 'First paragraph';

// Додавання елементів до структури
divElement.appendChild(paragraphElement);
mainElement.appendChild(divElement);

// Додавання основних елементів до тегу <body>
document.body.appendChild(mainElement);
