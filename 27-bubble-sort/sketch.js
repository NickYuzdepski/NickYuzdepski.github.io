// Bubble Sort

let someList = [5, 15, 3, 8, 9, 1, 20, 7];

function bubbleSort(aList) {
  let anySwaps = true;
  while (anySwaps) {
    anySwaps = false;

    let position = 0;
    //one pass
    for (let i = 0; i<aList.length-1; i++) {
    //check for swap
      if (aList[i] > aList[i+1]) {
        let temp = aList[i];
        aList[i] = aList[i+1];
        aList[i+1] = temp;
      }
    }
    console.log(aList); //print out each pass
  }
  return aList;
}

function setup() {
  createCanvas(windowHeight, windowWidth);
  console.log(bubbleSort(someList));
}

function draw() {
  background(220);
}

