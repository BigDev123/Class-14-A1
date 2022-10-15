var ball={
  x:100,
  y:200,
  radius:30,
  xspeed:0,
  colour:"blue"



}






function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.radius)
  fill (ball.colour)
  ball.xspeed=3
  ball.x=ball.x+ball.xspeed
}