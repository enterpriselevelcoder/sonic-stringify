'use strict';

var chai = require('chai');
const assert = chai.assert;
const stringify = require('../lib');

describe('stringify', () => {
  const check = o => () => assert.equal(stringify(o), JSON.stringify(o));

  it("should parse string", check('string'));
  it('should parse string with special chars', check('this"is a \\test'));
  it('should parse string with unicode chars', check('this \\\"\x00is a test'));
  it("should parse number", check(10));
  it("should parse true", check(true));
  it("should parse false", check(false));
  it("should parse null", check(null));
  it("should parse array", check(['one', 'two', 1, { string: 'string'}]));
  it("should parse empty object", check({}));
  it("should parse string prop", check({ string: 'string' }));
  it("should parse number prop", check({ string: 'string', number: 1 }));
  it("should parse boolean prop", check({ string: 'string', number: 1, bool: false, bool: true }));
  it("should parse date prop", check({ string: 'string', number: 1, bool: false, bool: true, date: new Date() }));
  it("should parse array prop of strings", check({ array: ['one', 'two'] }));
  it("should parse array prop of differing values", check({ array: ['one', 2, false, null, { value: 'five', or: 2}] }));
  it("should parse null prop", check({ array: ['one', 'two'], nothing: null }));
  it("should parse object prop", check({ string: 'string', address: { streetAddress: '21st street', city: 'New York', state: 'NY'}}));
  it("should parse functions", check({ string: 'string', doSomething: () => {} }));
});