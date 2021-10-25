// Grid Based Game
// Nicklas Yuzdepski
// October 20, 2021

let gridSize = 10;
let grid;
let gridCharacterY;
let gridCharacterX;
let positionY = random;
let positionX = random;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray(gridSize, gridSize);
}

function draw() {
  background(220);

}
// create empty 2D array
function createEmpty2DArray(rows, cols) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}

// put character in grid
grid[gridCharacterY][gridCharacterX] = random(positionY, positionX);

fill("red");
  









