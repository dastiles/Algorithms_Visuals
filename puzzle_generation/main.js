const removeWall = (a, b) => {

    let x = a.i - b.i
    let y = a.j - b.j

    if (x == -1) {
        a.right = false
        b.left = false
    }
    if (x == 1) {
        a.left = false
        b.right = false
    }

    if (y == -1) {
        a.bottom = false
        b.top = false
    }

    if (y == 1) {
        a.top = false
        b.bottom = false
    }
}

function setup() {
    createCanvas(size, size)
    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows)
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j)
        }
    }




    start = grid[0][0]
    queue.push(start)
}


function draw() {
    background(0)

    if (queue.length > 0) {
        let current = queue[queue.length - 1]

        let neighbours = current.addNeighbours(grid)


        let sum = 0

        if (neighbours.length > 0) {
            current.visited = true
            let index = floor(random(neighbours.length))
            let nextCurrent = neighbours[index]
            removeWall(current, nextCurrent)
            nextCurrent.visited = true
            visited.push(current)
            queue.push(nextCurrent)
            current = nextCurrent

        } else {
            queue.pop()
        }
        current.drawCell(color(255, 0, 255))
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].drawLine()
        }
    }
}