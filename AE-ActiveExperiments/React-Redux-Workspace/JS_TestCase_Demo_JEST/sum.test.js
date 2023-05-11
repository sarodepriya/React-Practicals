const sum = require ('./sum')

test('adds 1 + 2 to equal 3', () => {
    const ans = sum(1,2);
    expect(ans).toBe(3);
  });