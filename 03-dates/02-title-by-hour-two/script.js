/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let text = document.getElementById("target");

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours === 17) {
    if (minutes >= 30) {
      text.textContent = "Good Evening!";
    } else {
      textContent = "Hello!";
    }
  } else if (hours > 17) {
    text.textContent = "Good Evening!";
  } else if (hours < 17) {
    text.textContent = "Hello!";
  }
})();
