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
  const textContent = target.textContent;

  function lettersIntoEms(string) {
    const trimmedString = string.trim();
    const stringToArray = trimmedString.split("");
    handleElementCreation(stringToArray);
  }

  function handleElementCreation(array) {
    target.textContent = "";
    const p = document.createElement("p");
    p.style.height = "100%"
    array.forEach((item) => createEm(item, p));
    target.appendChild(p);
  }

  function createEm(letter, parent) {
    const em = document.createElement("em");
    em.className = "letters";
    em.textContent = letter;
    em.style.transition = "all 1s";
    parent.appendChild(em);
  }

  function handleAnimation() {
    const allLetters = document.querySelectorAll(".letters");
    let lapse = 0;
    for (let i = 0; i < allLetters.length; i++) {
      setTimeout(() => animateLetter(allLetters[i]), lapse);
      lapse = lapse + 250;
    }
  }

  function animateLetter(letter) {
    let sizes = ["25px", "30px","35px", "40px", "35px", "30px","25px", "20px"];
    let time = 50;
    for (let i = 0; i < 10; i++) {
      setTimeout(() => (letter.style.fontSize = sizes[i]), time);
      time = time + 500;
    }
    setTimeout(
      () => (letter.style.fontSize === "20px" ? animateLetter(letter) : null),
      5500
    );
  }

  lettersIntoEms(textContent);
  handleAnimation();
})();
