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

    function checkTarget(year, month) {
      let someDate = new Date(year, month, null);

      let dayName = someDate.getDate();
      let dayNumber = someDate.getDay();

      console.log(someDate, dayName, dayNumber);

      if (dayName === 5 && dayNumber === 13) {
        return true;
      } else {
        return false;
      }
    }

    console.log(checkTarget(1993));

    function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }
  });
})();
