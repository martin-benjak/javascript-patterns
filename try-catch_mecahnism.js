// try-catch-finally statement is a way to handle errors
// A try-catch-finallt statement is a programming mechanism which enables you to test your code for possible errors, and carry out certain actions in case an error occurs.
// The finally statement lets you to execute a code irrespective of whether or not an error occurs.
function validateData(jsonData) {

  var data;

  try {
    data = JSON.parse(jsonData);
  }

  catch(error) {
    // The message property is a human-readable description of the error
    console.log(error.message);
    data = null;
  }

  return data;
} 