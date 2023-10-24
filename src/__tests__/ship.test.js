import Ship from '../class/Ship';

describe('Ship', () => {
  test('create', () => {
    expect(new Ship(3, 4, true)).toBeTruthy();
  });

  test('not sunk', () => {
    const ship = new Ship(5, 5, true);
    expect(ship.isSunk()).toBe(false);
  });

  test('is sunk', () => {
    const ship = new Ship(1, 2, true);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
  });

  test('return array with hits', () => {
    const ship = new Ship(1, 2, false);
    ship.hit(1);
    expect(ship.hits[0]).toBeFalsy;
    expect(ship.hits[1]).toBe(1);
  });
});


