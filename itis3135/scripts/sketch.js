// sketch.js
// A simple p5.js bouncing ball example

let x = 100;
let y = 100;
let xspeed = 3;
let yspeed = 2;

function setup() {
  // create a canvas inside <main>
  const canvas = createCanvas(400, 400);
  // move canvas into the <main> element
  canvas.parent(document.querySelector('main'));
}

function draw() {
  background(220);
  // draw the ball
  fill('#0077cc');
  noStroke();
  ellipse(x, y, 50, 50);

  // update position
  x += xspeed;
  y += yspeed;

  // bounce off edges
  if (x > width - 25 || x < 25) {
    xspeed *= -1;
  }
  if (y > height - 25 || y < 25) {
    yspeed *= -1;
  }
}
