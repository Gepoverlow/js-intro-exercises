/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  //Define some empty variables
  let age;
  let gender;
  let town;

  //Create a function that prompts questions and re-assigns the values of previously defined variables
  function askDetails() {
    age = prompt("How old are you?");
    gender = prompt("What is your gender?");
    town = prompt("From which town are you?");

    //Check that inputs are not empty. If there is at least one empty field it will turn into true
    if (!age || !gender || !town) {
      alert(
        //On empty field will alert error
        "Oops! It appears that one of the fields was empty. Lets do it again!"
      );
      //And re-run the function, repeating the asking process
      askDetails();
    } else {
      //If no inputs are empty call a confirm dialog box and store the answer in a variable that will be true or false
      let isConfirmed = confirm(
        `So you are ${age} years old, your gender is ${gender} and you come from a town called ${town}. Click on OK to confirm!`
      );

      //Checking if the confirm was successfull, if not, re-run the function and the asking process
      isConfirmed ? null : askDetails();
    }
  }
  //We call the function so it gets executed on page load
  askDetails();
})();
