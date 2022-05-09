/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  const passwordInput = document.getElementById("pass-one");
  const validity = document.getElementById("validity");

  passwordInput.addEventListener("keyup", validatePass);

  function validatePass() {
    let inputValue = passwordInput.value;
    let passwordFormat = /(?:.*\d){2}/;

    if (inputValue.length >= 8 && inputValue.match(passwordFormat)) {
      validity.textContent = "ok";
    } else {
      validity.textContent = "not ok";
    }
  }
})();
