import {makeBoard} from "./board.js";

let rows = 16;
let cols = 32;
const board = makeBoard(rows, cols);

const curBoard = document.querySelector(".board");

curBoard.style.setProperty("--col", cols);
curBoard.style.setProperty("--row", rows);

board.forEach(row => {
    row.forEach(cell => {
        curBoard.append(cell.square);
        cell.square.addEventListener("click", () => {
            console.log(`(${cell.x}, ${cell.y})`);
        })
    });
})

console.log(board);

console.log(board[0][0].status);



