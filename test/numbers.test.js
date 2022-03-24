const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const { generateNumber, generateNumberArray } = require('../helpers/number');

describe('Testing number', () => {
    it('should return a number', function() {
        const number = generateNumber();
        assert.typeOf(number, 'number');
    })
});

describe('Testing numbers', () => {
  it('should return an array', function() {
    const numbers = generateNumberArray();
    assert.typeOf(numbers, 'array');
    })
});

