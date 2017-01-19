// Array-like object - Examples are arguments array or DOM HTML Collection 
// To enable all array relevant methods is necessary to convert array-like object to array

// Array-like object: DOM HTML Collection
var test = Array.prototype.slice.call(document.querySelectorAll('a[href]'));

test.forEach(function(element) {
	element.setAttribute('href', 'TEST');
});

// Array-like object: DOM HTML Collection - Neat shortcut
[].slice.call(document.querySelectorAll('a[href]')).forEach(element => element.setAttribute('href', 'TEST'));

// Array-like object: arguments
// Arguments is a special variable that is available inside the body of every function. It is in fact, the list of arguments that were passed in.
var testFunction = function() {

  var args = Array.prototype.slice.call(arguments);

  var a = args.shift();
  console.log("The first argument is: %s", a);

};

testFunction('test');

// Array - this is the name of the base object that we want
// Prototype - this can be thought of as the namespace for the instance methods of an array\
// Slice - this extracts a section of an array and returns a new array, and without a beginning and ending index, it simply returns a copy of the array
// call - this is a very useful function, it allows you to call a function from one object and use it in the context of another

