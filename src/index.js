import './style.css';
import Player from './class/Player';
import loadBoards from './ui/loadBoards';
import Ship from './class/Ship';

const p1 = new Player('p1');
const p2 = new Player('p2', true);
p1.gameboard.init();
p2.gameboard.init();


p2.gameboard.placeShip('G5', new Ship(2, 4, true));

p2.fire('A1', p1);

console.log(p2.gameboard.squares);

loadBoards(p1, p2);
