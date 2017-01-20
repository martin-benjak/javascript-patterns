//  Functions for Working with JSON
//  JSON.stringify()
//  Function converts an object to a JSON string
//  Strings are useful for transporting data from a client to a server
var obj = {
	firstName : "Sammy",
	lastName : "Shark",
	location : "Ocean"
};

var s = JSON.stringify(obj);