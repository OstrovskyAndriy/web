function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Вхідні параметри повинні бути числами');
    }
  
    return width * height;
  }

  try {
    const area = calcRectangleArea(10, 5); // Виняток: вхідний параметр не є числом
    console.log(`Площа прямокутника: ${area}`);

    const area2 = calcRectangleArea(10, '5'); // Виняток: вхідний параметр не є числом

  } 
  catch (error) {
    console.log(`Помилка: ${error.message}`);
  }
  

//2
  try {
    var ageStr = prompt("Please enter your age:");
    if (!ageStr) {
      throw new Error("The field is empty! Please enter your age.");
    }
    var age = parseInt(ageStr);
    if (isNaN(age)) {
      throw new Error("Invalid age! Please enter a valid number.");
    }
    if (age < 14) {
      throw new Error("Sorry, you are not old enough to watch this movie.");
    }
    alert("You may proceed to watch the movie.");
  } catch (err) {
    alert("Error: " + err.message);
  }



//3
  function showUser(id) {
    if (id < 0) {
      throw new Error("ID must not be negative: " + id);
    }
    return { id: id };
  }
  
  function showUsers(ids) {
    var result = [];
    try {
      for (var i = 0; i < ids.length; i++) {
        result.push(showUser(ids[i]));
      }
    } catch (error) {
      console.error(error);
    }
    return result;
  }
  
  console.log(showUsers([7, 12, 44, 22]));
  console.log(showUsers([7, -12, 44, 22]));

  //4
  class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = 'MonthException';
    }
  }
  
  function showMonthName(month) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    if (month < 1 || month > 12 || isNaN(month)) {
      throw new MonthException('Incorrect month number');
    }
  
    return months[month - 1];
  }
  
  try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
  } 
  catch (e) {
    if (e instanceof MonthException) {
      console.log(`${e.name} ${e.message}`);
    } else {
      console.log('Some other error occurred:', e.message);
    }
  }
  
  