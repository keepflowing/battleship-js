/**
 * @module Ship
 */
export default class Ship {
  /**
   * Creates Ship of length n
   * @param {int} length
   */
  constructor(length) {
    this.length = length;
    this.hits = new Array(length);
  }

  /**
   * Add a hit on index n
   * @param {int} n
   */
  hit(n) {
    this.hits[n] = 1;
  }
}
