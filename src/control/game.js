import Player from '../class/Player';
import Ship from '../class/Ship';
import loadMenu from '../ui/loadMenu';
import loadBoards from '../ui/loadBoards';

const init = () => {
  const menuPlayer = new Player('start');
  const menu = loadMenu(menuPlayer);
  document.body.appendChild(menu);
  const startBtn = document.getElementById('startButton');
  startBtn.addEventListener('click', () => {
    start();
  });
};

const start = () => {
  const p1 = new Player('p1');
  const p2 = new Player('p2', true);
  p1.gameboard.randomPlaceShips();
  p2.gameboard.randomPlaceShips();

  p2.gameboard.placeShip('G5', new Ship(2, 4, true));

  const boards = loadBoards(p1, p2);
  document.body.innerHTML = '';
  document.body.appendChild(boards[0]);
  document.body.appendChild(boards[1]);
};

export {init, start};