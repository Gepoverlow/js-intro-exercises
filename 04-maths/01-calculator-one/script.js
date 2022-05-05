/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("add").addEventListener("click", function () {
    let operatorOne = parseInt(document.getElementById("op-one").value);
    let operatorTwo = parseInt(document.getElementById("op-two").value);
    // perform an addition
    if (validateInputs(operatorOne, operatorTwo)) {
      alert(add(operatorOne, operatorTwo));
    } else {
      alert("Empty fields and NaN are not allowed!");
    }
  });

  document.getElementById("sub").addEventListener("click", function () {
    let operatorOne = parseInt(document.getElementById("op-one").value);
    let operatorTwo = parseInt(document.getElementById("op-two").value);
    // perform an addition
    if (validateInputs(operatorOne, operatorTwo)) {
      alert(substract(operatorOne, operatorTwo));
    } else {
      alert("Empty fields and NaN are not allowed!");
    }
    // perform an substraction
  });

  document.getElementById("mul").addEventListener("click", function () {
    let operatorOne = parseInt(document.getElementById("op-one").value);
    let operatorTwo = parseInt(document.getElementById("op-two").value);
    // perform an addition
    if (validateInputs(operatorOne, operatorTwo)) {
      alert(multiply(operatorOne, operatorTwo));
    } else {
      alert("Empty fields and NaN are not allowed!");
    }
    // perform an multiplication
  });

  document.getElementById("div").addEventListener("click", function () {
    let operatorOne = parseInt(document.getElementById("op-one").value);
    let operatorTwo = parseInt(document.getElementById("op-two").value);
    // perform an addition
    if (validateInputs(operatorOne, operatorTwo)) {
      divide(operatorOne, operatorTwo);
    } else {
      alert("Empty fields and NaN are not allowed!");
    }
    // perform an division
  });

  function add(x, y) {
    return x + y;
  }

  function substract(x, y) {
    return x - y;
  }

  function divide(x, y) {
    if (y !== 0) {
      alert(x / y);
    } else {
      alert("You cant divide by 0");
    }
  }

  function multiply(x, y) {
    return x * y;
  }

  function validateInputs(x, y) {
    if (x !== "" && !isNaN(x) && y !== "" && !isNaN(y)) {
      return true;
    } else {
      return false;
    }
  }
})();
