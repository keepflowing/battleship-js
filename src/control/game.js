import Player from '../class/Player';
import loadMenu from '../ui/loadMenu';
import loadBoards from '../ui/loadBoards';

const init = () => {
  const menuPlayer = new Player('start');
  const menu = loadMenu(menuPlayer);
  document.body.appendChild(menu[0]);
  document.body.appendChild(menu[1]);
  const startBtn = document.getElementById('startButton');
  startBtn.addEventListener('click', () => {
    const placers = document.getElementsByClassName('placer');
    if (!placers.length) start(menu[2]);
    else start();
  });
};

const start = (squares = null) => {
  const p1 = new Player('p1');
  const p2 = new Player('p2', true);

  if (squares) p1.gameboard.squares = squares;
  else p1.gameboard.randomPlaceShips();
  p2.gameboard.randomPlaceShips();

  const boards = loadBoards(p1, p2);
  document.body.innerHTML = '';
  document.body.appendChild(boards[0]);
  document.body.appendChild(boards[1]);
};

export {init, start};
