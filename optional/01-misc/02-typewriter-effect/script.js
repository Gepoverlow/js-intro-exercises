/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const target = document.getElementById("target");
  const textContent = target.textContent;

  function stringIntoArray(string) {
    const trimmedString = string.trim();
    const replacedString = trimmedString.replace(/\s\s+/g, " ");
    const stringToArray = replacedString.split("");

    return stringToArray;
  }

  function handleTypewriter(array) {
    target.textContent = "";
    const p = document.createElement("p");
    target.appendChild(p);

    let lapse = Math.floor(Math.random() * 500) + 1;
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => createEm(array[i], p), lapse);
      lapse = lapse + Math.floor(Math.random() * 500);
    }
  }

  function createEm(letter, parent) {
    const em = document.createElement("em");
    em.className = "letters";
    em.textContent = letter;
    parent.appendChild(em);
  }

  handleTypewriter(stringIntoArray(textContent));
})();
