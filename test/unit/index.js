const expect = require('chai').expect;
const _ = require('lodash');

const Kapow = require('../../');
const errorCodes = require('../../lib/error_codes');

describe('Kapow', function () {
  describe('lib', function() {
    require('./lib/camelize');
    require('./lib/error_codes');
    require('./lib/partial');
    require('./lib/request_error');
    require('./lib/wrap');
  });

  it('should return a function', function() {
    expect(Kapow).to.be.a('function');
  });

  it('should return an error object when invoked with the new keyword', function() {
    expect(new Kapow()).to.be.instanceof(Error);
  });

  it('should not require the `new` keyword', function() {
    expect(Kapow()).to.be.instanceof(Error);
  });

  it('should have a static method `wrap`', function() {
    expect(Kapow.wrap).to.be.a('function');
  });

  it('should have all error codes as prototype methods', function() {
    // all error codes are prototype properties
    expect(Kapow.prototype).to.contain.all.keys(errorCodes);
    // all prototype properties are functions
    expect(_.functions(Kapow.prototype)).to.deep.equal(Object.keys(Kapow.prototype));
  });
});
