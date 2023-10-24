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
        this.squares[key] = {hasShip: false};
      }
    }
  }

  /**
   * Recieve attack
   * @param {string} coord
   */
  recieveAttack(coord) {
    const square = this.squares[coord];
    square.attacked = true;
    const ship = square.hasShip;
    if (ship) {
      const col = this.cols.indexOf(coord[0]);
      const row = parseInt(coord[1]);
      let count = 0;
      // if ship is rotated
      if (ship.rotated) {
        for (let i = 0; i < 10; i++) {
          const s = `${this.cols[i]}${row}`;
          if (this.squares[s].hasShip) {
            if (this.squares[s].hasShip.id === ship.id) {
              if (s === coord) {
                break;
              } else {
                count++;
              }
            }
          }
        }
      } else {
        // start from 1 since A0 etc doesn't exist
        for (let i = 1; i < 11; i++) {
          const s = `${this.cols[col]}${i}`;
          if (this.squares[s].hasShip) {
            if (this.squares[s].hasShip.id === ship.id) {
              if (s === coord) {
                break;
              } else {
                count++;
              }
            }
          }
        }
      }
      ship.hit(count);
    }
  }

  /**
   * @param {string} square
   * @param {Ship} ship
   * @param {bool} rotated
   */
  placeShip(square, ship) {
    const first = this.squares[square];
    const col = this.cols.indexOf(square[0]);
    const row = parseInt(square[1]);
    if (!first.hasShip) {
      this.squares[square].hasShip = ship;
      if (ship.rotated) {
        for (let i = col; i < col+ship.length; i++) {
          const s = `${this.cols[i]}${row}`;
          this.squares[s].hasShip = ship;
        }
      } else {
        for (let i = row; i < row+ship.length; i++) {
          const s = `${this.cols[col]}${i}`;
          this.squares[s].hasShip = ship;
        }
      }
    } else {
      throw new Error('The square is occupied!');
    }
  }
}
