// Constants my guy
var slider;                   // Depth of fractal tree
var angle;

function setup() {
  createCanvas(windowWidth, windowHeight - 100);
  slider = createSlider(0, TWO_PI, PI / 8, 0.01);
}

function draw() {
  background(50); // not shitty grey
  angle = slider.value();
  stroke(255);

  push();
  translate(windowWidth / 4, height);
  branch(100);
  pop();

  push();
  translate(windowWidth / 2, height);
  branch(100);
  pop();

  push();
  translate(3 * windowWidth / 4, height);
  branch(100);
  pop();

}
function branch(length) {
  line(0, 0, 0, -length);
  translate(0, -length);
  if (length > 10) {
    push();
    rotate(angle);
    branch(length * 0.7);
    pop();
    push();
    rotate(-angle);
    branch(length * 0.7);
    pop();
  }
}