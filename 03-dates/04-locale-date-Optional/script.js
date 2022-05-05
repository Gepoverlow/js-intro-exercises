/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const dateText = document.getElementById("target");

  function getDate() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let months = ["Jan", "Feb", "March", "April", "May"];

    let today = new Date();

    let dayName = days[today.getDay()];
    let dayNumber = today.getDate();
    let monthName = months[today.getMonth()];
    let yearNumber = today.getFullYear();
    let hourNumber = today.getHours();
    let minutesNumber = today.getMinutes();
    let secondsNumber = today.getSeconds();

    let date = `${dayName} ${dayNumber} ${monthName} ${yearNumber}, ${hourNumber}h${minutesNumber}:${secondsNumber} `;

    dateText.textContent = date;

    setTimeout(getDate, 1000);
  }

  getDate();
})();
