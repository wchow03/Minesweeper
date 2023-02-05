// Start with 8x8 grid of minesweeper
// Easy: 8x8, 9 mines
// Medium: 8x16, 40 mines
// Hard: 16x16: 99 mines
// Accessing array is board[y][x]
// 0 = empty square      | 1 = 1 mine  connected  | 2 = 2 mines connected | 3 = 3 mines connected | 4 = 4 mines connected  | 5 = 5 mines connected
// 6 = 6 mines connected | 7 = 7 mines connected  | 8 = 8 mines connected | 9 = bomb              | 10 = flag              | 11 = cell cover

// rows represents y
// cols represents x

const board = []; // Contains a 2D array of cells
export function makeBoard(rows, cols) {
    // 2D array of divs each with an (x,y) pair
    for (let y = 0; y < rows; y++) {
        let rowArr = [];
        for (let x = 0; x < cols; x++) {
            const status = 0;
            const square = document.createElement('div');
            const cell = {square, status, x, y};
            rowArr.push(cell);
        }
        board.push(rowArr);
    }
    console.log("MINESWEEPER");
    createMines(99, rows, cols);
    numberCells(rows, cols);
    return board;
}

function createMines(numMines, rows, cols) {

    for (let i = 0; i < numMines; i++) {
        let xPos = Math.floor(Math.random() * cols);
        let yPos = Math.floor(Math.random() * rows);
        console.log(`(${xPos}, ${yPos})`);
        let curCell = board[yPos][xPos];
        if (curCell.status == 0) {
            curCell.status = 9;
        } else if (curCell.status == 9) {
            i--;
        }
        let bomb = document.createElement('img');
        bomb.src = "./images/bomb.png";
        bomb.style.width = "100%";
        bomb.style.height = "100%";
        curCell.square.append(bomb);
    }
}

function numberCells(rows, cols) {
    for (let y = 1; y < rows-1; y++) {
        for (let x = 1; x < cols-1; x++) {
            let curCell = board[y][x];
            if (curCell.status != 9) {
                numberCell(curCell);
            }
        }
    }
}

function numberCell(cell) {
    let xPos = cell.x;
    let yPos = cell.y;
    let count = 0;
    for (let y = yPos-1; y <= yPos+1; y++) {
        for (let x = xPos-1; x <= xPos+1; x++) {
            let curCell = board[y][x];
            if (curCell.status == 9) {
                count++;
            }
        }
    }

    cell.status = count;
    if (cell.status == 1) {
        let one = document.createElement('img');
        one.src = "./images/one.png";
        one.style.width = "100%";
        one.style.height = "100%";
        cell.square.append(one);
    } 

    if (cell.status == 2) {
        let two = document.createElement('img');
        two.src = "./images/two.png";
        two.style.width = "100%";
        two.style.height = "100%";
        cell.square.append(two);
    }

    if (cell.status == 3) {
        let three = document.createElement('img');
        three.src = "./images/three.png";
        three.style.width = "100%";
        three.style.height = "100%";
        cell.square.append(three);
    }

    if (cell.status == 4) {
        let four = document.createElement('img');
        four.src = "./images/four.png";
        four.style.width = "100%";
        four.style.height = "100%";
        cell.square.append(four);
    }

    if (cell.status == 5) {
        let five = document.createElement('img');
        five.src = "./images/five.png";
        five.style.width = "100%";
        five.style.height = "100%";
        cell.square.append(five);
    } 

    if (cell.status == 6) {
        let six = document.createElement('img');
        six.src = "./images/six.png";
        six.style.width = "100%";
        six.style.height = "100%";
        cell.square.append(six);
    }

    if (cell.status == 7) {
        let seven = document.createElement('img');
        seven.src = "./images/seven.png";
        seven.style.width = "100%";
        seven.style.height = "100%";
        cell.square.append(seven);
    } 

    if (cell.status == 8) {
        let eight = document.createElement('img');
        eight.src = "./images/eight.png";
        eight.style.width = "100%";
        eight.style.height = "100%";
        cell.square.append(eight);
    }

    

}


