/*
  partial function tests based on partial application examples
  Copyright © 2010 “Cowboy” Ben Alman
  dual licensed under the MIT and GPL licenses
  http://benalman.com/news/2012/09/partial-application-in-javascript/
*/

const expect = require('chai').expect;

const partial = require('../../../lib/partial');

describe('partial', function() {
  it('should partially apply any number of arguments to a function', function() {
    function addAllTheThings() {
      var sum = 0;
      for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
      return sum;
    }

    var addOne = partial(addAllTheThings, 1);
    var addTen = partial(addAllTheThings, 1, 2, 3, 4);

    expect(addOne()).to.equal(1);
    expect(addOne(2)).to.equal(3);
    expect(addOne(2, 3)).to.equal(6);
    expect(addOne(4, 9, 16, 25)).to.equal(55);
    expect(addTen()).to.equal(10);
    expect(addTen(2)).to.equal(12);
    expect(addTen(2, 3)).to.equal(15);
    expect(addTen(4, 9, 16, 25)).to.equal(64);
  });
});
