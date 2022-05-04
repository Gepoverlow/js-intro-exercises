/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let button = document.getElementById("run");

  button.addEventListener("click", () => {
    let dayInput = document.getElementById("dob-day").value;
    let monthInput = document.getElementById("dob-month").value;
    let yearInput = document.getElementById("dob-year").value;

    let formattedDate = `${yearInput}-${monthInput}-${dayInput} `;
    let age = calculateAge(formattedDate);

    alert(`You are ${age} years old!`);

    function calculateAge(birthday) {
      let today = new Date();
      let birthDate = new Date(birthday);
      let age = today.getFullYear() - birthDate.getFullYear();
      let month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  });
})();
