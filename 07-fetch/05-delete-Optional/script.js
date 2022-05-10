/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  const button = document.getElementById("run");
  let allHeroes = [];

  getHeroes("http://localhost:3000/heroes");

  button.addEventListener("click", () => {
    displayRemainingHeroes(allHeroes);
  });

  function displayRemainingHeroes(heroes) {
    let idInput = document.getElementById("hero-id");
    let idValue = Number(idInput.value);

    for (let i = 0; i < heroes.length; i++) {
      if (heroes[i].id === idValue) {
        heroes.splice(i, 1);
      }
    }
    console.log(heroes);
  }

  async function getHeroes(url) {
    let data = await fetch(url);
    let response = await data.json();
    response.forEach((resp) => allHeroes.push(resp));
  }
})();
