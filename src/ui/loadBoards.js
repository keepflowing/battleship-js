/**
 * @param {Player} p
 * @param {Player} e
 */
const drawBoard = (p, e) => {
  const pBoard = document.createElement('div');
  pBoard.classList.add('gameboard');
  const keyArr = Object.keys(p.gameboard.squares);
  for (let i = 0; i < keyArr.length; i++) {
    const square = document.createElement('div');
    if (p.ai) {
      square.classList.add('enemy');
      square.addEventListener('click', () => {
        e.fire(keyArr[i], p);
        square.classList.add('attacked');
        if (p.gameboard.squares[keyArr[i]].hasShip) {
          square.classList.add('ship');
          if (p.gameboard.allSunk()) console.log('Game over!');
        }
      });
    }
    square.classList.add('square');
    if (p.gameboard.squares[keyArr[i]].attacked) {
      square.classList.add('attacked');
    }
    if (!p.ai && p.gameboard.squares[keyArr[i]].hasShip) {
      square.classList.add('ship');
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
  drawBoard(p1, p2);
  drawBoard(p2, p1);
};

export default loadBoards;
