// Basic Syntax with One Parameter
// ES5
var phraseSplitterEs5 = function(phrase) {
	return phrase.split(' ');
};

// ES6
var phraseSplitterEs6 = phrase => phrase.split(' ');

// No Parameters
// ES5
var docLogEs5 = function() {
	console.log(document);
};

// ES6
var docLogEs6 = () => { console.log(document); };

// Object Literal Syntax
// ES5
var setNameIdsEs5 = function() {
	return {
		id: id,
		name: name
	};
};

// ES6
var setNameIdsEs6 = (id, name) => ({ id: id, name: name });

// Typical use case 
var smartPhones = [
	{ name:'iphone', price: 649 },
	{ name:'Galaxy S6', price: 576 },
	{ name:'Galaxy Note 5', price: 489 }
];

// ES5
console.log(smartPhones.map(
    function(smartPhone) {
		return smartPhone.price;
    }
)); // [649, 576, 489]

// ES6
console.log(smartPhones.map(
	smartPhone => smartPhone.price
)); // [649, 576, 489]