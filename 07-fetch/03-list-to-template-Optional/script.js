/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const button = document.getElementById("run");
  const target = document.getElementById("target");
  const templateContent = document.getElementById("tpl-hero").content;

  button.addEventListener("click", () => {
    cleanNode(target);
    getHeroes("http://localhost:3000/heroes");
  });

  async function getHeroes(url) {
    let data = await fetch(url);
    let response = await data.json();
    response.forEach((resp) => handleTemplate(resp));
  }

  function handleTemplate(responseItem) {
    let clone = templateContent.cloneNode(true);

    let name = clone.querySelector(".name");
    name.textContent = `${responseItem.name} -`;

    let alter = clone.querySelector(".alter-ego");
    alter.textContent = responseItem.alterEgo;

    let powers = clone.querySelector(".powers");
    powers.textContent = responseItem.abilities.join(", ");

    target.appendChild(clone);
  }

  function cleanNode(node) {
    while (node.firstChild) {
      node.removeChild(node.lastChild);
    }
  }
})();
