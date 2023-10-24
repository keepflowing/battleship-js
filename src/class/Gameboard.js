/**
 * @module Gameboard
 */
export default class Gameboard {
  /**
   * Columns, letters A-J
   */
  constructor() {
    this.cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  }
  /**
   * Init
   */
  init() {
    this.squares = {};
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const key = `${this.cols[i]}${j+1}`;
        this.squares[key] = {hasShip: 0};
      }
    }
  }
  /**
   * @param {string} square
   * @param {Ship} ship
   * @param {bool} rotated
   */
  placeShip(square, ship, rotated) {
    const first = this.squares[square];
    const col = this.cols.indexOf(square[0]);
    const row = parseInt(square[1]);
    if (!first.hasShip) {
      this.squares[square].hasShip = ship.id;
      if (rotated) {
        for (let i = col; i < col+ship.length; i++) {
          const s = `${this.cols[i]}${row}`;
          this.squares[s].hasShip = ship.id;
        }
      } else {
        for (let i = row; i < row+ship.length; i++) {
          const s = `${this.cols[col]}${i}`;
          this.squares[s].hasShip = ship.id;
        }
      }
    } else {
      throw new Error('The square is occupied!');
    }
  }
}
