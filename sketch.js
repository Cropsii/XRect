let distMouse = 15;
let b;
let size = 10;
let cols;
let rows;
let offset = 4;
let blocks = [];
let Colour = "black";
function setup() {
  document.getElementById("Change").addEventListener("click", Change);
  createCanvas(windowHeight / 2, windowHeight / 2);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;
  for (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
    }
  }
}
function Change() {
  Colour = Colour === "white" ? "black" : "white";
}
function draw() {
  background(Colour);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}
