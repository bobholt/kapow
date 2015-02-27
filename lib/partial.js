/*
  partial function Copyright © 2010 “Cowboy” Ben Alman
  dual licensed under the MIT and GPL licenses
  http://benalman.com/news/2012/09/partial-application-in-javascript/
*/

module.exports = function partial(fn /*, args...*/) {
  // A reference to the Array#slice method.
  var slice = Array.prototype.slice;

  // Convert arguments object to an array, removing the first argument.
  var args = slice.call(arguments, 1);

  return function() {
    // Invoke the originally-specified function, passing in all originally-
    // specified arguments, followed by any just-specified arguments.
    return fn.apply(this, args.concat(slice.call(arguments, 0)));
  };
};
