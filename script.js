const divContainer = document.querySelector(".container"); //  variable - a div in html
const slider = document.querySelector("#range"); // var - input
let isDrawing = false; // boolean 
let size = slider.value; // https://www.delftstack.com/howto/javascript/javascript-get-input-value/
slider.addEventListener("change", function (e) {
  size = e.target.value; 
  clearSquares();
});

function grid(num) {
  let amount = num * num;
  divContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`; // to give width in accordance with space volume
  divContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`; // to give height in accordance with space volume
  for (let i = 0; i < amount; i++) {
    const individualDiv = document.createElement("div"); // create div in html
    individualDiv.classList.add("cell");
    individualDiv.style.background = "lightGreen"; // to give a border for each div
    divContainer.appendChild(individualDiv); // to append div to the container

    // to give a black color to each div when on click or onhold
    individualDiv.addEventListener("click", function () {
      individualDiv.style.backgroundColor = "grey"; // change the background
    });

    // this function will run based on the conditions underneath
    individualDiv.addEventListener("mousemove", function () {
      if (!isDrawing) return;
      individualDiv.style.backgroundColor = "grey"; // change the background
    });

    individualDiv.addEventListener("mousedown", () => (isDrawing = true));
    individualDiv.addEventListener("mouseup", () => (isDrawing = false));
  }
}
grid(size);

function clearSquares() {
  const squares = document.querySelectorAll(".container div");
  squares.forEach((square) => {
    divContainer.removeChild(square);
  });
  grid(size);
}
 