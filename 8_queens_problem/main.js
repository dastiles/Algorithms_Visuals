let queen = []

function setup() {
    createCanvas(size, size)

    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows)
    }
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new cell(i, j)
        }
    }
    for (let i = 0; i < 3; i++) {
        queen.push(new Queen())
    }
    console.log(grid)

}

function draw() {
    background(0)
    frameRate(1)
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].drawCell(color(255))
        }
    }

    for (let i = 0; i < queen.length; i++) {
        let rand_y = floor(random(8))
        queen[i].top_path = []
        queen[i].down_path = []
        let grid_queen = grid[i][rand_y]
        queen[i].queenPath(grid, i, rand_y)
        for (let j = 0; j < queen[i].top_path.length; j++) {

            queen[i].top_path[j].drawCell(color(0, 255, 0))
        }
        for (let j = 0; j < queen[i].down_path.length; j++) {
            queen[i].down_path[j].drawCell(color(0, 255, 0))
        }
        grid_queen.drawQueen()

    }

}