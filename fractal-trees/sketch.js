var slider;
var angle;

function setup() {
  createCanvas(windowWidth, windowHeight - 100);
  slider = createSlider(0, TWO_PI, PI / 8, 0.01);
}

function draw() {

  background(50);               // not shitty grey
  angle = slider.value();       // get angle from slider
  stroke(255);                  // stroke is white

  var MID_X = windowWidth / 2;
  var MID_Y = (windowHeight - 200) / 2;
  var START_LEN = 120;

  var angles = [-PI / 2, PI / 2, PI, 0];  // rotation angles for the 4 trees

  angles.forEach(function (angle) {
    push();
    translate(MID_X, MID_Y);
    rotate(angle);
    branch(START_LEN);
    pop();
  });
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