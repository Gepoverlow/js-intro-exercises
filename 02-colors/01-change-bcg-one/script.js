/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  //Create array with colors
  const colors = ["red", "green", "yellow", "blue"];
  //Select all buttons with class button
  const buttons = document.querySelectorAll(".button");
  //Loop through the buttons and attach an event listener to each
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      //Change the style of the bodys background based on the indexes of the colors array
      document.body.style.backgroundColor = colors[i];
    });
  }
})();
