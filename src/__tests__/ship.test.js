import Ship from '../class/Ship';

describe('Ship', () => {
  it('is created', () => {
    expect(new Ship(3, 4)).toBeTruthy();
  });

  it('is not sunk', () => {
    const ship = new Ship(5, 5);
    expect(ship.isSunk()).toBe(false);
  });

  it('is sunk', () => {
    const ship = new Ship(1, 2);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
  });

  it('returns array with hits', () => {
    const ship = new Ship(1, 2);
    ship.hit(1);
    expect(ship.hits[0]).toBeFalsy;
    expect(ship.hits[1]).toBe(1);
  });
});


