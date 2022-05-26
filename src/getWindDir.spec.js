const getWindDir = require('./getWindDir');

describe('getWindDir', () => {
  test('0 should result in North', () => {
    expect(getWindDir(0)).toBe('North');
  });
  test('90 should result in East', () => {
    expect(getWindDir(90)).toBe('East');
  });
  test('180 should result in South', () => {
    expect(getWindDir(180)).toBe('South');
  });
  test('270 should result in West', () => {
    expect(getWindDir(270)).toBe('West');
  });
});
