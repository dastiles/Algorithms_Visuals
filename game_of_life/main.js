console.log(Math.random())

function setup() {
  createCanvas(400, 400)
  w = width / cols
  h = height / rows
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows)
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w, h)
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].addNeighbours(grid)
    }
  }
  console.log(grid)

}


function draw() {
  background(0)
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show()
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let sum = 0
      cell = grid[i][j]
      neighbours = cell.neighbours
      for (let i = 0; i < neighbours.length; i++) {
        if (neighbours[i].alive) {
          sum += 1
        }
      }
      if (cell.alive) {
        if (sum < 2) {
          cell.alive = false
        } else if (sum == 3 || sum == 2) {
          cell.alive = true
        } else if (sum > 3) {
          cell.alive = false
        }

      } else {
        if (sum == 3) {
          cell.alive = true
        }
      }
    }
  }
}