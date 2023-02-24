const cols = 8
const rows = 8
const size = 400
const w = size / cols
const h = size / rows
const grid = new Array(cols)

class cell {
    constructor(i, j) {
        this.i = i
        this.j = j
        this.has_queen = false
        this.queen_pos = [0, 0]
    }

    drawCell(col) {
        fill(col)
        rect(this.i * w, this.j * h, w - 1, h - 1)
    }

    drawQueen() {
        let i = this.i
        let j = this.j
        fill(0, 0, 255)
        rect(i * w + w / 4, j * h + h / 4, w / 2, h / 2)
    }


}