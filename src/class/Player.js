import Gameboard from './Gameboard';
/**
 * @module Player
 */
export default class Player {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
  }

  /**
   * @param {string} coord
   * @param {Player} enemy
   */
  fire(coord, enemy) {
    if (!enemy.gameboard.squares[coord].attacked) {
      enemy.gameboard.recieveAttack(coord);
    } else {
      throw new Error('You cannot attack the same square twice!');
    }
  }
}
