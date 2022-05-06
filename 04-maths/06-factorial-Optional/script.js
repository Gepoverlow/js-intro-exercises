/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("run").addEventListener("click", function () {
    let inputNumber = document.getElementById("number").value;

    // your code here

    function calculateFactorial(number) {
      let current = 1;

      if (number == 0 || number == 1) {
        alert(`The factorial of ${number} is ${current}`);
      } else {
        for (let i = number; i >= 1; i--) {
          current = current * i;
        }
        alert(`The factorial of ${number} is ${current}`);
      }
    }

    calculateFactorial(inputNumber);
  });
})();
