// JSON object (JSON) is a subset of the object literal notation of JavaScript. In other words, valid JSON is also valid JavaScript object literal notation but not necessarily the other way around. 
// In context of JavaScript we can see: JSON object, JSON string
// JSON supports following simple data types: strings, numbers, objects, arrays, Booleans (true or false), null

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

// JSON.parse()
// Function converts JSON string to an object

var s2 = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}',
	obj2 = JSON.parse(s2);

console.log(obj2.first_name);