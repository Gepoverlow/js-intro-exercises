/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  //Store the question in a variable
  let response = prompt("Would you like some cake?");
  //Tidy up the response that checks for inputs like "yes", "YES", "yES","        YeS", etc..
  if (response.toLowerCase().trim() === "yes") {
    //If true alert Congratulations
    alert("Congratulations!");
  } else {
    //If false alert More cake to me
    alert("More cake for me then :p");
  }
})();
