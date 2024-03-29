let dot
let x = 0
let y = 0
let v = 0
let a = 0
let score = 0
function setup() {
  const size = 
    windowWidth > windowHeight ? 
    windowHeight : windowWidth
  createCanvas(size, size);
  dot = new Player(1)
  frameRate(60)
  textFont("Nunito")
}
function draw() {
  translate(width/2,height/2)
  background(31)
  stroke(255)
  noFill()
  circle(0, 0, width/1.2)
  if (mouseIsPressed) {
    // translate co-ords
    mx = mouseX - width/2
    my = mouseY - height/2
    mousePos = createVector(mx,my)
    force = mousePos.sub(dot.pos)
    dot.applyForce(force)
  }
  dot.update()
  dot.show()
  if(dot.intersects(width/2.4))
    gameOver()
  score += 1/60
  fill(255)
  noStroke()
  textSize(32)
  textAlign(RIGHT, TOP)
  offset = 10
  text(int(score), width/2 - offset, -height/2 + offset)
}

function gameOver() {
  background(198, 40, 40)
  textSize(32)
  textAlign(CENTER, CENTER)
  fill(255)
  text("GAME OVER!!!", 0, 0)
  text(`Score: ${int(score)}` , 0, 32)
  console.log("GAME OVER!!!")
  noLoop()
}
