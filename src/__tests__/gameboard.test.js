import Ship from '../class/Ship';
import Gameboard from '../class/Gameboard';
const gameboard = new Gameboard();

describe('Gameboard', () => {
  it('to place a rotated ship starting on the specified square', () => {
    gameboard.init();
    gameboard.placeShip('A1', new Ship(3, 4), true);
    expect(gameboard.squares['A1'].hasShip).toBe(3);
    expect(gameboard.squares['B1'].hasShip).toBe(3);
    expect(gameboard.squares['C1'].hasShip).toBe(3);
    expect(gameboard.squares['D1'].hasShip).toBe(3);
  });

  it('to place a ship starting on the specified square', () => {
    gameboard.init();
    gameboard.placeShip('A1', new Ship(2, 3), false);
    expect(gameboard.squares['A1'].hasShip).toBe(2);
    expect(gameboard.squares['A2'].hasShip).toBe(2);
    expect(gameboard.squares['A3'].hasShip).toBe(2);
  });
});
