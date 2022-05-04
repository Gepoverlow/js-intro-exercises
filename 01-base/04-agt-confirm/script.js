/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let age;
  let gender;
  let town;

  function askDetails() {
    age = prompt("How old are you?");
    gender = prompt("What is your gender?");
    town = prompt("From which town are you?");

    if (!age || !gender || !town) {
      alert(
        "Oops! It appears that one of the fields was empty. Lets do it again!"
      );
      askDetails();
    } else {
      let isConfirmed = confirm(
        `So you are ${age} years old, your gender is ${gender} and you come from a town called ${town}. Click on OK to confirm!`
      );
      isConfirmed ? null : askDetails();
    }
  }

  askDetails();
})();
