// Aquarium

let theCreatures = [];
let clownFishImg;
let octopusImg;

function preload() {
  clownFishImg = loadImage("assets/clownfish.jpg");
  octopusImg = loadImage("assets/octopus.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    if (random(100) < 30) {
      let octopus = new Octopus(100, 200, 100, octopusImg);
      theCreatures.push(octopus);
    }
    else {
      let fish = new Clownfish(random(width), random(height), 30, clownFishImg);
      theCreatures.push(fish);
    }
  } 
}

function draw() {
  background(220);
  for (let someCreatures of theCreatures) {
    someCreatures.update();
    someCreatures.display();
  }
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.yTime = 1000;
    this.speed = (1, 2);
  }

  update() {
    //Declan's Movement
    this. x += this.speed;
    this.y += sin(this.x / 100);

    // teleports to other other side of screen
    if (this.x > width) {
      this.x = 0;
    }
  }
  
  display() {
    fill("green");
    circle(this.x, this.y, this.size);
  }

}


class Clownfish extends Creature {
  constructor(x, y, size, theImage) {
    super(x, y, size);
    this.myImage = theImage; 
  }

  display() {
    image(this.myImage, this.x, this.y, this.size, this.size);
  }

}


class Octopus extends Creature {
  constructor(x, y, size, someImage) {
    super(x, y, size);
    this.image = someImage;
  }

  display() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
}