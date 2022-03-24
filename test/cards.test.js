const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const { generateCard, generateCardArray  } = require('../helpers/card');

describe('Testing card', () => {
    it('should return a card', function() {
        const card = generateCard();
        assert.typeOf(card, 'array');
        assert.lengthOf(card, 5);
    })
});

describe('Testing cards', () => {
  it('should return an array', function() {
    const cards = generateCardArray();
    assert.typeOf(cards, 'array');
    assert.lengthOf(cards, 6);
    })
});
