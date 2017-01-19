// object required as input of function (undefined, null and non-object variables are avoided)
var objectChecker = function(params) {

	if (typeof params === 'object' && params) {
		console.log('params is object');
	}
	else {
		throw new Error('Invalid method arguments');
	}

};

var test = {},
	testA = null,
	testB;

objectChecker(test); // OK
objectChecker(testA); // error
objectChecker(testB); // error