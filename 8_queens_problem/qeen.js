class Queen {
    constructor(i, j) {
        this.j = j
        this.i = i
        this.top_path = []
        this.down_path = []
        this.left_path = []
        this.right_path = []
    }

    queenPath(grid, i, j) {
        // horizontal path
        let x = i
        let y = j
        while (x >= 0 && x < 8) {
            let path = grid[x][y]

            if (!this.top_path.includes(path)) {
                this.top_path.push(grid[x][y])
            }
            x += 1
        }


        // vertical path
        x = i
        y = j
        while (y < 8) {
            let path = grid[x][y]
            if (!this.down_path.includes(path)) {
                this.down_path.push(path)
            }
            y += 1
        }


    }


}