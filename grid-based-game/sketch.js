// Grid Based Game
// Nicklas Yuzdepski
// October 20, 2021

// global variables
let gridSize = 10;
let grid;
let gridCharacterY;
let gridCharacterX;
let positionY = random(400);
let positionX = random(400);
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

function mousePressed() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 1) {
    grid [cellY][cellX] = 0;
  }
  else if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
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


  









