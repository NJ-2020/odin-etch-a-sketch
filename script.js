const divContainer = document.querySelector('.container'); //  variable - a div in html
const slider = document.querySelector('#range'); // var - input
const rgbMode = document.querySelector('.rbgMode');
const blackMode = document.querySelector('.blackMode');
let isDrawing = false; // boolean
let colorMode = 'notRgb'; // this variable will determine for the color of each div whether this is rgb or not
let size = slider.value; // https://www.delftstack.com/howto/javascript/javascript-get-input-value/

function createGrid(num) {
  let amount = num * num;
  divContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`; // to give width in accordance with space volume
  divContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`; // to give height in accordance with space volume
  for (let i = 0; i < amount; i++) {
    const individualDiv = document.createElement('div'); // create div in html
    individualDiv.style.border = '1px rgba(0, 0, 0, 0.041) solid'; // to give border to each div
    individualDiv.style.background = 'lightGreen'; // to give a background for each div
    divContainer.appendChild(individualDiv); // to append div to the container
    // to give a gray color to each div when on click or on hold
    individualDiv.addEventListener('click', function () {
      giveColor(individualDiv);
    });
    // this function will run based on the conditions underneath
    individualDiv.addEventListener('mousemove', function () {
      if (!isDrawing) return;
      giveColor(individualDiv);
    });
    individualDiv.addEventListener('mousedown', () => (isDrawing = true));
    individualDiv.addEventListener('mouseup', () => (isDrawing = false));
  }
}
createGrid(size);

rgbMode.addEventListener('click', () => {
  colorMode = 'rgb';
});

blackMode.addEventListener('click', () => {
  colorMode = 'notRgb';
});

function giveColor(square) {
  if (colorMode === 'notRgb') {
    square.style.backgroundColor = 'grey';
  } else if (colorMode === 'rgb') {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
}

slider.addEventListener('change', function (e) {
  size = e.target.value;
  clearSquares();
});

function clearSquares() {
  const squares = document.querySelectorAll('.container div');
  squares.forEach((square) => {
    divContainer.removeChild(square);
  });
  createGrid(size);
}
