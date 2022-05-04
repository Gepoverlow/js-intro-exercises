/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let runButton = document.getElementById("run");
  runButton.addEventListener("click", () => {
    let randomColor = generateRgb();

    document.body.style.backgroundColor = randomColor;
  });

  function generateRgb() {
    let numberOne = generateNumber();
    let numberTwo = generateNumber();
    let numberThree = generateNumber();

    let rgb = `rgb(${numberOne}, ${numberTwo}, ${numberThree})`;

    return rgb;
  }

  function generateNumber() {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
  }
})();
