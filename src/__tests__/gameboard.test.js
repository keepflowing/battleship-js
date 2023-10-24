import Gameboard from '../class/Gameboard';
const gameboard = new Gameboard();

describe('Gameboard', () => {
  it('to place a rotated ship starting on the specified square', () => {
    gameboard.init();
    gameboard.placeShip('A1', 3, true);
    expect(gameboard.squares['A1'].hasShip).toBe(1);
    expect(gameboard.squares['B1'].hasShip).toBe(1);
    expect(gameboard.squares['C1'].hasShip).toBe(1);
  });

  it('to place a ship starting on the specified square', () => {
    gameboard.init();
    gameboard.placeShip('A1', 3, false);
    expect(gameboard.squares['A1'].hasShip).toBe(1);
    expect(gameboard.squares['A2'].hasShip).toBe(1);
    expect(gameboard.squares['A3'].hasShip).toBe(1);
  });
});
