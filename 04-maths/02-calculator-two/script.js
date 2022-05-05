/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  function performOperation(operation) {
    let operandOne = parseInt(document.getElementById("op-one").value);
    let operandTwo = parseInt(document.getElementById("op-two").value);

    console.log(operation, operandOne, operandTwo);

    switch (operation) {
      case "addition":
        add(operandOne, operandTwo);
        break;
      case "substraction":
        substract(operandOne, operandTwo);
        break;
      case "multiplication":
        multiply(operandOne, operandTwo);
        break;
      case "division":
        divide(operandOne, operandTwo);
        break;
    }
  }

  function add(x, y) {
    if (validateInput(x, y)) {
      alert(x + y);
    } else {
      alert("Input cant be empty and Input should be a number!");
    }
  }
  function substract(x, y) {
    if (validateInput(x, y)) {
      alert(x - y);
    } else {
      alert("Input cant be empty and Input should be a number!");
    }
  }
  function multiply(x, y) {
    if (validateInput(x, y)) {
      alert(x * y);
    } else {
      alert("Input cant be empty and Input should be a number!");
    }
  }
  function divide(x, y) {
    if (y !== 0 && validateInput(x, y)) {
      alert(x / y);
    } else {
      alert("You cant divide by 0!");
    }
  }

  function validateInput(x, y) {
    if (x !== "" && !isNaN(x) && y !== "" && !isNaN(y)) {
      return true;
    } else {
      return false;
    }
  }

  Array.from(document.querySelectorAll("button.operator")).forEach(function (
    $btn
  ) {
    $btn.addEventListener("click", function () {
      performOperation($btn.id);
    });
  });
})();
