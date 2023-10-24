import './style.css';
import Player from './class/Player';
import loadBoards from './ui/loadBoards';

const p1 = new Player('p2');
const p2 = new Player('p2');
p1.gameboard.init();
p2.gameboard.init();

p1.fire('A1', p2);
p1.fire('H7', p2);

p2.fire('B10', p1);

console.log(p2.gameboard.squares);

loadBoards(p1, p2);
