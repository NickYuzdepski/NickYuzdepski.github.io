//grid-based-game
//October 21, 2021
//Nicklas Yuzdepski

let gridSize = 10;
let grid;
let x;
let y;
let playerX = 0;
let playerY = 0;
let gridProjectiles;

function setup() {
  createCanvas(400, 400);
  grid = createEmpty2DArray(gridSize, gridSize);

}

function draw() {
  background(220);
  displayGrid();
}

//draw grid
function displayGrid() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

//create array
function createEmpty2DArray(rows, cols) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x=0; x < cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}

function moveCircle(diffX, diffY) {
  let playerX = diffX;
  let playerY = diffY;

//edge boundary
  if (diffX >= 0 && diffY && diffX >= gridSize && diffY >= gridSize) {
    if (grid [diffX][diffY] === 0) {
//player allowed to move when grid value is 0
      if (grid[diffX][diffY] === 0) {
        
      }
    }
//player not allowed to move when grid value is 1
    if (grid [diffX][diffY] === 1) {
      grid[diffX][diffY] === 1;
    }
  }
}

//character movement
  keyPressed() {
    if (keyCode === "w") {
      grid[playerX][playerX] += 1;
    }
    if (keyCode === "s") {
      grid[playerX][playerX] -= 1;
    }
    if (keyCode === "d") {
      grid[playerX][playerX] += 1;
    }
    if (keyCode === "a") {
      grid[playerX][playerX] -= 1;
    }
  }


//create grid projectiles
function gridProjectiles()
  for (let i = 0; i < 10; i++) {
    

    
  }
}
