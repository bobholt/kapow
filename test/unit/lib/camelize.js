const expect = require('chai').expect;

const camelize = require('../../../lib/camelize');

describe('camelize', function() {
  it('should lowercase a single word', function() {
    expect(camelize('Tiddlywinks')).to.equal('tiddlywinks');
  });

  it('should camelize phrases', function() {
    expect(camelize('Method Not Allowed')).to.equal('methodNotAllowed');
  });

  it('should ignore quotemarks', function() {
    expect(camelize('I\'m a teapot')).to.equal('imATeapot');
    expect(camelize('I"m a teapot')).to.equal('imATeapot');
  });

  it('should ignore variable-okay special characters', function() {
    expect(camelize('-_.')).to.equal('');
  });
});
