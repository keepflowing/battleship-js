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
    if (!enemy.gameboard.squares[coord].attacked) {
      enemy.gameboard.recieveAttack(coord);
      if (enemy.gameboard.allSunk()) {
        alert(`Game Over! ${this.name} wins!`);
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
