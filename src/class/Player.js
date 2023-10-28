import Gameboard from './Gameboard';

/**
 * @module Player
 */
export default class Player {
  /**
   * @param {string} name
   * @param {bool} [ai=false]
   */
  constructor(name, ai = false) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.ai = ai;
  }

  /**
   * @param {string} coord
   * @param {Player} enemy
   * @return {bool}
   */
  fire(coord, enemy) {
    let output;
    if (this.ai) output = document.querySelector('#p2');
    else output = document.querySelector('#p1');
    if (!enemy.gameboard.squares[coord].attacked) {
      const ship = enemy.gameboard.recieveAttack(coord);
      if (ship) {
        if (ship.isSunk()) {
          output.innerText =
          (`${this.name} has sunken ${enemy.name}'s ${ship.id}`);
        } else {
          output.innerText = (`${this.name} has hit a ship on ${coord}`);
        }
      } else {
        output.innerText = (`${this.name} attacks ${coord}, it's a miss.`);
      }

      if (enemy.gameboard.allSunk()) {
        output.innerText = (`Game Over! ${this.name} wins!`);
      }
      return true;
    } else {
      return false;
    }
  }

  /**
   * @param {Player} enemy
   * @return {string}
   */
  randomFire(enemy) {
    const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const col = Math.floor(Math.random() * 10);
    const row = Math.floor(Math.random() * 10) + 1;
    const coord = `${cols[col]}${row}`;
    if (!this.fire(coord, enemy)) {
      return this.randomFire(enemy);
    } else {
      return coord;
    }
  }
}
