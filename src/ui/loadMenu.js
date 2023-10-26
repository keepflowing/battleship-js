import loadBoards from './loadBoards';
import Ship from '../class/Ship';

// module
const loadMenu = (p) => {
  p.gameboard.init();
  const board = loadBoards(p);
  const div = document.createElement('div');
  div.id = 'startMenu';
  div.appendChild(board);
  const testSquare = document.createElement('div');
  testSquare.className = 'ship square';
  testSquare.setAttribute('draggable', true);
  testSquare.addEventListener('dragstart', (e) => {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('dragover', (e) => {
        e.preventDefault();
      });
      squares[i].addEventListener('drop', (e) => {
        p.gameboard.placeShip(squares[i].id, new Ship(1, 5, false));
        for (const square in p.gameboard.squares) {
          if (p.gameboard.squares[square].hasShip) {
            document.getElementById(square).classList.add('ship');
          }
        }
      });
    }
  });
  div.appendChild(testSquare);
  const button = document.createElement('button');
  button.id = 'startButton';
  button.innerText = 'Start';
  div.appendChild(button);

  return div;
};

export default loadMenu;
