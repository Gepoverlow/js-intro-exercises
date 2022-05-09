/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const passwordInput = document.getElementById("pass-one");
  const counter = document.getElementById("counter");

  passwordInput.addEventListener("keyup", updateCounter);

  function updateCounter() {
    let passwordValue = passwordInput.value;
    let passwordLength = passwordValue.length;

    counter.textContent = `${passwordLength}/10`;
  }
})();
