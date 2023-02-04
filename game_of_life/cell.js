const cols = 50
const rows = 50
let w, h
const grid = new Array(cols)

class Cell {
    constructor(i, j, w, h) {
        this.i = i
        this.j = j
        this.w = w
        this.h = h
        this.neighbours = []
        this.alive = Math.random() < 0.2 ? true : false
    }



    show() {
        fill(this.alive ? color(255, 0, 0) : 255)
        rect(this.i * this.w, this.j * this.h, this.w - 1, this.h - 1)
    }

    addNeighbours(grid) {
        if (this.i < cols - 1) {
            this.neighbours.push(grid[this.i + 1][this.j])
        }
        if (this.i > 0) {
            this.neighbours.push(grid[this.i - 1][this.j])
        }
        if (this.j < rows - 1) {
            this.neighbours.push(grid[this.i][this.j + 1])
        }
        if (this.j > 0) {
            this.neighbours.push(grid[this.i][this.j - 1])
        }

        if (this.i < cols - 1 && this.j > 0) {
            this.neighbours.push(grid[this.i + 1][this.j - 1])
        }
        if (this.i > 0 && this.j > 0) {
            this.neighbours.push(grid[this.i - 1][this.j - 1])
        }
        if (this.i > 0 && this.j < rows - 1) {
            this.neighbours.push(grid[this.i - 1][this.j + 1])
        }
        if (this.i < cols - 1 && this.j < rows - 1) {
            this.neighbours.push(grid[this.i + 1][this.j + 1])
        }
    }
}



