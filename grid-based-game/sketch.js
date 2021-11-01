//grid-based-game
//October 21, 2021
//Nicklas Yuzdepski

let gridDimensions = 10;
let grid;

function setup() {
  createCanvas(400, 400);
  grid = createEmpty2DArray(gridDimensions, gridDimensions);
}

function draw() {
  background(220);
  displayGrid();
}

//use mouse to draw on grid
function mousePressed() {
  let cellWidth = width/gridDimensions;
  let cellHeight = height/gridDimensions;

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
  }
  else if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
}

function displayGrid() {
  let cellWidth = width/gridDimensions;
  let cellHeight = height/gridDimensions;

  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<gridDimensions; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      imageMode(CENTER);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

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






  









