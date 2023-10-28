import Player from '../class/Player';
import loadMenu from '../ui/loadMenu';
import loadBoards from '../ui/loadBoards';

const div = document.createElement('div');
const p1 = document.createElement('p');
p1.id = 'p1';
const p2 = document.createElement('p');
p2.id = 'p2';
div.classList.add('gb-container');
document.body.appendChild(div);
document.body.appendChild(p1);
document.body.appendChild(p2);

const init = () => {
  div.innerHTML = '';
  const menuPlayer = new Player('start');
  const menu = loadMenu(menuPlayer);
  div.appendChild(menu[0]);
  div.appendChild(menu[1]);
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

  div.innerHTML = '';
  const boards = loadBoards(p1, p2);
  div.appendChild(boards[0]);
  div.appendChild(boards[1]);
};

export {init, start};
