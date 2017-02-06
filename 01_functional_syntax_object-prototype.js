// Definition of constructor
function Pet(name, species){
	this.name = name;
	this.species = species;
}

// Definigion of standard function
function view(){
	return this.name + ' is a ' + this.species + '!';
}

// Adding view method into Pet constructor
// It means that all object based on Pet have view method
Pet.prototype.view = view;

// Definition of an instance of Pet
var pet1 = new Pet('Gabriella', 'Dog');

//Outputs 'Gabriella is a Dog!''
console.log(pet1.view());

// ----------------------------------

function PetA(name, species) {
	this.name = name;
	this.species = species;
}

function view() {
	return this.name + ' is a ' + this.species + '!';
}

PetA.prototype.view = view;

// The call() method calls a function with a given this value and arguments provided individually.
function Dog(name) {
    PetA.call(this, name, 'dog');
}

Dog.prototype = new PetA();
Dog.prototype.bark = function(){
	console.log('Woof!');
}

var pet3 = new PetA('Trudy', 'Bird');
var pet4 = new Dog('Gabriella');

// Outputs "Gabriella is a Dog!"
console.log(pet3.view());

// Outputs "Woof!"
pet4.bark();

// Error
try {
	pet3.bark();	
}
catch(err) {
	console.log(err);
}


// It is important to understand that prototype follows a chain
Object.prototype.whoAmI = function(){
	console.log('I am an object!');
}

//Outputs 'I am an object!'
pet3.whoAmI();
pet4.whoAmI();