/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  const columns = 1;
  const rows = 10;

  const target = document.getElementById("target");

  createTable(columns, rows);

  function createTable(columns, rows) {
    const table = document.createElement("table");
    target.appendChild(table);

    for (let i = 1; i <= rows; i++) {
      let row = document.createElement("tr");

      for (let i = 1; i <= columns; i++) {
        let data = document.createElement("td");
        data.textContent = `${i} Column`;
        row.appendChild(data);
      }

      table.appendChild(row);
    }
  }
})();
