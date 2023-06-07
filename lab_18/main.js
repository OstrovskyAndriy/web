function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
      console.log("String starts with uppercase character");
    } else {
      console.log("String does not start with uppercase character");
    }
  }
  upperCase('regexp'); // String does not start with uppercase character
upperCase('RegExp'); // String starts with uppercase character


function swapStrings(str) {
    const regex = /(\w+)\s+(\w+)/;
    const swappedStr = str.replace(regex, '$2, $1');
    return swappedStr;
  }
  const inputStr = 'Java Script';
  const outputStr = swapStrings(inputStr);
  console.log(outputStr); // Output: "Script, Java"

  
  function validateCreditCardNumber(cardNumber) {
    const regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    return regex.test(cardNumber);
  }
  const cardNumber1 = '1234-5678-9012-3456';
  console.log(validateCreditCardNumber(cardNumber1)); // Output: true
  
  const cardNumber2 = '9999-9999-9999';
  console.log(validateCreditCardNumber(cardNumber2)); // Output: false

  
  function checkEmail(email) {
    const regex = /^[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    if (regex.test(email)) {
      console.log('Email is correct!');
    } else {
      console.log('Email is not correct!');
    }
  }
  checkEmail('my_mail@gmail.com'); // Output: Email is correct!
  checkEmail('#my_mail@gmail.com'); // Output: Email is not correct!
  checkEmail('my_ma-il@gmail.com'); // Output: Email is  correct!
  checkEmail('my_ma--il@gmail.com'); // Output: Email is not correct!

    
  function checkLogin(login) {
    const regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    const numbers = login.match(/[0-9]+(\.[0-9]+)?/g);
    
    if (regex.test(login)) {
      console.log('true');
      if (numbers) {
        console.log(numbers.join(', '));
      }
    } else {
      console.log('false');
      if (numbers) {
        console.log(numbers.join(', '));
      }
    }
  }
  checkLogin('ee1.1ret3');
  // Output:
  // true
  // 1.1, 3
  
  checkLogin('ee1*1ret3');
  // Output:
  // false
  // 1, 1, 3
    
  