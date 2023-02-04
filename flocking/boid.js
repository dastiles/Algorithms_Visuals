

class Boid {
  constructor(x, y) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.r = 16
    this.maxSpeed = 16
    this.maxForce = 1
  }

  applyForce(force) {
    this.acc.add(force)
  }

  flee(target) {
    return this.seek(target).mult(-1)
  }

  seek(target) {
    let force = p5.Vector.sub(target, this.pos)
    force.setMag(this.maxSpeed)
    force.sub(this.vel)
    force.limit(this.maxForce)
    return force

  }

  update() {
    this.vel.add(this.acc)
    this.vel.limit(this.maxSpeed)
    this.pos.add(this.vel)
    this.acc.set(0, 0)
  }

  edges() {
    if (this.pos.x > height) {
      this.pos.x = 0
    }
    if (this.pos.x < 0) {
      this.pos.x = height
    }
    if (this.pos.y > width) {
      this.pos.y = 0
    }
    if (this.pos.y < 0) {
      this.pos.y = width
    }
  }

  show() {
    stroke(255)
    strokeWeight(2)
    fill(255)
    push()
    translate(this.pos.x, this.pos.y)
    rotate(this.vel.heading())
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0)
    pop()
  }
}

class Target extends Boid {
  constructor(x, y) {
    super(x, y)
    this.vel = createVector(5, 2)
  }

  show() {
    stroke(255)
    strokeWeight(2)
    fill("#F063A4")
    push()
    translate(this.pos.x, this.pos.y)
    // rotate(this.vel.heading())
    ellipse(0, 0, this.r * 2,)
    pop()
  }
}