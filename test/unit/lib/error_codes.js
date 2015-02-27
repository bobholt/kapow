const expect = require('chai').expect;

const errorCodes = require('../../../lib/error_codes');

describe('errorCodes', function() {
  it('should be an object', function() {
    expect(errorCodes).to.be.an('object');
  });
});
