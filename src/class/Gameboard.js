import Ship from './Ship';
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
        const key = `${this.cols[j]}${i+1}`;
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
   * Check if all ships are sunk
   * @return {bool}
   */
  allSunk() {
    const ships = new Set();
    for (const coord in this.squares) {
      if (this.squares[coord].hasShip) {
        ships.add(this.squares[coord].hasShip);
      }
    }
    for (const ship of ships) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }

  /**
   * @param {string} square
   * @param {Ship} ship
   * @param {bool} rotated
   * @return {bool}
   */
  placeShip(square, ship) {
    if (!square) return false;
    const col = this.cols.indexOf(square[0]);
    const row = parseInt(square[1]);
    const coords = [];
    if (ship.rotated) {
      for (let i = col; i < col+ship.length; i++) {
        const s = `${this.cols[i]}${row}`;
        coords.push(s);
        // this.squares[s].hasShip = ship;
      }
    } else {
      for (let i = row; i < row+ship.length; i++) {
        const s = `${this.cols[col]}${i}`;
        coords.push(s);
      }
    }
    for (let i = 0; i < coords.length; i++) {
      if (!this.squares[coords[i]]) {
        return false;
      } else if (this.squares[coords[i]].hasShip) {
        return false;
      }
    }
    for (let i = 0; i < coords.length; i++) {
      this.squares[coords[i]].hasShip = ship;
    }
    return true;
  }

  /**
   * Place Ships randomly
   * @return {bool}
   */
  randomPlaceShips() {
    const ships = [[1, 5], [2, 4], [3, 3], [4, 3], [5, 2]];
    this.init();
    for (let i = 0; i < ships.length; i++) {
      const col = Math.floor(Math.random() * 10);
      const row = Math.floor(Math.random() * 10) + 1;
      const rot = Math.floor(Math.random() * 2);
      const ship = new Ship(ships[i][0], ships[i][1], rot);
      if (!this.placeShip(`${this.cols[col]}${row}`, ship)) {
        return this.randomPlaceShips();
      }
    }
    return true;
  }
}
