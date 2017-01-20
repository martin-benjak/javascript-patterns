// How to avoid undefined, null, '', NaN

var zeroValueChecker = function(params) {

	if (params) {
		console.log('params is not zero value');
	}

	else {
		throw new Error('Invalid method arguments');
	}
};

// Object required as param for function (undefined, null and non-object variables are avoided)
// Problem behind is that typeof null === object
var objectChecker = function(param) {

	if (typeof param === 'object' && param) {
		console.log('param is object');
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
