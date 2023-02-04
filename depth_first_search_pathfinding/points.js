const cols = 50
const rows = 50
const grid = new Array(cols)
const size = 600
const queue = []
const visited = []
const path = []

let w = size / cols
let h = size / rows

class Point {
    constructor(i, j) {
        this.i = i
        this.j = j
        this.visited = false
        this.neighbours = []
        this.g = 0;
        this.f = 0;
        this.h = 0
        this.distance = Math.floor(Math.random() * w) + 1
        this.previous = undefined
        this.wall = Math.random() < 0.4 ? true : false
    }

    show(col) {
        fill(this.wall ? 0 : col)
        noStroke()
        rect(this.i * w, this.j * h, w - 1, h - 1)
    }

    addNeighbours(grid) {
        let i = this.i
        let j = this.j

        if (i > 0) {
            this.neighbours.push(grid[i - 1][j])
        }
        if (i < cols - 1) {
            this.neighbours.push(grid[i + 1][j])
        }
        if (j > 0) {
            this.neighbours.push(grid[i][j - 1])
        }
        if (j < rows - 1) {
            this.neighbours.push(grid[i][j + 1])
        }
        // add diagonals
        if (i > 0 && j < 0) {
            this.neighbours.push(grid[i - 1][j - 1])
        }

        if (i > 0 && j < rows - 1) {
            this.neighbours.push(grid[i - 1][j + 1])
        }
        if (i < cols - 1 && j < rows - 1) {
            this.neighbours.push(grid[i + 1][j + 1])
        }

        if (i < cols - 1 && j > 0) {
            this.neighbours.push(grid[i + 1][j - 1])
        }
    }

    drawAline() {
        beginShape()
        stroke(255)
        noFill()
        vertex(this.i * w, this.j * h)
        endShape()
    }

}