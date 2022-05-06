/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  //Select the button
  let runButton = document.getElementById("run");
  //Add a click event to the button
  runButton.addEventListener("click", () => {
    //Grab the input value and storing it on a new variable
    let colorInput = document.getElementById("color").value;
    //Assign the variable value to the bodys background
    document.body.style.backgroundColor = colorInput;
  });
})();
