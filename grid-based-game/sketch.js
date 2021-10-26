// Grid Based Game
// Nicklas Yuzdepski
// October 20, 2021

// global variables
let gridSize = 10;
let grid;
let gridCharacterY;
let gridCharacterX;
let positionY = random(0, 400);
let positionX = random(0, 400);
let gridObstacle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray(gridSize, gridSize);
}

function draw() {
  background("white");

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

// display grid
function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      fill("white");
    }
  }
}

// put character in grid
grid[gridCharacterY][gridCharacterX] = random(positionY, positionX);

fill("red");

// grid obstacles
function gridObstacles () {
  
}

// collision detection
if (gridCharacterY && gridCharacterX > gridObstacle) {
  gridCharacterX += positionX && positionY;
}


  









