/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let runButton = document.getElementById("run");

  runButton.addEventListener("click", () => {
    let yearInput = document.getElementById("year").value;

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let result = [];

    function checkMonths(year) {
      for (let i = 0; i <= 12; i++) {
        let date = new Date(year, i, 13);
        if (date.getDay() === 5) {
          result.push(months[i]);
        }
      }

      if (yearInput >= 1970 && yearInput <= 2021 && !isNaN(yearInput)) {
        alert(
          `In the year ${yearInput} there where ${result.length} months in which a Friday the 13th happened: ${result}`
        );
      } else {
        alert(`Year must be a number between 1970 and 2021!`);
      }
    }

    checkMonths(yearInput);
  });
})();
