import Player from '../class/Player';

const p1 = new Player('p2');
const p2 = new Player('p2');

describe('Player', () => {
  test('player can attack the enemy', () => {
    p1.gameboard.init();
    p2.gameboard.init();
    p1.fire('A1', p2);
    expect(p2.gameboard.squares['A1'].attacked).toBeTruthy();
  });
});
