function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  dibujo();
}
function dibujo() {
  strokeWeight(5);
  rect(0, 0, 168);
  noStroke();
  fill(3, 150, 54);
  triangle(0, 0, 168, 0, 84, 84);
  fill(255, 87, 51);
  triangle(0, 0, 0, 168, 84, 84);
  fill(88, 24, 69);
  triangle(168, 0, 168, 84, 126, 42);
  fill(255, 252, 32);
  quad(168, 84, 126, 42, 84, 84, 126, 126);
  fill(16, 26, 187);
  triangle(84, 84, 126, 126, 42, 126);
  fill(16, 135, 187);
  quad(42, 126, 126, 126, 84, 168, 0, 168);
  fill(199, 0, 57);
  triangle(168, 84, 84, 168, 168, 168);
  noLoop();
}