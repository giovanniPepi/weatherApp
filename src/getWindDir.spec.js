const getWindDir = require('./getWindDir');

describe('getWindDir', () => {
  test('0 should result in North', () => {
    expect(getWindDir(0)).toBe('North');
  });
  test('10 should result in North', () => {
    expect(getWindDir(10)).toBe('North');
  });
  test('46 should result in Northeast', () => {
    expect(getWindDir(46)).toBe('Northeast');
  });
  test('89 should result in Northeast', () => {
    expect(getWindDir(89)).toBe('Northeast');
  });
  test('90 should result in East', () => {
    expect(getWindDir(90)).toBe('East');
  });
  test('91 should result in East', () => {
    expect(getWindDir(91)).toBe('East');
  });
  test('134 should result in East', () => {
    expect(getWindDir(134)).toBe('East');
  });
  test('135 should result in Southeast', () => {
    expect(getWindDir(135)).toBe('Southeast');
  });
  test('179 should result in Southeast', () => {
    expect(getWindDir(179)).toBe('Southeast');
  });
  test('180 should result in South', () => {
    expect(getWindDir(180)).toBe('South');
  });
  test('224 should result in South', () => {
    expect(getWindDir(224)).toBe('South');
  });
  test('225 should result in Southwest', () => {
    expect(getWindDir(225)).toBe('Southwest');
  });
  test('269 should result in Southwest', () => {
    expect(getWindDir(269)).toBe('Southwest');
  });
  test('270 should result in West', () => {
    expect(getWindDir(270)).toBe('West');
  });
  test('314 should result in West', () => {
    expect(getWindDir(314)).toBe('West');
  });
  test('315 should result in Northwest', () => {
    expect(getWindDir(315)).toBe('Northwest');
  });
  test('359 should result in Northwest', () => {
    expect(getWindDir(359)).toBe('Northwest');
  });
  test('360 should result in North', () => {
    expect(getWindDir(360)).toBe('North');
  });
});
