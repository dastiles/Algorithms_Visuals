const size = 600
const cols = 50
const rows = 50
const grid = new Array(cols)

const queue = []
const visited = []

let w = size / rows
let h = size / cols


class Cell {
    constructor(i, j) {
        this.i = i
        this.j = j
        this.top = true
        this.bottom = true
        this.right = true
        this.left = true
        this.visited = false
    }

    drawLine() {
        noFill()
        stroke(255)
        let i = this.i * w
        let j = this.j * h
        if (this.top) {
            line(i, j, i + w, j)
        }
        if (this.left) {
            line(i, j + w, i, j)
        }
        if (this.bottom) {
            line(i + w, j + h, i, j + h)
        }

        if (this.right) {
            line(i + w, j, i + w, j + h)
        }
    }

    drawCell(col) {
        noStroke()
        fill(col)
        rect(this.i * w, this.j * h, w - 1, h - 1)
    }

    addNeighbours(grid) {
        let i = this.i
        let j = this.j
        let visit = this.visited
        const neighbours = []

        if (i > 0) {
            let grid_n = grid[i - 1][j]
            if (grid_n.visited == false) {
                neighbours.push(grid_n)
            }
        }
        if (i < cols - 1) {
            let grid_n = grid[i + 1][j]
            if (grid_n.visited == false) {
                neighbours.push(grid_n)
            }

        }

        if (j > 0) {
            let grid_n = grid[i][j - 1]
            if (grid_n.visited == false) {
                neighbours.push(grid_n)
            }

        }
        if (j < rows - 1) {
            let grid_n = grid[i][j + 1]
            if (grid_n.visited == false) {
                neighbours.push(grid_n)
            }

        }

        return neighbours
    }

}