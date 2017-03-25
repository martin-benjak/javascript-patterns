var global = 'Hello, I am a global variable :)',
    math = [88, 70, 45, 89, 34, 9];

(function (myGrades) {
  // We keep these variables private inside this closure scope
  
  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item;},
    0);
    
      return 'Your average grade is ' + total / myGrades.length + '.';
  };

  var failing = function(){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});
      
    return 'You failed ' + failingGrades.length + ' times.';
  };

  console.log(failing());

}(math));