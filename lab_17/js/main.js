// Завдання 1 - створення нового вікна розміром 300x300 пікселів
var newWindow = window.open('', '', 'width=300,height=300');

// Завдання 2 - зміна розмірів вікна на 500x500 пікселів з затримкою 2 секунди
setTimeout(function() {
  newWindow.resizeTo(500, 500);
}, 2000);

// Завдання 3 - переміщення вікна в точку з координатами (200, 200) з затримкою 2 секунди
setTimeout(function() {
  newWindow.moveTo(200, 200);
}, 4000);

// Завдання 4 - закриття вікна з затримкою 2 секунди
setTimeout(function() {
  newWindow.close();
}, 6000);


function changeCSS() {
    var paragraph = document.getElementById('text');
    paragraph.style.color = 'orange';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Comic Sans MS';
  }
  
  // Додаємо обробник події до кнопки
  var button = document.querySelector('button');
  button.addEventListener('click', changeCSS);

  
  function removeSelectedOption() {
    var dropdown = document.getElementById('dropdown');
    var selectedOption = dropdown.options[dropdown.selectedIndex];
    dropdown.removeChild(selectedOption);
  }


  function showPressedMessage() {
    console.log("I was pressed!");
  }

  function showMouseOnMessage() {
    console.log("Mouse on me!");
  }

  function showMouseNotOnMessage() {
    console.log("Mouse is not on me!");
  }

  window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
  });


  var citiesByCountry = {
    ger: ["Berlin", "Munich", "Hamburg"],
    usa: ["New York", "Los Angeles", "Chicago"],
    ukr: ["Kyiv", "Lviv", "Odessa"]
  };

  function populateCities() {
    var countrySelect = document.getElementById("country");
    var citiesSelect = document.getElementById("cities");
    var selectedCountry = countrySelect.value;

    // Очищення списку міст перед додаванням нових
    citiesSelect.innerHTML = "";

    // Додавання нових елементів у список міст відповідно до вибраної країни
    for (var i = 0; i < citiesByCountry[selectedCountry].length; i++) {
      var option = document.createElement("option");
      option.text = citiesByCountry[selectedCountry][i];
      citiesSelect.add(option);
    }

    // Виведення назви обраної країни та міста
    var selectedCountryName = countrySelect.options[countrySelect.selectedIndex].text;
    var selectedCity = citiesSelect.value;
    var selectedText = "Selected Country: " + selectedCountryName + ", Selected City: " + selectedCity;
    document.getElementById("selected").textContent = selectedText;
  }
