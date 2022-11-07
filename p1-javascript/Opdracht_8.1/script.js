function Plus() {
  var field1 = document.getElementById('num1').value;
  var field2 = document.getElementById('num2').value;

  var result = parseFloat(field1) + parseFloat(field2);
  if (!isNaN(result))

  {
      document.getElementById("TextChange").textContent= "Het antwoord is: " + result;
      document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
  }
}



function Minus() {
  var field1 = document.getElementById('num1').value;
  var field2 = document.getElementById('num2').value;

  var result = parseFloat(field1) - parseFloat(field2);
  if (!isNaN(result))

  {
      document.getElementById("TextChange").textContent= "Het antwoord is: " + result;
      document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
  }
}

function Multiply() {
  var field1 = document.getElementById('num1').value;
  var field2 = document.getElementById('num2').value;

  var result = parseFloat(field1) * parseFloat(field2);
  if (!isNaN(result))

  {
      document.getElementById("TextChange").textContent= "Het antwoord is: " + result;
      document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
  }
}




function Divide() {
  var field1 = document.getElementById('num1').value;
  var field2 = document.getElementById('num2').value;

  var result = parseFloat(field1) / parseFloat(field2);
  if (!isNaN(result))

  {
      document.getElementById("TextChange").textContent= "Het antwoord is: " + result;
      document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
  }
}