const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const { generatePlayers, getWinner  } = require('../index');

describe('Testing players', () => {
    it('should return players', function() {
        const players = generatePlayers();
        assert.typeOf(players, 'array');
        assert.lengthOf(players, 6);
    })
});
