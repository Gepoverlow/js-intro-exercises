/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const button = document.getElementById("run");
  const url = "http://localhost:3000/heroes";

  button.addEventListener("click", () => {
    logHeroes(url);
  });

  async function logHeroes(url) {
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
  }
})();
