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
  //Select the button
  let runButton = document.getElementById("run");
  //Add a click event listener to the button
  runButton.addEventListener("click", () => {
    //Declaring a new variable and calling e rgb generator function to it. This function will return a random rgb number already correctly formatted
    let randomColor = generateRgb();
    //Assign the variables value to the bodies background color
    document.body.style.backgroundColor = randomColor;
  });

  //Creating a rgb generator
  function generateRgb() {
    //Calling a function and saving its results in 3 difference variables. These function return random numbers from 1-255
    let numberOne = generateNumber();
    let numberTwo = generateNumber();
    let numberThree = generateNumber();

    //We create a new variable and store the rgba format in it
    let rgb = `rgb(${numberOne}, ${numberTwo}, ${numberThree})`;
    //And return it
    return rgb;
  }
  //Create a function that generates a random number between 1-255
  function generateNumber() {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
  }
})();
