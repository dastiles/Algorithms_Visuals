let persuer;
let target;

function setup() {
    createCanvas(500, 500)
    persuer = new Boid(width / 2, height / 2)
    target = new Target(200, 300)
}

function draw() {
    background(0)
    fill(255, 0, 0)
    noStroke()

    let force = persuer.seek(target.pos)
    persuer.applyForce(force)
    persuer.update()
    persuer.edges()
    persuer.show()

    target.show()
    target.edges()
    target.update()
}