/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  const button = document.getElementById("run");

  const passwordOne = document.getElementById("pass-one");
  const passwordTwo = document.getElementById("pass-two");

  button.addEventListener("click", () => {
    let valueOne = passwordOne.value;
    let valueTwo = passwordTwo.value;

    if (valueOne !== valueTwo || !valueOne || !valueTwo) {
      passwordOne.style.border = "1px solid red";
      passwordTwo.style.border = "1px solid red";

      passwordOne.classList.add("error");
      passwordTwo.classList.add("error");
    } else {
      passwordOne.style.border = "1px solid green";
      passwordTwo.style.border = "1px solid green";

      passwordOne.classList.remove("error");
      passwordTwo.classList.remove("error");
    }
  });
})();
