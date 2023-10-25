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
   */
  fire(coord, enemy) {
    if (!enemy.gameboard.squares[coord].attacked) {
      enemy.gameboard.recieveAttack(coord);
      console.log(`${this.name} attacks ${enemy.name}`);
    } else {
      throw new Error('You cannot attack the same square twice!');
    }
  }
}
