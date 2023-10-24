/**
 * @module Gameboard
 */
export default class Gameboard {
  /**
   * rows, letters A-J
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
   * @param {int} length
   * @param {bool} rotated
   */
  placeShip(square, length, rotated) {
    const first = this.squares[square];
    const col = this.cols.indexOf(square[0]);
    const row = parseInt(square[1]);
    if (!first.hasShip) {
      this.squares[square].hasShip = 1;
      if (rotated) {
        for (let i = col; i < col+length; i++) {
          const s = `${this.cols[i]}${row}`;
          this.squares[s].hasShip = 1;
        }
      } else {
        for (let i = row; i < row+length; i++) {
          const s = `${this.cols[col]}${i}`;
          this.squares[s].hasShip = 1;
        }
      }
    } else {
      throw new Error('The square is occupied!');
    }
  }
}
