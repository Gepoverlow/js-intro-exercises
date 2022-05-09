/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here

  const columns = 10;
  const rows = 10;

  const target = document.getElementById("target");

  createTable(columns, rows);

  function createTable(columns, rows) {
    const table = document.createElement("table");
    target.appendChild(table);

    let result = "x";

    for (let i = 0; i < rows + 1; i++) {
      let row = document.createElement("tr");

      for (let j = 0; j < columns + 1; j++) {
        let data = document.createElement("td");

        if (i == 0 && j > 0) {
          result = j;
        } else if (j == 0 && i > 0) {
          result = i;
        } else if (i > 0 && j > 0) {
          result = i * j;
        }

        data.textContent = result;
        row.appendChild(data);
      }

      table.appendChild(row);
    }
  }
})();

// 0  1  2  3  4  5  6  7  8  9  10
// 1  1  2  3  4  5  6  7  8  9  10
// 2  2  4  6  8 10 12 14 16 18  20
// 3  3  6  9 12 15 18 21 24 27  30
// 4  4  8 12 16 20 24 28 32 36  40
// 5  5 10 15 20 25 30 35 40 45  50
// 6  6 12 18 24 30 36 42 48 54  60
// 7  7 14 21 28 35 42 49 56 63  70
// 8  8 16 24 32 40 48 56 64 72  80
// 9  9 18 27 36 45 54 63 72 81  90
//10 10 20 30 40 50 60 70 80 90 100
