let dot
let x = 0
let y = 0
let v = 0
let a = 0
let score = 0
function setup() {
  const size = windowWidth > windowHeight ? windowHeight : windowWidth
  createCanvas(size, size);
  dot = new Player()
  frameRate(30)
}
function draw() {
  translate(width/2,height/2)
  background(0)
  stroke(255)
  noFill()
  circle(0, 0, width/1.2)
  if (mouseIsPressed) {
    // translate co-ords
    x = mouseX - width/2
    y = mouseY - height/2
    mousePos = createVector(x,y)
    force = mousePos.sub(dot.pos)
    dot.applyForce(force)
  }
  dot.update()
  dot.show()
  if(dot.intersects(width/2.4)) {
    gameOver()
  }
  score += 1/30
  fill(255)
  noStroke()
  textSize(32)
  textAlign(RIGHT, TOP)
  offset = 10
  text(int(score), width/2 - offset, -height/2 + offset)
}

function gameOver() {
  background(255,0,0)
  textSize(32)
  textAlign(CENTER, CENTER)
  fill(255)
  text("GAME OVER!!!", 0, 0)
  text(`Score: ${int(score)}` , 0, 32)
  noLoop()
}
