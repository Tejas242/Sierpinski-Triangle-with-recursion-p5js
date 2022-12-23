const maxPoints = 10000;
let points = [];
let timeDelay = 1; // delay in milliseconds between each iteration

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255);

  // Set the starting points for the animation
  points = [[100, 100], [300, 100], [200, 300]];
}

function draw() {
  background(0);

  // Draw the points
  for (let i = 0; i < points.length; i++) {
    point(points[i][0], points[i][1]);
  }

  // If the maximum number of points has been reached, stop the animation
  if (points.length >= maxPoints) {
    noLoop();
  }

  // Generate new points using recursion
  generatePoints();
}

function generatePoints() {
  // Choose a random point from the initial three points
  const p1 = points[floor(random(3))];

  // Calculate the midpoint between the random point and the last point in the array
  const p2 = points[points.length - 1];
  const p3 = midpoint(p1, p2);

  // Add the new point to the array
  points.push(p3);

  // Draw a line between the two points, if the maximum number of points has not yet been reached
  if (points.length < maxPoints) {
    stroke(255);
    strokeWeight(2);
    line(p1[0], p1[1], p2[0], p2[1]);
  }

  // Recursively generate more points, until the maximum number of points has been reached
  if (points.length < maxPoints) {
    setTimeout(generatePoints, timeDelay);
  }
}

function midpoint(p1, p2) {
  return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
}
