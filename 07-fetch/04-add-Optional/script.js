/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const button = document.getElementById("run");
  getHeroes("http://localhost:3000/heroes");

  let allHeroes = [];

  button.addEventListener("click", () => {
    displayHeroes(allHeroes);
  });

  function displayHeroes(arr) {
    let nameI = document.getElementById("hero-name");
    let alterI = document.getElementById("hero-alter-ego");
    let powersI = document.getElementById("hero-powers");

    let nameV = nameI.value;
    let alterV = alterI.value;
    let powersV = powersI.value;

    if (nameV && alterV && powersV) {
      arr.push(heroFactory(arr.length + 1, nameV, alterV, powersV));

      nameI.value = "";
      alterI.value = "";
      powersI.value = "";

      console.log(arr);
    }
  }

  async function getHeroes(url) {
    let data = await fetch(url);
    let response = await data.json();
    response.forEach((resp) => allHeroes.push(resp));
  }

  function heroFactory(id, name, alter, powers) {
    const newHero = {
      id: id,
      name: name,
      alter: alter,
      powers: powers.split(","),
    };
    return newHero;
  }
})();
