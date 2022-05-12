/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const target = document.getElementById("target");
  const partOne = document.getElementById("part-one");
  const partTwo = document.getElementById("part-two");
  const partThree = document.getElementById("part-three");
  const partFour = document.getElementById("part-four");

  partOne.addEventListener("click", () => {
    updateIndividualTarget(partOne, 499);
    updateMainTarget();
  });

  partTwo.addEventListener("click", () => {
    updateIndividualTarget(partTwo, 99);
    updateMainTarget();
  });

  partThree.addEventListener("click", () => {
    updateIndividualTarget(partThree, 99);
    updateMainTarget();
  });

  partFour.addEventListener("click", () => {
    updateIndividualTarget(partFour, 99);
    updateMainTarget();
  });

  function updateMainTarget() {
    let oneValue = partOne.textContent;
    let twoValue = partTwo.textContent;
    let threeValue = partThree.textContent;
    let fourValue = partFour.textContent;

    target.textContent = `0${oneValue}${twoValue}${threeValue}${fourValue}`;
  }

  function updateIndividualTarget(selector, max) {
    let currentString = selector.textContent;
    let currentNumber = Number(currentString);
    currentNumber++;

    if (currentNumber < 10) {
      selector.textContent = `0${currentNumber}`;
    } else if (currentNumber <= max) {
      selector.textContent = currentNumber;
    }
  }
})();
