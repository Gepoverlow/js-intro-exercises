/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const button = document.getElementById("run");
  const numbers = document.querySelectorAll(".number");

  const smallest = document.getElementById("min");
  const biggest = document.getElementById("max");
  const total = document.getElementById("sum");
  const average = document.getElementById("average");

  button.addEventListener("click", () => {
    let numbersArray = [];

    for (let i = 0; i < numbers.length; i++) {
      numbersArray.push(generateNumber());
      numbers[i].textContent = numbersArray[i];
    }

    smallest.textContent = findSmallest(numbersArray);
    biggest.textContent = findBiggest(numbersArray);
    total.textContent = sumAll(numbersArray);
    average.textContent = calcAverage(numbersArray);
  });

  function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function findSmallest(arr) {
    const min = arr.reduce((a, b) => Math.min(a, b));
    return min;
  }

  function findBiggest(arr) {
    const max = arr.reduce((a, b) => Math.max(a, b));
    return max;
  }
  function sumAll(arr) {
    const total = arr.reduce((a, b) => a + b);
    return total;
  }
  function calcAverage(arr) {
    const total = arr.reduce((a, b) => a + b);
    const average = total / arr.length;
    return average;
  }
})();
