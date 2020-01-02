class Player {
  constructor(mass) {
    this.pos = createVector(0,0)
    this.v = createVector(0,0)
    this.a = createVector(0,0)
    this.m = mass
    this.maxSpeed = 9
    this.damping = 0.05
  }
  update() {
    this.v.add(this.a)
    this.v.limit(this.maxSpeed)
    this.pos.add(this.v)
    this.v.mult(this.damping)
    this.a.mult(0)
  }
  intersects(radius) {
    return (this.pos.mag() >= radius)
  }
  applyForce(force) {
    const acc = force.div(this.m)
    this.a.add(acc)
  }
  show() {
    noStroke()
    fill(57, 73, 171)
    circle(this.pos.x, this.pos.y, 6)
  }
}
