function callAnotherFunction(aFunction, shouldIExecuteIt, value) {
  if (shouldIExecuteIt == true) {
    aFunction(value); // calling or invoking the function
  } else {
    console.log('not executing');
  }
}

// definition of the function
function printThis(result) {
  console.log(result);
}

setTimeout(function () {
  callAnotherFunction(printThis, true, 'saarang');
}, 2000); // first parameter here is a special kind of function known as Anonymous Function

setTimeout(() => {}, 2000); // Arrow function

// // method and functions are same
// function sum(a, b) { // a and b are known as parameters or arguments
//   console.log(a + b); // printing sum of a and b;
// }

// sum;

// sum(12,12); // calling of the function
