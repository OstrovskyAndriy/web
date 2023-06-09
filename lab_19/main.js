// JavaScript код з використанням jQuery
$(document).ready(function() {
    $('a[href^="https://"]').attr('target', '_blank');
  });

  
  // JavaScript код з використанням jQuery
$(document).ready(function() {
    $('h2.head').css('background-color', 'green');
    $('h2.head .inner').css('font-size', '35px');
  });
  

  $(document).ready(function() {
    // Знаходимо всі <div>-елементи, які стоять безпосередньо після <h3> і переміщуємо їх перед <h3>
    $('h3').each(function() {
      $(this).prev('div').insertBefore($(this));
    });
  });


  $(document).ready(function() {
    $('input[type="checkbox"]').change(function() {
      // Перевірка кількості позначених чекбоксів
      var checkedCount = $('input[type="checkbox"]:checked').length;
      
      // Якщо кількість позначених чекбоксів становить 3 або більше
      if (checkedCount >= 3) {
        // Забороняємо всі чекбокси
        $('input[type="checkbox"]').prop('disabled', true);
      }
    });
  });
  