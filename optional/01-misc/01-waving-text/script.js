/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const target = document.getElementById("target");
  const textContent = document.getElementById("target").textContent;
  lettersIntoElements(textContent);

  function lettersIntoElements(string) {
    let trimmed = string.trim();
    let stringToArray = trimmed.split("");
    handleCreation(stringToArray);
    handleAnimation();
  }

  function handleCreation(array) {
    let p = document.createElement("p");
    array.forEach((item) => createEm(item, p));
    target.appendChild(p);
  }

  function createEm(letter, parent) {
    let em = document.createElement("em");
    em.className = "letters";
    em.textContent = letter;
    em.style.display = "inline";
    parent.appendChild(em);
  }

  function handleAnimation() {
    let allLetters = document.querySelectorAll(".letters");
  }

  function setSizeOne(letter) {
    letter.style.fontSize = "20px";
  }

  function setSizeTwo(letter) {
    letter.style.fontSize = "20px";
  }

  function setSizeThree(letter) {
    letter.style.fontSize = "20px";
  }

  function setSizeOne(letter) {
    letter.style.fontSize = "20px";
  }

  function setSizeOne(letter) {
    letter.style.fontSize = "20px";
  }
})();
