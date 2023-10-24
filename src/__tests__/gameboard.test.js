import Ship from '../class/Ship';
import Gameboard from '../class/Gameboard';
const gameboard = new Gameboard();

describe('Gameboard', () => {
  test.todo('report if all ships are sunk');
  test('can register a hit on a rotated Ship if a square is attacked', () => {
    gameboard.init();
    const ship = new Ship(3, 4, true);
    gameboard.placeShip('A1', ship);
    gameboard.recieveAttack('C1');
    expect(ship.hits[1]).toBeFalsy();
    expect(ship.hits[2]).toBe(1);
  });

  test('register a hit on a Ship if a square is attacked', () => {
    gameboard.init();
    const ship = new Ship(3, 4, false);
    gameboard.placeShip('A1', ship);
    gameboard.recieveAttack('A3');
    expect(ship.hits[1]).toBeFalsy();
    expect(ship.hits[2]).toBe(1);
  });

  test('recieve an attack at the specified coordinate', () => {
    gameboard.init();
    gameboard.recieveAttack('G1');
    expect(gameboard.squares['G1'].attacked).toBe(true);
  });

  test('place a rotated ship starting on the specified square', () => {
    gameboard.init();
    gameboard.placeShip('A1', new Ship(3, 4, true));
    expect(gameboard.squares['A1'].hasShip).toBeTruthy();
    expect(gameboard.squares['B1'].hasShip).toBeTruthy();
    expect(gameboard.squares['C1'].hasShip).toBeTruthy();
    expect(gameboard.squares['D1'].hasShip).toBeTruthy();
  });

  test('place a ship starting on the specified square', () => {
    gameboard.init();
    gameboard.placeShip('A1', new Ship(2, 3, false));
    expect(gameboard.squares['A1'].hasShip).toBeTruthy();
    expect(gameboard.squares['A2'].hasShip).toBeTruthy();
    expect(gameboard.squares['A3'].hasShip).toBeTruthy();
  });
});
