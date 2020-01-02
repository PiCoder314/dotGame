class Player {
  constructor() {
    this.pos = createVector(0,0)
    this.v = createVector(0,0)
    this.a = createVector(0,0)
    this.m = 1
    this.maxSpeed = 8
  }
  update() {
    this.v.add(this.a)
    this.v.limit(this.maxSpeed)
    this.pos.add(this.v)
    this.a.mult(0)
  }
  intersects(threshold) {
    return (this.pos.mag() >= threshold)
  }
  applyForce(force) {
    const acc = force.div(this.m)
    this.a.add(acc)
  }
  show() {
    fill(150, 0, 180)
    noStroke()
    circle(this.pos.x, this.pos.y, 6)
  }
}
