// Bubble Demo

let theBubbles = [];

function draw() {
  background(220);
  bubbleUp();
  displayBubble();
}

function spawnBubble() {
  let bubble = {
    x: random(width),
    y: height,
    radius: random(20, 50),
    dx: 0,
    dy: -3,
    theColor: color(random(255), (random(255), (random(255), (random(255)),
  };
  theBubbles.push(bubble);
}

function mousePressed(){
  spawnBubble();
}

function bubbleUp() {
  for (let bubble of theBubbles) {
    noStroke();
    fill(bubble. theColor)
    circle(bubble.x, bubble.y, bubble.radius*2)

    bubble.y += bubble.dy;

  //jitter sideways
  bubble.x += random(-5, 5);
  }
}

function displayBubble() {
  
}

