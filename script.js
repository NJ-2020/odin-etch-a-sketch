const divContainer = document.querySelector(".container");
function grid(num) {
  let amount = num * num;
  for (let i = 0; i < amount; i++) {
    divContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`; // to give width in accordance with space volume
    divContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`; // to give height in accordance with space volume
    const individualDiv = document.createElement("div"); // create div in html
    individualDiv.style.border = "1px solid black"; // to give a background for each div
    divContainer.appendChild(individualDiv); // ini yg memunculkan div
    
  }
}
grid(16)


