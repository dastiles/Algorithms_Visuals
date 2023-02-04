
const removeFromArray = (elt, arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == elt) {
            arr.splice(i, 1)

        }
    }
}

const heuristic = (a, b) => {
    let d = dist(a.i * w, a.j * h, b.i * w, b.j * h)
    return d
}

i = 0
kl = [2, 3, 4, -5, 0, 2]

console.log(kl.sort())

function setup() {
    createCanvas(size, size)

    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows)
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Point(i, j)
        }
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].addNeighbours(grid)
        }
    }

    start = grid[0][0]
    end = grid[floor(random(cols - 1))][floor(random(rows - 1))]
    queue.push(start)
    start.wall = false
    end.wall = false

}


function draw() {
    background(0)
    let current = queue[queue.length - 1]
    if (queue.length > 0) {
        let neighbours = current.neighbours
        let winner = 0
        let f_dists = []
        let neighbourVisits = 0
        // console.log(current)
        for (let i = 0; i < neighbours.length; i++) {
            if (!queue.includes(neighbours[i]) && !visited.includes(neighbours[i]) && !neighbours[i].wall) {
                let neighbour = neighbours[i]
                neighbour.g = neighbour.g + neighbour.distance
                neighbour.h = heuristic(neighbour, end)
                neighbour.f = neighbour.g + neighbour.h
                f_dists.push(neighbour.f)
                neighbourVisits = i + 1
            }
        }
        let sorted_f_dist = f_dists.sort()
        for (let i = 0; i < neighbours.length; i++) {
            if (!queue.includes(neighbours[i]) && !visited.includes(neighbours[i]) && !neighbours[i].wall) {

                if (neighbours[i].f == sorted_f_dist[0]) {
                    winner = i
                    queue.push(neighbours[i])
                    visited.push(neighbours[i])


                }
            }
        }



        if (neighbourVisits <= 0) {
            removeFromArray(queue[queue.length - 1], queue)
        }


        if (current == end) {
            noLoop()
            console.log('done')
        }




    }



    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].show(color(255))
        }
    }



    for (let i = 0; i < visited.length; i++) {
        visited[i].show(color(255, 0, 0))
    }

    for (let i = 0; i < queue.length; i++) {
        queue[i].show(color(0, 0, 255))
    }



    queue[queue.length - 1].show(color(0, 255, 0))



    end.show(color(0, 255, 255))
    beginShape()
    stroke(255)
    noFill()
    for (let i = 0; i < queue.length; i++) {
        vertex(queue[i].i * w + w / 2, queue[i].j * h + h / 2)

    }
    endShape()
}