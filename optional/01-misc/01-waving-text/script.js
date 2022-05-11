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

  function lettersIntoElements(string) {
    const trimmed = string.trim();
    const stringToArray = trimmed.split("");
    handleCreation(stringToArray);
  }

  function handleCreation(array) {
    target.textContent = "";
    const p = document.createElement("p");
    array.forEach((item) => createEm(item, p));
    target.appendChild(p);
  }

  function createEm(letter, parent) {
    const em = document.createElement("em");
    em.className = "letters";
    em.textContent = letter;
    em.style.transition = "all 0.5s";
    parent.appendChild(em);
  }

  function handleAnimation() {
    const allLetters = document.querySelectorAll(".letters");

    let lapse = 0;

    for (let i = 0; i < allLetters.length; i++) {
      setTimeout(() => animateLetter(allLetters[i]), lapse);
      lapse = lapse + 25;
    }
  }

  function animateLetter(letter) {
    setTimeout(() => (letter.style.fontSize = "25px"), 50);
    setTimeout(() => (letter.style.fontSize = "30px"), 100);
    setTimeout(() => (letter.style.fontSize = "35px"), 150);
    setTimeout(() => (letter.style.fontSize = "40px"), 200);
    setTimeout(() => (letter.style.fontSize = "45px"), 250);
    setTimeout(() => (letter.style.fontSize = "40px"), 300);
    setTimeout(() => (letter.style.fontSize = "35px"), 350);
    setTimeout(() => (letter.style.fontSize = "30px"), 400);
    setTimeout(() => (letter.style.fontSize = "25px"), 450);
    setTimeout(() => (letter.style.fontSize = "20px"), 500);

    setTimeout(
      () => (letter.style.fontSize === "20px" ? animateLetter(letter) : null),
      550
    );
  }

  lettersIntoElements(textContent);
  handleAnimation();
})();
