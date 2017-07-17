// const and let are block scope, not function scope as var
const key = 'abc123';
let points = 50;
let winner = false;

if(points > 40) {
   let winner = true;
   console.log(winner); // true
}

console.log(winner); // false

// OK - winner can be updated
winner = true;

// Error - key is const and can't be updated
key = 'ccc';