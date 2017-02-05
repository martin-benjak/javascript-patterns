

// There are three ways to create object in JavaScript
// Functional syntax (constructor), Object.create, object literals
// Rules for using a specific way of creating object:
// 		- If you don't have behaviour associated with an object (i.e. if the object is just a container for data/state), I would use an object literal.
// 		- If you want to add behaviour to your object, you can go with a constructor and add methods
 

// Functional syntax (constructor)
var Person = function(firstName, lastName) {
	this.firstName = firstName;
    this.lastName = lastName;
};

var john = new Person('John', 'AAA');

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

console.log(john);

console.log(john.fullName());

// Object.create

var superHuman = {
    usePower: function () {
        console.log(this.superPower + '!');
    }
};

var banshee = Object.create(superHuman, {
    name: { value: 'Silver Banshee' },
    superPower: { value: 'sonic wail' }
});

banshee.usePower();

// Object literal
var config = {
	id: 'js-action',
	action: 'click',
	command: 'open-browser()'
}

console.log(config.id);
console.log(config['id']);



