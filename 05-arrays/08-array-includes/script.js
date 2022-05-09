/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var fruits = [
    "perry",
    "strawberry",
    "tomato",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "mandarin",
    "durian",
    "peach",
    "grapes",
    "cherry",
  ];

  // your code here

  const button = document.getElementById("run");

  button.addEventListener("click", () => {
    if (fruits.includes("apple")) {
      console.log("yes");
    } else {
      console.log("nope");
    }
  });
})();
