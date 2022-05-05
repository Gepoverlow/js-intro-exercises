/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  function logFizzBuzz() {
    for (let i = 0; i <= 100; i++) {
      if (checkMultipleThree(i) && checkMultipleFive(i)) {
        console.log(`${i} - Fizz & Buzz`);
      } else if (checkMultipleFive(i)) {
        console.log(`${i} - Buzz`);
      } else if (checkMultipleThree(i)) {
        console.log(`${i} - Fizz`);
      } else {
        console.log(`${i} - FizzBuzz`);
      }
    }
  }

  function checkMultipleThree(number) {
    if (number % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function checkMultipleFive(number) {
    if (number % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }

  logFizzBuzz();
})();
