/**
 * @param {Player} p
 */
const drawBoard = (p) => {
  const pBoard = document.createElement('div');
  pBoard.classList.add('gameboard');
  const keyArr = Object.keys(p.gameboard.squares);
  for (let i = 0; i < keyArr.length; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    if (p.gameboard.squares[keyArr[i]].attacked) {
      square.classList.add('attacked');
    }
    square.innerText = keyArr[i];
    pBoard.appendChild(square);
  }
  document.body.appendChild(pBoard);
};

/**
 * @param {Player} p1
 * @param {Player} p2
 */
const loadBoards = (p1, p2) => {
  drawBoard(p1);
  drawBoard(p2);
};

export default loadBoards;
