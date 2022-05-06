/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var fruits = [
    "pomme",
    "poire",
    "fraise",
    "tomate",
    "orange",
    "mandarine",
    "durian",
    "pêche",
    "raisin",
    "cerise",
  ];

  // your code here

  let button = document.getElementById("run");

  button.addEventListener("click", () => {
    //making a copy of fruits
    let newArray = [...fruits];

    //removing
    newArray.shift();
    newArray.pop();

    //adding
    newArray.unshift("banana");
    newArray.push("kiwi");

    alert(`Old Array: ${fruits}\nNew Array: ${newArray}`);
  });
})();
