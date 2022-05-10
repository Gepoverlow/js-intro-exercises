/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
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

  button.addEventListener("click", () => {
    let inputId = document.getElementById("hero-id").value;
    let inputNumber = Number(inputId);
    getHero("http://localhost:3000/heroes", inputNumber);
  });

  async function getHero(url, id) {
    let data = await fetch(url);
    let response = await data.json();
    let hArray = await response.filter((hero) => hero.id === id);

    if (hArray.length !== 0) {
      createTemplate(hArray[0].name, hArray[0].alterEgo, hArray[0].abilities);
    } else {
      alert("Hero was not found");
    }
  }

  function createTemplate(name, alter, abilities) {
    let template = document.createElement("template");

    let li = document.createElement("li");
    template.content.appendChild(li);

    let h4 = document.createElement("h4");
    li.appendChild(h4);

    let strong = document.createElement("strong");
    strong.textContent = `${name} - `;
    h4.appendChild(strong);

    let em = document.createElement("em");
    em.textContent = alter;
    h4.appendChild(em);

    displayAbilities(abilities, li);

    target.appendChild(template.content);
  }

  function displayAbilities(arr, parent) {
    let ul = document.createElement("ul");
    for (let i = 0; i < arr.length; i++) {
      let para = document.createElement("li");
      para.textContent = arr[i];
      ul.appendChild(para);
    }
    parent.appendChild(ul);
  }
})();

{
  /* <template id="tpl-hero">
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name"></strong>
                                <em class="alter-ego"></em>
                            </h4>
                            <p class="powers"></p>
                        </li>
                    </template> */
}
