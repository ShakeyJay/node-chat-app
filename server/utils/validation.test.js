const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var message = isRealString(8);

    expect(message).toBe(false);
  });

  it('should reject string with only white spaces', () => {
    var message = isRealString('    ');

    expect(message).toBe(false);
  });

  it('should allow string with non-space chars', () => {
    var message = isRealString(' Josh  ');

    expect(message).toBe(true);
  });
});
