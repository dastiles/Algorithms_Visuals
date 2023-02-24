const cities = []
let recordDistance;
let bestEver;
function setup() {
    createCanvas(500, 500)

    for (let i = 0; i < 20; i++) {
        let rando = createVector(random(width), random(height))
        cities[i] = rando
    }
    bestEver = cities.slice()
    recordDistance = calcDistance(cities)
}

function draw() {
    background(0)

    for (let i = 0; i < cities.length; i++) {
        fill(255)
        noStroke()
        ellipse(cities[i].x, cities[i].y, 8, 8)
    }

    beginShape()
    for (let i = 0; i < cities.length; i++) {
        stroke(255)
        noFill()
        strokeWeight(2)
        vertex(cities[i].x, cities[i].y)
    }
    endShape()


    beginShape()
    for (let i = 0; i < bestEver.length; i++) {
        stroke(255, 0, 255)
        noFill()
        strokeWeight(4)
        vertex(bestEver[i].x, bestEver[i].y)
    }
    endShape()

    let i = floor(random(cities.length))
    let j = floor(random(cities.length))
    swap(cities, i, j)

    let d = calcDistance(cities)
    if (d < recordDistance) {
        console.log(d)
        recordDistance = d
        bestEver = cities.slice()
    }

}


function swap(a, i, j) {
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
}

function calcDistance(points) {
    let sum = 0
    for (let i = 0; i < points.length - 1; i++) {
        let d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
        sum += d
    }

    return sum
}