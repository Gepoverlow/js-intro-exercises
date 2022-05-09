/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  // your code here
  const hoverOver = document.getElementById("image").getAttribute("data-hover");
  const hoverOut = document.getElementById("image").src;

  const image = document.getElementById("image");

  image.addEventListener("mouseover", () => {
    image.src = hoverOver;
  });

  image.addEventListener("mouseout", () => {
    image.src = hoverOut;
  });
})();
