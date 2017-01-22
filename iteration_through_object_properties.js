// Example: JSON object with loop through it
var s2 = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}',
  obj2 = JSON.parse(s2);

console.log(obj2.first_name);

// It is useful/necessary to include hasOwnProperty into for...in loop
// The reason behind is that we want to avoid numerable properties based on prototype chaining idea (inheritance)

for (var key in obj2) {
  if (obj2.hasOwnProperty(key)) {
    console.log(key);
    console.log(obj2[key]);
  }
}

// The Object.keys() method returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
// Simply said: It is not necessary to include hasOwnProperty

Object.keys(obj2).forEach(function(key) {
  console.log(key);
  console.log(obj2[key]);
});