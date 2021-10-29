// Grid Based Game
// Nicklas Yuzdepski
// October 20, 2021

// global variables
let gridSize = 10;
let grid;
let gridCharacterY;
let gridCharacterX;
let positionY = 400;
let positionX = 400;
let cellWidth, cellHeight;
let speed = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray(gridSize, gridSize);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
}

function draw() {
  background("white");
  
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
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill ("white");
      }
      if (grid[y][x] === 1) {
        fill ("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}



// put character in grid
// grid[gridCharacterY][gridCharacterX] = random(positionY, positionX);
// noStroke();
// fill("red");
// let choice = random(100);
// if (choice < 25) { //up
//   positionY -= random (speed);
// }
// else if (choice < 50) { //down
//   positionY += random(speed);
// }
// else if (choice < 75) { //left
//   positionX -= random(speed);
// }
// else if (choice < 100) { //right
//   positionX += random(speed);
// }

// // collision detection







  









